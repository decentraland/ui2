#!/bin/bash
# Print branch, upstream, node-vs-.nvmrc check, and core ui2 reminders.
# Always exits 0 — advisory output only.

set -u

project_dir="${CLAUDE_PROJECT_DIR:-$(pwd)}"
[ -d "$project_dir/.git" ] || [ -f "$project_dir/.git" ] || exit 0

branch=$(git -C "$project_dir" rev-parse --abbrev-ref HEAD 2>/dev/null || echo "?")
upstream=$(git -C "$project_dir" rev-parse --abbrev-ref --symbolic-full-name '@{u}' 2>/dev/null || echo "(no upstream)")

node_required="(unknown)"
# Normalize: .nvmrc may or may not include the leading 'v'. Strip it so comparisons are uniform.
[ -f "$project_dir/.nvmrc" ] && node_required=$(tr -d '[:space:]v' < "$project_dir/.nvmrc")
node_current="(node not on PATH)"
if command -v node >/dev/null 2>&1; then
  node_current=$(node --version 2>/dev/null)
fi

mismatch=""
case "$node_current" in
  v"$node_required"|v"$node_required".*)
    : ;;
  *)
    [ "$node_required" != "(unknown)" ] && mismatch="  ⚠ Node mismatch — repo expects v$node_required (.nvmrc), shell has $node_current. Run 'nvm use'."
    ;;
esac

cat >&2 <<EOF
=== ui2 (decentraland-ui2) ===
Branch: $branch  Upstream: $upstream
Node:   current=$node_current  required=$node_required
$mismatch

Reminders (CLAUDE.md is canonical):
  • Public API: src/index.ts — NAMED re-exports only (tree-shaking). Adding a component? Re-export it alphabetically.
  • Component layout: src/components/<Name>/ with <Name>.tsx, .types.ts, .stories.tsx, index.ts (+ optional .styled.ts).
  • MUI styled() does NOT support Emotion component-reference selectors — use data-role attributes (CLAUDE.md §4, PR #429).
  • No husky → run manually before commit: format → lint:fix → lint:package-json → build → test (CLAUDE.md §9).
  • Package manager is npm (lockfile committed). CI uses 'npm install', not 'npm ci'.
  • ADR-6: lowercase commit/PR titles, no Co-Authored-By, never push without explicit user authorization.
EOF

exit 0
