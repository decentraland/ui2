import styled from '@emotion/styled'

/**
 * Fixed overlay that floats the shared preview iframe over the hovered card image.
 * While "warming" (iframe booting, nothing hovered) it stays parked at the viewport
 * origin hidden via `clip-path` — NOT `visibility: hidden`, which can pause the
 * iframe's render loop and defeat the pre-warming.
 */
const PlayerOverlay = styled('div')<{ visible: boolean }>(({ visible }) => ({
  position: 'fixed',
  zIndex: 100,
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
