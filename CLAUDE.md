# ui2 — agent rules

Decentraland's Material-UI-themed React component library. Published to npm as `decentraland-ui2` and consumed by every modern DCL dapp (sites, marketplace, account, governance, explore-site, etc.). Public API surface is `src/index.ts`; breaking it ripples to every consumer.

## 1. Stack

- **Runtime:** React 18, TypeScript 5.5 (`strict: true`, `noImplicitAny: false`).
- **UI base:** Material-UI v5.16 (`@mui/material`, `@mui/icons-material`), Emotion (`@emotion/react`, `@emotion/styled`).
- **Build:** `tsc` to `dist/` + copy `src/theme/fonts` and `src/Assets`. No bundler — distributed as untranspiled ESM/CJS for tree-shaking.
- **Dev:** Storybook 7.6 (`npm run start`, port 6006).
- **Test:** Jest 29 with ts-jest. Component tests live next to source.
- **Lint/format:** `@dcl/eslint-config/ui.config` + `prettier.config.cjs` (shared DCL config).
- **Package manager:** **npm only** (`package-lock.json` is committed). CI uses `npm install`, not `npm ci`.
- **Node:** v20 (see `.nvmrc`).
- **No husky / no lint-staged.** Pre-commit checks are not automated — run them manually before committing.

## 2. Folder map

```
src/
├── index.ts            # PUBLIC API SURFACE — named re-exports only (tree-shaking)
├── Assets/             # static assets shipped with the package
├── components/<Name>/  # 39 custom components (see §3)
├── config/             # build/runtime config
├── data/               # static data
├── lib/                # internal utilities
├── modules/            # cross-cutting modules (url, jumpIn, contentful, userAgent, …)
├── theme/              # design tokens (colors, components, typography, fonts, provider)
├── types/              # shared TS types incl. emotion theme augmentation
└── utils/              # pure helpers

bin/storybookGenerator.ts   # wipes src/@mui/ and regenerates pass-through MUI stories
.storybook/                 # storybook config (main.ts, preview.ts)
```

## 3. Component conventions

Every custom component in `src/components/<Name>/` ships at least four files:

```
src/components/<Name>/
├── <Name>.tsx          # React component, default export of named export
├── <Name>.types.ts     # Props interface, re-exported as `export type { … }`
├── <Name>.stories.tsx  # Storybook (Meta + StoryObj, title: 'Decentraland UI/<Name>')
└── index.ts            # `export { <Name> } from './<Name>'; export type { … }`
```

Complex styling lives in an optional fifth file: `<Name>.styled.ts` (see §4). Examples: `EventSmallCard`, `JumpIn`, `Badges`.

After creating the component, **re-export it from `src/index.ts`** if it is public. Keep re-exports alphabetical inside their section.

### Story shape

- `title: 'Decentraland UI/<Name>'` — keep this prefix; storySort relies on it (`['Decentraland UI', 'Material UI']`).
- `tags: ['autodocs']` for auto-generated docs page.
- `satisfies Meta<<Name>Props>` for type-safe args.

## 4. MUI `styled()` — known gotcha (PR #429)

MUI's `styled()` does **not** support Emotion component-reference selectors in template literals:

```ts
// WRONG — resolves to "no_component_selector" at runtime, silently breaks.
const Card = styled(Box)`
  &:hover ${TimePill} {
    opacity: 1;
  }
`
```

Use `data-role` attribute selectors instead:

```ts
const TimePill = styled(Box)({
  /* … */
})
// in JSX: <TimePill data-role="time-pill" />
const Card = styled(Box)({
  '&:hover [data-role="time-pill"]': { opacity: 1 }
})
```

Same applies to any cross-component hover/state targeting inside `styled()`.

## 5. Public API — `src/index.ts`

This file is the contract every downstream consumer imports from. Two rules:

1. **Named exports only.** No `export *`. The bundle's tree-shaking depends on the explicit list — `export *` re-exports every named binding from the module graph and pulls dead code into consumer bundles.
2. **Keep the MUI re-export list complete and alphabetical** within each section. When you re-export a new MUI component, add it in the right alphabetical slot.

## 6. Theme

