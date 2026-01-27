import { Rarity } from '@dcl/schemas'
import styled from '@emotion/styled'
import { Link as LinkMui } from '@mui/material'

const Link = styled(LinkMui)<{ rarity: Rarity }>(({ rarity }) => ({
  color: Rarity.getColor(rarity),
  textDecorationColor: 'transparent'
}))

export { Link }
