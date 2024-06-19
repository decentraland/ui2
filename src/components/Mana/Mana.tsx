import { Network } from "@dcl/schemas"
import { Tooltip } from "@mui/material"
import { getNetworkMANADescription } from "../../lib/network"
import ManaEthIcon from "../Icon/ManaEthIcon"
import ManaMaticIcon from "../Icon/ManaMaticIcon"
import { ManaProps } from "./Mana.types"
import { ImageContainer, ManaButtonContainer } from "./Mana.styled"

function ManaButton(props: Omit<ManaProps, "showTooltip">) {
  const { children, size, network, primary, color, ...rest } = props
  return (
    <ManaButtonContainer fontSize={size} {...rest}>
      <ImageContainer primary={primary} color={color}>
        {!network || network !== Network.MATIC ? (
          <ManaEthIcon fontSize={size || "inherit"} />
        ) : (
          <ManaMaticIcon fontSize={size || "inherit"} />
        )}
      </ImageContainer>
      {children}
    </ManaButtonContainer>
  )
}

export default function Mana(props: ManaProps) {
  const { showTooltip, ...manaButtonProps } = props
  return showTooltip ? (
    <Tooltip
      placement="top"
      title={getNetworkMANADescription(
        manaButtonProps.network || Network.ETHEREUM
      )}
    >
      <ManaButton {...manaButtonProps} />
    </Tooltip>
  ) : (
    <ManaButton {...manaButtonProps} />
  )
}
