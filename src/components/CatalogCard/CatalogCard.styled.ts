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
  gap: theme.spacing(1),
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
  bottom: theme.spacing(2),
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
  flexWrap: 'wrap'
}))

const InfoBadgesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  color: theme.palette.text.secondary
}))

type ContainerProps = Pick<CatalogCardProps, 'withShadow' | 'hideRarityOnHover' | 'hoverShadow'>

const CatalogCardContainer = styled(Card, {
  shouldForwardProp: prop => prop !== 'withShadow' && prop !== 'hideRarityOnHover' && prop !== 'hoverShadow'
})<ContainerProps>(({ theme, withShadow, hideRarityOnHover, hoverShadow }) => {
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
      [`${ExtraInformationContainer}, ${CatalogItemInformationContainer}`]: {
        height: 'auto',
        opacity: 1,
        transition: 'height 0.3s ease-in-out, opacity 0.6s ease-in-out'
      },
      [`${AssetImageContainer}`]: !glow
        ? {
            height: theme.spacing(20),
            transition: 'height 0.1s ease-in-out'
          }
        : {},
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
