import { Rarity } from '@dcl/schemas'
import styled, { CSSObject } from '@emotion/styled'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Address } from '../../components/Address'
import { neutral } from '../../theme/colors'
import { hexToRgba } from '../../utils/colors'
import { AssetImage } from '../AssetImage'
import { CatalogCardProps } from './CatalogCard.types'

// Figma 94:36542 (MarketplaceCards) — flat rarity surface (replaces the legacy radial
// gradient) with the thumbnail rendered as a fixed centered square and a soft drop shadow.
// The image area flexes inside the fixed-height card: it absorbs whatever vertical space
// the info section below doesn't need, so hover-revealed rows (bottomAction / action /
// extraInformation) shrink the image by EXACTLY their own height — no fixed jump, and no
// shrink at all when the card has nothing to reveal.
const AssetImageContainer = styled(AssetImage)(({ rarity }) => ({
  borderRadius: '12px 12px 0 0',
  backgroundImage: 'none',
  backgroundColor: Rarity.getColor(rarity),
  flex: '1 1 auto',
  minHeight: 0,
  height: 'auto',
  '& img': {
    width: '68%',
    height: '68%',
    objectFit: 'contain',
    filter: 'drop-shadow(1px 4px 5px rgba(0, 0, 0, 0.10))'
  }
}))

const CardContentContainer = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  // Natural height: the section grows only when hover reveals extra rows, and the
  // flexing image above gives up exactly that space (the card keeps its fixed height).
  flex: '0 0 auto',
  flexDirection: 'column',
  flexFlow: 'column nowrap',
  alignItems: 'flex-start',
  // Figma 94:36542 Info section — translucent black over the page bg, hairline gray-2
  // border on the three open sides and 12px bottom rounding.
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  border: `1px solid ${neutral.gray2}`,
  borderTop: 'none',
  borderRadius: '0 0 12px 12px',
  // Keep gap tight — specific separations (e.g. price→rarity) are applied as margins
  // on the target element rather than via the container gap.
  gap: theme.spacing(0.25),
  minHeight: theme.spacing(20)
}))

const AssetHeaderContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%'
})

// Figma 94:36542 — Inter SemiBold 14, line 1.57, soft white
const AssetTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: 14,
  lineHeight: 1.57,
  color: neutral.softWhite,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  maxWidth: '100%'
})

// Figma 94:36542 — "By <creator>" row: Inter Regular 12, gray-2
const AssetAddress = styled(Address)({
  fontSize: 12,
  fontWeight: 400,
  lineHeight: 1.43,
  color: neutral.gray2
})

// Hover-revealed rows share one mechanic: a grid track animating 0fr → 1fr. The track
// height IS the row's natural height, so the image shrink always matches the revealed
// content — and the reveal animates smoothly without hardcoding any height.
// Below `sm` (touch) the action/extra rows are always visible, as before.
const CatalogItemInformationContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    display: 'grid',
    gridTemplateRows: '0fr',
    opacity: 0,
    pointerEvents: 'none',
    transition: 'grid-template-rows 0.3s ease-in-out, opacity 0.3s ease-in-out'
  }
}))

const CatalogItemInformationContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  [theme.breakpoints.up('sm')]: {
    overflow: 'hidden',
    minHeight: 0
  }
}))

const CatalogCardPriceContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  alignItems: 'center'
})

// Figma 94:36542 — price value: Inter SemiBold ~21, white
const PriceText = styled(Typography)({
  fontSize: 20,
  fontWeight: 600,
  lineHeight: 'normal'
})

const ExtraInformationContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    display: 'grid',
    gridTemplateRows: '0fr',
    opacity: 0,
    pointerEvents: 'none',
    transition: 'grid-template-rows 0.3s ease-in-out, opacity 0.3s ease-in-out'
  }
}))

const ExtraInformationContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    overflow: 'hidden',
    minHeight: 0
  }
}))

// Slides in from the card's bottom edge on hover and rests over the badge-row slot —
// the badge row fades out underneath, so the action never ADDS height (the image above
// stays put). Hidden at every breakpoint when not hovered — touch devices simply never
// show it.
const BottomActionContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  // Side gutters match the CardContent 16px padding; the bottom one sets where the
  // slide-in rests (over the badge row slot).
  padding: theme.spacing(0, 2, 2),
  opacity: 0,
  transform: 'translateY(100%)',
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  pointerEvents: 'none'
}))

