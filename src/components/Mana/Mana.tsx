import * as React from "react"

import { Network } from "@dcl/schemas"

import { Tooltip } from "@mui/material"

import { Button, ImageContainer } from "./Mana.styled"
import { ManaProps } from "./Mana.types"
import { getNetworkMANADescription } from "../../lib/network"
import ManaEthIcon from "../Icon/ManaEthIcon"
import ManaMaticIcon from "../Icon/ManaMaticIcon"

const ManaButton = React.forwardRef<HTMLDivElement, ManaProps>(
  function ManaButton(props, ref) {
    const { children, size, network, inline, primary, ...rest } = props
    return (
      <Button inline={inline} fontSize={size} ref={ref} {...rest}>
        <ImageContainer primary={primary}>
          {!network || network === Network.ETHEREUM ? (
            <ManaEthIcon fontSize={size || "inherit"} />
          ) : (
            <ManaMaticIcon fontSize={size || "inherit"} />
          )}
        </ImageContainer>
        {children}
      </Button>
    )
  }
)

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
