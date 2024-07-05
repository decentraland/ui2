import { Rarity } from "@dcl/schemas"
import styled from "@emotion/styled"
import { Link as LinkMui } from "@mui/material"

const Link = styled(LinkMui)((props: { rarity: Rarity }) => {
  return {
    color: `${Rarity.getColor(props.rarity)}`,
    textDecorationColor: "transparent",
  }
})

export { Link }