const RarityBadgeSlot = styled(Box)({
  display: 'flex',
  transition: 'opacity 0.2s ease-in-out'
})

// Figma marketplace-card spec — subdued rarity chip rendered on the dark info area
// (canonical rarity hue at 30% alpha, light hue text). The canonical hex per rarity is
// owned by `@dcl/schemas.Rarity.getColor` / `getGradient`; we derive the chip surface
// from those so the ui2 palette stays in sync with the schemas source of truth.
const CatalogRarityChip = styled(Box)<{ rarity: Rarity }>(({ rarity }) => {
  const baseHex = Rarity.getColor(rarity)
  const [lightHex] = Rarity.getGradient(rarity)
  return {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 4,
    padding: '2px 6px',
    textTransform: 'uppercase',
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    fontSize: 10.55,
    lineHeight: '14.6px',
    letterSpacing: 0,
    whiteSpace: 'nowrap',
    backgroundColor: hexToRgba(baseHex, 0.3),
    color: lightHex
  }
})

const BadgeRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
  // Anchor the badges to the bottom of the info area: when the card has no price the
  // auto margin absorbs the free space, so the title block keeps its position instead
  // of everything cramming together at the top. The padding keeps an 8px minimum
  // separation from whatever sits above (price row / title).
  marginTop: 'auto',
  paddingTop: theme.spacing(1),
  transition: 'opacity 0.2s ease-in-out'
}))

const InfoBadgesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  color: theme.palette.text.secondary
}))

type ContainerProps = Pick<CatalogCardProps, 'withShadow' | 'hideRarityOnHover' | 'hoverShadow' | 'disableInfoExpansion'>

const CatalogCardContainer = styled(Card, {
  shouldForwardProp: prop =>
    prop !== 'withShadow' && prop !== 'hideRarityOnHover' && prop !== 'hoverShadow' && prop !== 'disableInfoExpansion'
})<ContainerProps>(({ theme, withShadow, hideRarityOnHover, hoverShadow, disableInfoExpansion }) => {
  const glow = hoverShadow === 'glow'
  // data-role selectors don't depend on `@emotion/babel-plugin` running on this file,
  // so they survive any consumer bundler setup (see ui2 CLAUDE.md §4).
  const revealOnHover: CSSObject = disableInfoExpansion
    ? {}
    : {
        '& [data-role="catalog-card-reveal"]': {
          gridTemplateRows: '1fr',
          opacity: 1
        },
        // The action slides up from the card's bottom edge and covers the badge-row
        // slot; the badge row fades out underneath (the attribute is only present on
        // cards that actually carry a bottomAction).
        '& [data-role="catalog-card-bottom-action"]': {
          opacity: 1,
          transform: 'translateY(0)',
          pointerEvents: 'auto'
        },
        '& [data-role="catalog-card-badge-row"]': {
          opacity: 0
        }
      }
  return {
    // The card height never changes — hover redistributes space between the flexing
    // image and the growing info section instead of growing the card.
    height: theme.spacing(45),
    transition: 'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
    // Figma 94:36542 — 12px rounding and a transparent card body: the image section paints
    // the flat rarity color and the info section its own translucent black, so the page
    // background shows through the hairline border corners.
    borderRadius: 12,
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    boxShadow: 'none',
    width: theme.spacing(36),
    maxWidth: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    overflow: 'hidden',
    '&:hover': {
      transform: glow ? 'translateY(-4px)' : 'none',
      backgroundColor: glow ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
      boxShadow: glow
        ? '0px 2px 12px 12px rgba(255, 255, 255, 0.3)'
        : withShadow
          ? `0px 0px 20px 6px ${hexToRgba(theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black, 0.37)}`
          : 'none',
      ...revealOnHover,
      '& [data-role="catalog-card-rarity"]': hideRarityOnHover ? { opacity: 0 } : {}
    }
  }
})

export {
  CatalogCardContainer,
  AssetImageContainer,
  CatalogCardPriceContainer,
  PriceText,
  AssetHeaderContainer,
  CardContentContainer,
  AssetAddress,
  AssetTitle,
  BadgeRow,
  BottomActionContainer,
  CatalogRarityChip,
  ExtraInformationContainer,
  ExtraInformationContent,
  CatalogItemInformationContainer,
  CatalogItemInformationContent,
  InfoBadgesContainer,
  RarityBadgeSlot
}
