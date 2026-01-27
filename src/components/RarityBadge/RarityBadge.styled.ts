import styled from '@emotion/styled'
import { Chip } from '@mui/material'
import { RarityBadgeProps } from './RarityBadge.types'

const RarityBadge = styled(Chip)<RarityBadgeProps>(props => {
  const { theme, rarity, size = 'medium', square = false } = props
  const typographyBySize = {
    small: {
      fontSize: theme.typography.caption.fontSize,
      fontWeight: theme.typography.caption.fontWeight,
      lineHeight: theme.typography.caption.lineHeight
    },
    medium: {
      fontSize: theme.typography.body2.fontSize,
      fontWeight: theme.typography.body2.fontWeight,
      lineHeight: theme.typography.body2.lineHeight
    }
  }
  return {
    backgroundColor: theme.palette.rarities[rarity],
    color: theme.palette.raritiesText[rarity],
    textTransform: 'uppercase',
    ...(square
      ? {
          borderRadius: '5px',
          height: size === 'small' ? theme.spacing(3) : theme.spacing(3.25)
        }
      : {}),
    ...typographyBySize[size],
    ':hover': {
      backgroundColor: theme.palette.rarities[rarity]
    }
  }
})

export { RarityBadge }
