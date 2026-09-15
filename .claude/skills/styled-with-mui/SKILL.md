---
name: styled-with-mui
description: Write MUI styled() components correctly in ui2 — the Emotion component-reference selector trap, and where per-scheme (light/dark) colour values belong. Triggers on "styled component", "cross-component hover", "${Component} selector in styled", "hover effect not working", "data-role selector", "light mode", "dark mode", "theme aware", "per-scheme colors", "palette.mode". Use whenever creating or editing a styled() that targets another component or needs different values per color scheme.
---

# styled-with-mui

MUI's `styled()` is the canonical way to author themed components in ui2 (`@mui/material`). It has one well-known limitation that has bitten this repo before — PR #429 reverted a release for it. This skill encodes the safe pattern.

## The gotcha

MUI's `styled()` does **not** resolve Emotion component-reference selectors (`${Component}` inside a tagged template). At runtime, the reference resolves to the literal string `no_component_selector`, silently breaking the selector.

```ts
// WRONG — hover never fires.
const TimePill = styled(Box)({
  /* … */
})

const Card = styled(Box)`
  &:hover ${TimePill} {
    opacity: 1;
  }
`
// Generated CSS: ".css-XYZ:hover no_component_selector { opacity: 1; }"  ← broken
```

This works in plain `@emotion/styled`, but not when you go through MUI's `styled()`.

## The fix — `data-role` attribute selectors

Tag the child with a `data-role` attribute, and target it from the parent via a CSS attribute selector:

```ts
import { Box, styled } from '@mui/material'

export const TimePill = styled(Box)(({ theme }) => ({
  transition: 'opacity 0.2s ease'
  // …
}))

export const Card = styled(Box)({
  position: 'relative',
  '&:hover [data-role="time-pill"]': {
    opacity: 1
  }
})
```

```tsx
<Card>
  <TimePill data-role="time-pill" />
</Card>
```

Use kebab-case for the `data-role` value. Keep the role name semantic, not the component name (`time-pill`, not `TimePill`) — the role describes intent.

## Per-scheme values go in the theme, not in the component

The second recurring mistake. When a component needs different colours in light and dark, the tempting move is a local map next to the styled components:

```ts
// WRONG — a parallel token store inside src/components/<Name>/.
const NAVBAR_SCHEMES = {
  light: { backdrop: 'rgba(255, 255, 255, 0.4)', text: '#242129' },
  dark: { backdrop: 'rgba(22, 21, 24, 0.4)', text: '#ECEBED' }
} as const

const Root = styled('nav')(({ theme }) => ({
  background: theme.palette.mode === 'light' ? NAVBAR_SCHEMES.light.backdrop : NAVBAR_SCHEMES.dark.backdrop
}))
```

It works, and it still gets rejected: design values end up somewhere no designer or consumer will look, and the repo already has a token system for exactly this.

Scope check before you act on this: the target is a **token store** — a `light:` / `dark:` map of design values. A single inline `theme.palette.mode === 'dark' ? A : B` is not that, and it is the incumbent pattern in `EventCard`, `EventSmallCard`, `SceneCard` and `CatalogCard`. Reach for palette tokens whenever you are introducing a _set_ of per-scheme values, but do not rewrite those four components on the way past.

The values belong in `src/theme/colorSchemes.ts`, under `palette._components.<component>`, alongside the `appBar` / `tooltip` / `chip` / `snackbar` entries already there:

```ts
// src/theme/colorSchemes.ts
const navbar = {
  light: { backdropDesktop: 'rgba(255, 255, 255, 0.4)', text: neutral.softBlack2 },
  dark: { backdropDesktop: 'rgba(22, 21, 24, 0.4)', text: neutral.gray5 }
} as const

type NavbarTokens = (typeof navbar)[keyof typeof navbar]

// …inside each scheme's palette:
_components: {
  /* … */
  navbar: navbar.light // navbar.dark in the dark scheme
}

export type { NavbarTokens }
export { colorSchemas, navbar }
```

```ts
// src/types/emotion.ts — declare what you read
palette: MUITheme['palette'] & {
  icon: string
  _components: { navbar: NavbarTokens }
}
```

```ts
// src/components/Navbar/Navbar.styled.ts — read, don't redefine
const navbarScheme = ({ palette }: NavbarSchemeInput = {}) => palette?._components?.navbar ?? navbarTokens.dark

const Root = styled('nav')(({ theme }) => ({
  background: navbarScheme(theme).backdropDesktop
}))
```

