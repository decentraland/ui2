import { Rarity } from "@dcl/schemas"
import styled from "@emotion/styled"
import { Link as LinkMui } from "@mui/material"

export const Link = styled(LinkMui)((props: { rarity: Rarity }) => {
  return {
    color: `${Rarity.getColor(props.rarity)}`,
  }
})
