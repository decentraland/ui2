# .claude/ — ui2 agent kit

Project-level Agent Development Kit (ADK) for the `decentraland-ui2` repo. Augments Claude Code (and compatible agent runtimes) with skills, hooks, and guardrails specific to this component library.

## Source of truth

[`../CLAUDE.md`](../CLAUDE.md) is the constitution: stack, folder map, component conventions, MUI `styled()` gotcha, public-API rules, pre-PR pipeline, ADR-6 git rules, pitfalls. This README is an index — when in doubt, read CLAUDE.md.

## Layout

```
.claude/
├── README.md            # this file
├── settings.json        # registers hooks
├── hooks/
│   ├── pre-bash-block-destructive.sh   # blocks rm -rf on public-API paths, --no-verify, force-push to master
│   ├── pre-write-warn-public-surface.sh# warns when editing src/index.ts, package.json, theme tokens, lint/ts configs,
│   │                                   # and when a component edit introduces a light/dark token store
│   └── session-start.sh                # prints branch, node check, and core reminders
└── skills/
    ├── add-component/SKILL.md          # add a new src/components/<Name>/ with the 4-file pattern
    ├── styled-with-mui/SKILL.md        # MUI styled() correctly (data-role selectors; per-scheme colours)
    └── pre-pr-pipeline/SKILL.md        # format → lint:fix → lint:package-json → build → test, in order
```

No custom agents — the harness-level `pr-review-toolkit:code-reviewer` plus this CLAUDE.md cover review needs without an additional 400-token agent definition.

## Why these hooks / skills exist

Every entry is justified against a concrete rule in `CLAUDE.md` or a recurring pattern in the recent PR history:

| Entry                              | Justification                                                                                                                            |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `pre-bash-block-destructive.sh`    | ADR-6 (`--no-verify`, force-push to master); §2 critical paths; §12 pitfalls.                                                            |
| `pre-write-warn-public-surface.sh` | §5 public API tree-shaking; §8 schemas cascade; §1 lockfile binding; §6 per-scheme tokens (PR #472).                                     |
| `session-start.sh`                 | §1 npm-only + node v20; §4 styled() gotcha is high-frequency.                                                                            |
| skill `add-component`              | §3 component conventions (4-file layout, story shape, alphabetical re-export).                                                           |
| skill `styled-with-mui`            | §4 — the most recurring gotcha (PR #429, every new styled component risks it); §6 — where per-scheme light/dark values belong (PR #472). |
| skill `pre-pr-pipeline`            | §9 — no husky, order matters, format-after-lint regresses formatting.                                                                    |

## Testing a hook change

The hooks read a JSON payload on stdin, so they are testable without the harness:

```bash
export CLAUDE_PROJECT_DIR=$PWD
printf '%s' '{"tool_input":{"file_path":"'$PWD'/src/index.ts","new_string":"export { Foo }"}}' \
  | bash .claude/hooks/pre-write-warn-public-surface.sh
```

For a content-aware rule, also replay the files it could match and confirm the false-positive
count is zero, otherwise the hook becomes noise and gets switched off:

```bash
for f in $(git ls-files 'src/components/**'); do
  jq -Rn --arg p "$PWD/$f" --rawfile c "$f" '{tool_input:{file_path:$p,content:$c}}' \
    | bash .claude/hooks/pre-write-warn-public-surface.sh
done
```

## Local overrides

`.claude/settings.local.json` and `.claude/cache/` are gitignored — use them for per-developer settings and ephemeral state. The rest of this directory is versioned so the whole team gets the same guardrails.

## Distribution

Not packaged as a plugin. If you want to share this kit with another repo, copy `.claude/` and adjust paths in the hooks (`SUBMODULES`, the file-path warn list) to match the target repo's structure.