Custom palette keys survive `createPalette` → `extendTheme` → `CssVarsProvider` and resolve correctly in both themes. `RarityBadge.styled.ts:20` has been reading `theme.palette.rarities` this way for a long time.

### Two things that catch people out

- **`src/theme/components.ts` is not the alternative.** It emits MUI `styleOverrides` keyed by component name and covers exactly six: `MuiCssBaseline`, `MuiAppBar`, `MuiButton`, `MuiPaper`, `MuiTabs`, `MuiTab`. A custom component built with `@emotion/styled` on plain `nav` / `button` / `a` elements has no key to write there, so it cannot be reached from that file at all. Note the split the file itself keeps: `components.ts` holds style _rules_ and pulls its _values_ off the palette (`palette.background.paper`, `palette.mode === 'dark' ? … : …`). Values belong in `colorSchemes.ts`.
- **`_components` had no runtime reader before the navbar.** It was inert data in `colorSchemes.ts`; `components.ts` never reads it. So do not expect to find a worked example there. The proven-by-use precedent for custom palette keys read at runtime is top-level (`palette.rarities`, `palette.icon`), and either shape resolves correctly — `_components.<component>` is the semantically right home for component-scoped tokens, top-level is for cross-cutting ones.
- **Use `palette.mode`, not `palette.colorScheme`,** if you do need to branch (`components.ts` does). Under `CssVarsProvider`, `palette.colorScheme` stays `light` for both themes, because `theme('dark')` passes a flat palette that `extendTheme` files under `colorSchemes.light`. Verify by rendering, not by inspecting the theme object: `extendTheme`'s own return value has `palette.mode` undefined, and the mode only appears once the provider merges the active scheme.

### Keep the fallback

Emotion hands the styled callback `{}` when the component renders outside a provider. Read defensively (`palette?._components?.navbar ?? tokens.dark`) so a consumer mounting the component without `DclThemeProvider` does not get a runtime crash, and unit-test that path — it is cheap and it is the only branch in the helper.

### Do not silently redefine an existing value

When you move a hardcoded colour into a token, diff the old and new values per state. Reusing a near neighbour (a `0.1` overlay where the old code said `0.12`) changes the theme you were not asked to touch. Give the state its own token instead.

## When to use

- Any time you write `styled(SomeMuiComponent)` and the styles include a selector for a child component.
- Hover, focus, or state-based styling that needs to reach into a descendant.
- Porting Emotion `styled` code from another repo into ui2.

## When NOT to use

- Pure within-component styling (`'&:hover': { … }` on a self-targeting selector) — no other component is referenced, the gotcha doesn't apply.
- Theme-driven props (`({ theme }) => …`) — these work fine; the gotcha is specifically about component references in selectors. The per-scheme rule above still applies to where those values are defined.
- Standard CSS class selectors (`'.MuiButton-root': { … }`) — these are class names, not component references, and resolve normally.

## Checklist before opening the PR

1. **Search the diff for `${`** inside any `styled()` call. If found, rewrite using `data-role`.
2. **Build the storybook story** for the component and toggle the state (hover, focus, etc.) — the gotcha is silent in TypeScript and only visible in the rendered DOM.
3. **Inspect the generated class names** in DevTools — if you see `no_component_selector` anywhere in the computed CSS, the gotcha is still present.
4. **Run `npm run build`** — the type system will not catch this; only runtime / DOM inspection will.
5. **Search the diff for a `light:` / `dark:` pair inside `src/components/`.** If the component defines its own per-scheme values, move them to `src/theme/colorSchemes.ts` under `palette._components.<component>` first.
6. **If you added a palette token, prove it resolves in the browser.** A unit test that passes the token literal proves nothing about whether the key survives into the emotion theme — read the computed style off the rendered element in both themes.

## References

- CLAUDE.md §4 — short summary of the selector rule; §6 — the per-scheme token rule.
- PR #429 (`fix: use data-role selectors for hover targeting`) — the canonical incident.
- `src/components/EventSmallCard/EventSmallCard.styled.ts` — reference implementation using the `data-role` pattern.
- PR #472 (`feat: support light mode in the navbar`) — the per-scheme incident. The first version shipped a local `NAVBAR_SCHEMES` map and was moved into `colorSchemes.ts` in review.
- `src/theme/colorSchemes.ts` + `src/components/Navbar/Navbar.styled.ts` — reference implementation of the token-reading pattern.
