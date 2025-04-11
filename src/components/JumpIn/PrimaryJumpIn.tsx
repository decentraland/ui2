import React from "react"
import { SvgIconProps } from "@mui/material/SvgIcon"
import { StyledPrimaryIcon } from "./JumpIn.styled"

const PrimaryJumpIn = React.memo((props: SvgIconProps) => (
  <StyledPrimaryIcon {...props} viewBox="0 0 16 16">
    <path d="M7.982 0C3.799 0 .369 3.196 0 7.273h7.524V5.09c0-.294.178-.56.45-.672.272-.113.586-.05.794.158l2.916 2.909c.285.284.285.744 0 1.028l-2.916 2.91c-.208.207-.522.27-.794.157-.272-.113-.45-.378-.45-.672V8.727H0C.369 12.804 3.8 16 7.982 16 12.41 16 16 12.418 16 8s-3.59-8-8.018-8z" />
  </StyledPrimaryIcon>
))

export { PrimaryJumpIn }
