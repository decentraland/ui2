import styled from '@emotion/styled'

/**
 * Fixed overlay that floats the shared preview iframe over the hovered card image.
 * While "warming" (iframe booting, nothing hovered) it stays parked at the viewport
 * origin hidden via `clip-path` — NOT `visibility: hidden`, which can pause the
 * iframe's render loop and defeat the pre-warming.
 */
const PlayerOverlay = styled('div')<{ visible: boolean; overlayZIndex?: number }>(({ visible, overlayZIndex }) => ({
  position: 'fixed',
  // Default sits above page content but BELOW app chrome — the MUI `appBar` (1100),
  // `modal` (1300), `snackbar` (1400) and `tooltip` (1500) layers — so the floating
  // preview never covers a fixed navbar, an open dialog or a toast. `pointer-events`
  // stays none so nothing is blocked. When the previewed card itself lives inside a
  // modal, the consumer passes a higher `overlayZIndex` (e.g. above 1300) so the
  // preview floats over that modal's own content.
  zIndex: overlayZIndex ?? 1050,
  borderRadius: 10,
  overflow: 'hidden',
  // Clicks fall through to the card underneath (navigation keeps working).
  pointerEvents: 'none',
  transition: 'opacity 120ms ease-out',
  contain: 'layout paint',
  ...(visible ? { opacity: 1, clipPath: 'none' } : { top: 0, left: 0, width: 320, height: 320, opacity: 0, clipPath: 'inset(50%)' })
}))

const SpinnerContainer = styled('div')({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export { PlayerOverlay, SpinnerContainer }
