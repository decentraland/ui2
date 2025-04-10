import React from "react"
import { SvgIconProps } from "@mui/material/SvgIcon"
import { StyledSecondaryIcon } from "./JumpIn.styled"

const SecondaryPin = React.memo((props: SvgIconProps) => (
  <StyledSecondaryIcon {...props}>
    <g>
      <path d="M0 0H16V16H0z" fill="none" />
      <path d="M8 3c2.21 0 4 1.82 4 4.063 0 1.497-1.333 3.698-4 6.604C5.333 10.76 4 8.56 4 7.063 4 4.82 5.79 3 8 3zm0 2.54c-.828 0-1.5.682-1.5 1.523 0 .842.672 1.524 1.5 1.524s1.5-.682 1.5-1.524c0-.841-.672-1.523-1.5-1.523z" />
    </g>
  </StyledSecondaryIcon>
))

export { SecondaryPin }