- `light`, `dark` themes exported as `lightTheme`, `darkTheme` (and the older `light`/`dark` for backward compat).
- `ThemeProvider` exported as `DclThemeProvider`.
- Storybook + downstream consumers use `Experimental_CssVarsProvider` and CSS custom properties (`var(--mui-palette-…)`) — prefer tokens over hardcoded hex.
- Emotion theme augmentation lives in `src/types/emotion.ts`; it is imported for side effects from `src/index.ts`.

## 7. Backward-compat patterns (from recent PRs)

- **Optional props with safe defaults.** PRs #436, #426 added behavior via optional props with defaults that preserve previous output (`showManaBalancesInNavbar?: boolean`, `hoverEffect?: 'coin' | 'lift' | 'none'` defaulting to `coin`). Apply the same shape when extending a public component.
- **i18n keys are stable.** PR #427 renamed display text but kept the `whatsOn` key. Do not rename keys for cosmetic changes.

## 8. `@dcl/schemas` cascade

`@dcl/schemas` is a peer dependency (`^26.4.0`). Notification components (`src/components/Notifications/`) and any code that consumes schema-derived metadata must be revisited when `@dcl/schemas` adds new notification types. PR #438 added `EventApprovedNotification` and `EventRejectedNotification` for types introduced in schemas 26.4.0 — pattern: one component per new notification metadata shape, registered in the notification map.

## 9. Pre-PR pipeline (manual — no husky)

Run in this order before pushing:

```bash
npm run format             # prettier --write '**/*.{ts,tsx,js,jsx,json,md,mdx,css}'
npm run lint:fix           # eslint --fix on src/
npm run lint:package-json  # npm-pkg-json-lint .
npm run build              # tsc + copy assets — catches stricter type errors than lint
npm test                   # jest
```

CI (`pull-request.yml`) runs `npm install` → `test` → `lint:check` → `build` → prettier check. A passing local pipeline is necessary but not sufficient — CI also runs the prettier check separately via `wearerequired/lint-action`.

## 10. Git / PR (ADR-6)

- **Branches:** `<type>/<description>` (`feat`, `fix`, `chore`, `docs`, `refactor`).
- **Commit titles:** single-line, lowercase, `<type>: <summary>`. Never `Co-Authored-By:`. Never mention agents/tooling.
- **PR titles:** lowercase, ≤ 70 chars, validated by `validate-pr-title.yml`.
- **PR body:** factual; no `## Summary` boilerplate; no file lists; no agent attribution.
- **SSH only** for git/gh.
- **Never push** without explicit user authorization. After successful push, output the PR URL.

## 11. Adding a re-export of a raw MUI component

If a consumer needs an MUI component not yet re-exported:

1. Add the import alphabetically inside the existing `from '@mui/material'` block in `src/index.ts`.
2. Add it to the named export list (same alphabetical slot).
3. If the component has its own type that consumers will need, also add `export type { … } from '@mui/material'`.
4. Don't `export *`. Don't re-export from a subpath unless the consumer can't reach it through `@mui/material`.

## 12. Pitfalls

- **`npm run generate:storybooks` wipes `src/@mui/`.** That directory is regenerated from `node_modules/@mui/material` by `bin/storybookGenerator.ts`. Never hand-edit files under `src/@mui/`.
- **`build:dist` runs `rm -Rf dist`.** That's normal and expected. Hand-modifying `dist/` is pointless — it's regenerated every build.
- **`peerDependencies` mismatches don't fail install but break consumers at runtime.** Bumping `@dcl/schemas` or `react` here is a breaking change for downstream apps — coordinate with consuming dapp owners.
- **The `eslint.config.js` overrides three rules globally** (`no-empty-object-type`, `no-unused-expressions`, `no-unused-vars`) with a TODO to remove. Don't add to that list without a follow-up PR.
- **Storybook `webpack5` builder is heavy.** Local dev uses `npm run start`; CI does **not** run `build-storybook` (commented out in `pull-request.yml`).
- **Backward-compat:** never tighten an existing public type (adding a required prop, narrowing a union, removing an optional). Add new behavior behind optional props with defaults.
