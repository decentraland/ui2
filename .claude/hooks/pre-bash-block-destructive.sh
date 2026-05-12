#!/bin/bash
# Block destructive bash commands inside the ui2 repo.
# Targets enforced by ../CLAUDE.md:
#  - never rm -rf the public-API surface (src/index.ts), src/components, src/theme, src/Assets, .storybook, bin, .github
#  - never git commit --no-verify (ADR-6)
#  - never git push --force(-with-lease) to origin master|main (ADR-6)
#  - never git reset --hard at repo root (loses uncommitted work)
#  - never git clean -d* at repo root (deletes untracked dirs)
#  - never git branch -D master|main
#  - never npm install --package-lock-only (drops lockfile bindings)
#
# Allows expected destructive flows that the repo's own scripts run:
#  - rm -Rf dist        (build:dist script)
#  - rm -rf src/@mui    (generate:storybooks script regenerates this dir)
#  - rm -rf node_modules (developer maintenance)
#
# Exit codes: 0 allow, 2 block (stderr surfaces to Claude).

set -u

if ! command -v jq >/dev/null 2>&1; then
  marker="${TMPDIR:-/tmp}/.claude-ui2-jq-warned-$PPID"
  # mkdir is atomic and fails if the path already exists OR is a symlink, so it doubles as a
  # one-shot gate that's safe against symlink-attack truncation of the marker target.
  if mkdir "$marker" 2>/dev/null; then
    echo "WARNING: jq not found — .claude/hooks/* operate in fail-open mode (no guards). Install with 'brew install jq'." >&2
  fi
  exit 0
fi

cmd=$(jq -r '.tool_input.command // empty')
[ -z "$cmd" ] && exit 0

block() {
  echo "BLOCKED by .claude/hooks/pre-bash-block-destructive.sh" >&2
  echo "Reason: $1" >&2
  echo "Recovery: $2" >&2
  exit 2
}

# Match `rm` with both a recursive flag and a force flag preceding a critical path.
# Covers combined short (`-rf`, `-fr`, `-Rf`, `-fR` and noisy variants like `-rfv`),
# split short (`-r -f` / `-f -r`), split long (`--recursive --force` / `--force --recursive`),
# and mixed forms (`-r --force`, `--recursive -f`, …).
# $1 is an alternation of paths (e.g. 'src/components|src/theme|src/index.ts').
matches_rm_rf() {
  local paths="$1"
  local rec='(-[a-zA-Z]*[rR][a-zA-Z]*|--recursive)'
  local force='(-[a-zA-Z]*f[a-zA-Z]*|--force)'
  local path_term="(\\./)?(${paths})(/|[[:space:]]|$)"
  # Combined short: a single token containing both r/R and f. Long flags can't be combined,
  # so the long-form bypass is covered by the rf/fr alternatives below.
  local combined="(^|[[:space:]])rm[[:space:]]+(-[a-zA-Z]*[rR][a-zA-Z]*f[a-zA-Z]*|-[a-zA-Z]*f[a-zA-Z]*[rR][a-zA-Z]*)[[:space:]]+${path_term}"
  # Recursive flag, then force flag (either short or long), then path.
  local rf="(^|[[:space:]])rm[[:space:]]+${rec}[[:space:]]+${force}[[:space:]]+${path_term}"
  # Force flag, then recursive flag, then path.
  local fr="(^|[[:space:]])rm[[:space:]]+${force}[[:space:]]+${rec}[[:space:]]+${path_term}"
  printf '%s' "$cmd" | grep -Eq "$combined|$rf|$fr"
}

# 1. rm -rf against critical public-API paths.
# src/@mui is NOT in this list — bin/storybookGenerator.ts legitimately wipes it.
# dist and node_modules are NOT in this list — build:dist and dev maintenance need them.
CRITICAL_PATHS='src/index\.ts|src/components|src/theme|src/Assets|src/types/emotion\.ts|\.storybook|bin|\.github|package-lock\.json|package\.json'
if matches_rm_rf "$CRITICAL_PATHS"; then
  block "rm -rf against a ui2 public-API path (src/index.ts, src/components, src/theme, src/Assets, .storybook, bin, .github, package*.json) would break the published API." \
        "Delete specific files individually, or revert with git checkout HEAD -- <path>."
fi

# 2. git commit --no-verify (ADR-6).
# Only the long form is matched: '-n' false-matches when '-n' appears in a quoted commit message.
if printf '%s' "$cmd" | grep -Eq "git[[:space:]]+commit[[:space:]]+.*--no-verify"; then
  block "git commit --no-verify violates ADR-6 — pre-commit checks are mandatory." \
        "Fix the underlying lint/format/typecheck failure instead of skipping hooks."
fi

# 3. git push --force / -f to master|main — flag and protected branch may appear in either order.
if printf '%s' "$cmd" | grep -Eq "git[[:space:]]+push"; then
  has_force=0
  has_protected=0
  printf '%s' "$cmd" | grep -Eq "(--force(-with-lease)?|[[:space:]]-f([[:space:]]|$))" && has_force=1
  printf '%s' "$cmd" | grep -Eq "(origin[[:space:]]+(master|main)|[[:space:]](master|main)([[:space:]]|$))" && has_protected=1
  if [ "$has_force" = "1" ] && [ "$has_protected" = "1" ]; then
    block "Force-push to master/main is forbidden — would rewrite shared history." \
          "Open a PR with the corrective commit instead."
  fi
fi

# 4. git reset --hard at the repo root.
if printf '%s' "$cmd" | grep -Eq "(^|[[:space:]&;|])git[[:space:]]+reset[[:space:]]+--hard($|[[:space:]])"; then
  block "git reset --hard discards uncommitted work — including any in-progress component edits." \
        "Confirm with the user. To target a specific path: git checkout HEAD -- <path>."
fi

# 5. git clean with -d (deletes untracked dirs — could wipe new component scaffolding).
if printf '%s' "$cmd" | grep -Eq "(^|[[:space:]&;|])git[[:space:]]+clean[[:space:]]+(-[a-zA-Z]*d[a-zA-Z]*|-[a-zA-Z]+[[:space:]]+-[a-zA-Z]*d[a-zA-Z]*|-[a-zA-Z]*d[a-zA-Z]*[[:space:]]+-[a-zA-Z]+)"; then
  block "git clean -d can delete untracked component directories." \
        "Use git status first; remove specific files individually, or scope: git clean -d -- <path>."
fi

# 6. git branch -D master|main.
if printf '%s' "$cmd" | grep -Eq "git[[:space:]]+branch[[:space:]]+-D[[:space:]]+(master|main)([[:space:]]|$)"; then
  block "Deleting master/main locally breaks the tracking baseline." \
        "Switch with git checkout instead."
fi

# 7. npm install --package-lock-only (drops dependency bindings without installing).
if printf '%s' "$cmd" | grep -Eq "npm[[:space:]]+install[[:space:]]+.*--package-lock-only"; then
  block "npm install --package-lock-only rewrites package-lock.json without installing node_modules, easily desynchronizing the lockfile." \
        "Use a normal 'npm install <pkg>' (CI uses 'npm install', not 'npm ci')."
fi

exit 0
