import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import { i18n as rarityBadgeI18n } from './RarityBadge.i18n'
import { RarityBadgeProps } from './RarityBadge.types'
import { RarityBadge as StyledRarityBadge } from './RarityBadge.styled'

const RarityBadge = React.memo((props: RarityBadgeProps) => {
  const { rarity, size = 'medium', square = false, withTooltip = false, onClick = () => {}, i18n = rarityBadgeI18n } = props

  const content = <StyledRarityBadge rarity={rarity} label={i18n.rarities[rarity]} size={size} square={square} onClick={onClick} />

  return withTooltip ? (
    <Tooltip title={i18n.raritiesDescription[rarity]} placement="top" arrow>
      {content}
    </Tooltip>
  ) : (
    content
  )
})

export { RarityBadge }
