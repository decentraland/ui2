---
name: styled-with-mui
description: Write MUI styled() components correctly in ui2, avoiding the Emotion component-reference selector trap. Triggers on "styled component", "cross-component hover", "${Component} selector in styled", "hover effect not working", "data-role selector". Use whenever creating or editing a styled() that targets another component.
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

## When to use

- Any time you write `styled(SomeMuiComponent)` and the styles include a selector for a child component.
- Hover, focus, or state-based styling that needs to reach into a descendant.
- Porting Emotion `styled` code from another repo into ui2.

## When NOT to use

- Pure within-component styling (`'&:hover': { … }` on a self-targeting selector) — no other component is referenced, the gotcha doesn't apply.
- Theme-driven props (`({ theme }) => …`) — these work fine; the gotcha is specifically about component references in selectors.
- Standard CSS class selectors (`'.MuiButton-root': { … }`) — these are class names, not component references, and resolve normally.

## Checklist before opening the PR

1. **Search the diff for `${`** inside any `styled()` call. If found, rewrite using `data-role`.
2. **Build the storybook story** for the component and toggle the state (hover, focus, etc.) — the gotcha is silent in TypeScript and only visible in the rendered DOM.
3. **Inspect the generated class names** in DevTools — if you see `no_component_selector` anywhere in the computed CSS, the gotcha is still present.
4. **Run `npm run build`** — the type system will not catch this; only runtime / DOM inspection will.

## References

- CLAUDE.md §4 — short summary of the rule.
- PR #429 (`fix: use data-role selectors for hover targeting`) — the canonical incident.
- `src/components/EventSmallCard/EventSmallCard.styled.ts` — reference implementation using the `data-role` pattern.
