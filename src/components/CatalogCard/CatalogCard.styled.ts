import styled from '@emotion/styled'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Address } from '../../components/Address'
import { hexToRgba } from '../../utils/colors'
import { AssetImage } from '../AssetImage'
import { CatalogCardProps } from './CatalogCard.types'

const AssetImageContainer = styled(AssetImage)(({ theme }) => ({
  borderRadius: `${theme.spacing(1)} ${theme.spacing(1)} 0 0`,
  height: theme.spacing(26),
  transition: 'height 0.3s ease-in-out',
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

const AssetTitle = styled(Typography)({
  fontWeight: 600,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  maxWidth: '100%'
})

const AssetAddress = styled(Address)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  lineHeight: theme.typography.body2.lineHeight,
  color: theme.palette.text.secondary
}))

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
    borderRadius: theme.spacing(1),
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
      borderRadius: theme.spacing(1),
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
  AssetHeaderContainer,
  CardContentContainer,
  AssetAddress,
  AssetTitle,
  BadgeRow,
  BottomActionContainer,
  ExtraInformationContainer,
  CatalogItemInformationContainer,
  InfoBadgesContainer,
  RarityBadgeSlot
}
