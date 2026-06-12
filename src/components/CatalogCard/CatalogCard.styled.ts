import { Rarity } from '@dcl/schemas'
import styled from '@emotion/styled'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Address } from '../../components/Address'
import { neutral } from '../../theme/colors'
import { hexToRgba } from '../../utils/colors'
import { AssetImage } from '../AssetImage'
import { CatalogCardProps } from './CatalogCard.types'

// Figma 94:36542 (MarketplaceCards) — flat rarity surface (replaces the legacy radial
// gradient) with the thumbnail rendered as a fixed centered square and a soft drop shadow.
const AssetImageContainer = styled(AssetImage)(({ theme, rarity }) => ({
  borderRadius: '12px 12px 0 0',
  height: theme.spacing(26),
  transition: 'height 0.3s ease-in-out',
  backgroundImage: 'none',
  backgroundColor: Rarity.getColor(rarity),
  '& img': {
    width: '68%',
    height: '68%',
    objectFit: 'contain',
    filter: 'drop-shadow(1px 4px 5px rgba(0, 0, 0, 0.10))'
  },
  [theme.breakpoints.down('sm')]: {
    height: theme.spacing(15)
  }
}))

const CardContentContainer = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  flexFlow: 'column nowrap',
  alignItems: 'flex-start',
  // Figma 94:36542 Info section — translucent black over the page bg, hairline gray-2
  // border on the three open sides and 12px bottom rounding.
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  border: `1px solid ${neutral.gray2}`,
  borderTop: 'none',
  borderRadius: '0 0 12px 12px',
  // Keep gap tight — the card has a fixed height (theme.spacing(45)) and the
  // hover state reveals action + extraInformation + bottomAction inside that
  // same height. Larger gaps make AssetTitle overflow the top edge. Specific
  // 8px separations (e.g. price→rarity) are applied as margins on the target
  // element rather than via the container gap.
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

const CatalogItemInformationContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(0),
    opacity: 0,
    overflow: 'hidden',
    transition: 'height 0.1s ease-in-out, opacity 0.6s ease-in-out'
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
  flex: 1,
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(0),
    opacity: 0,
    overflow: 'hidden',
    transition: 'height 0.1s ease-in-out, opacity 0.6s ease-in-out'
  }
}))

const BottomActionContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  // Match the CardContent's 16px horizontal padding so the BUY button visually
  // covers the rarity / info badge row underneath (which uses the same gutter).
  bottom: theme.spacing(3),
  left: theme.spacing(2),
  right: theme.spacing(2),
  opacity: 0,
  transform: `translateY(calc(100% + ${theme.spacing(2)}))`,
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
  // 8px breathing room between the price row and the rarity / info badges
  // (without forcing the same gap on every other CardContent child).
  marginTop: theme.spacing(1)
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
  return {
    height: theme.spacing(45),
    transition: 'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out, height 0.1s ease-in-out',
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
      transition: 'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out, height 0.3s ease-in-out',
      height: glow ? theme.spacing(45) : theme.spacing(46),
      transform: glow ? 'translateY(-4px)' : 'none',
      padding: theme.spacing(0),
      borderRadius: 12,
      backgroundColor: glow ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
      boxShadow: glow
        ? '0px 2px 12px 12px rgba(255, 255, 255, 0.3)'
        : withShadow
          ? `0px 0px 20px 6px ${hexToRgba(theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black, 0.37)}`
          : 'none',
      [`${ExtraInformationContainer}, ${CatalogItemInformationContainer}`]: disableInfoExpansion
        ? {}
        : {
            height: 'auto',
            opacity: 1,
            transition: 'height 0.3s ease-in-out, opacity 0.6s ease-in-out'
          },
      // Shrink the asset image on hover so the freed vertical space holds the
      // revealed `bottomAction` / extra-info rows without overlapping the badge
      // row underneath. `disableInfoExpansion` opts out (used when the card is
      // a static link target — own-profile equipped items).
      [`${AssetImageContainer}`]: disableInfoExpansion
        ? {}
        : {
            height: theme.spacing(20),
            transition: 'height 0.1s ease-in-out'
          },
      // data-role selectors don't depend on `@emotion/babel-plugin` running on
      // this file, so they survive any consumer bundler setup.
      '& [data-role="catalog-card-bottom-action"]': {
        opacity: 1,
        transform: 'translateY(0)',
        pointerEvents: 'auto'
      },
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
  CatalogItemInformationContainer,
  InfoBadgesContainer,
  RarityBadgeSlot
}
