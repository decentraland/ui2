---
name: pre-pr-pipeline
description: Run the local pre-PR verification pipeline in the right order. Triggers on "ready to push", "before commit", "pre-pr", "open PR for ui2", "pre-commit checks ui2". Use after finishing any code change before staging, committing, or pushing.
---

# pre-pr-pipeline

ui2 has **no husky** and **no lint-staged**. None of the pre-commit checks fire automatically — they must be run manually, in the right order, before pushing. CI (`pull-request.yml`) re-runs a subset and blocks the PR on failure; a passing local pipeline is necessary, not sufficient.

## When to use

- After finishing code changes, before `git add`/`git commit`.
- After amending a commit that touched any source file.
- After resolving merge conflicts.

## When NOT to use

- For doc-only changes (`README.md`, `CLAUDE.md`, `.claude/**.md`) → only `npm run format` is needed.
- For changes confined to `.github/workflows/` → CI re-runs the workflows anyway; the source pipeline doesn't apply.

## The pipeline

Run **in this order**:

```bash
npm run format             # 1. prettier --write '**/*.{ts,tsx,js,jsx,json,md,mdx,css}'
npm run lint:fix           # 2. eslint --fix on src/
npm run lint:package-json  # 3. npm-pkg-json-lint .  (catches @dcl/* version range violations)
npm run build              # 4. tsc + copy assets  — stricter than lint, produces dist/
npm test                   # 5. jest
```

Order matters:

1. `format` first — Prettier rewrites whitespace and quote style. Running lint before format leaves you with two passes of formatting fixes (lint introduces violations Prettier then erases).
2. `lint:fix` second — ESLint applies autofixable rules. Anything it can't autofix surfaces as a failure to address by hand.
3. `lint:package-json` is cheap and surfaces peer-dep range violations (`^` required for `@dcl/*`, exact for everything else per ADR-6).
4. `build` last among the static checks — `tsc` enforces the project's `strict: true` settings and produces the `dist/` artifact that downstream consumers see. Type errors only visible at build time are common.
5. `test` runs the Jest suite; it's the only step that exercises runtime behavior.

## When CI disagrees

CI's `pull-request.yml` runs:

```
npm install → npm test → npm run lint:check → npm run build → prettier --check (via lint-action)
```

Two differences worth knowing:

- **`lint:check` vs `lint:fix`.** `lint:check` is the same as `lint`; both fail on violations without fixing. If `lint:fix` left autofix residue (rare), `lint:check` will still pass — it's the same rule set without `--fix`.
- **Prettier is re-checked by `wearerequired/lint-action`.** If your editor is silently configured with a different Prettier version, you may pass local `format` and still fail CI. Stick to the repo's pinned `prettier@3.7.4` (already in `devDependencies`).

CI does **not** run `lint:package-json` — there is a dedicated workflow (`lint-package-json.yml`) for it. Run it locally to avoid a second CI round-trip.

CI does **not** run `build-storybook` (commented out in the workflow). Don't rely on Storybook compiling cleanly as part of merge confidence — verify it locally via `npm run start` if you touched stories or `.storybook/`.

## What success looks like

```
$ npm run format
... (prettier writes files)

$ npm run lint:fix
... (eslint reports 0 errors, 0 warnings)

$ npm run lint:package-json
... (npmPkgJsonLint exits 0)

$ npm run build
... (tsc emits dist/, copy steps complete)

$ npm test
Tests:       N passed, N total
```

Only then is the branch ready for `git add` → `git commit` → `git push`. Never push without explicit user authorization (ADR-6).

## Common failure modes

- **`lint:fix` introduces formatting drift** → re-run `format` after `lint:fix`. (Rare with current configs but possible after dep bumps.)
- **`build` succeeds, `dist/index.d.ts` exports something private** → check what changed in `src/index.ts`; CLAUDE.md §5 forbids `export *`.
- **`test` fails with "Cannot find module '@dcl/schemas/...'"** → peer dep mismatch. Verify `package.json` `peerDependencies` against the version in `node_modules/@dcl/schemas/package.json`.
- **`lint:package-json` complains about version pins** → ADR-6 requires `^` for `@dcl/*` and `decentraland-*`, exact pins (`--save-exact`) for everything else.

## References

- CLAUDE.md §9 — same pipeline summarized.
- `.github/workflows/pull-request.yml` — CI's slightly-different order.
- ADR-6 (`~/.claude/CLAUDE.md` global) — version pinning, commit/PR style.
