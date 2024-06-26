import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const ManaEthIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.864 6.952C9.864 4.968 8.264 3.32 6.28 3.32C4.296 3.32 2.696 4.968 2.696 6.952C2.696 8.92 4.296 10.52 6.28 10.52C8.264 10.52 9.864 8.92 9.864 6.952ZM9.032 6.952C9.032 8.456 7.688 9.688 6.28 9.688C4.728 9.688 3.528 8.488 3.528 6.952C3.528 5.432 4.728 4.152 6.28 4.152C7.704 4.152 9.032 5.432 9.032 6.952ZM12.248 10.424V3.544L6.28 0.12L0.312 3.544V10.424L6.28 13.848L12.248 10.424ZM11.192 9.832L6.296 12.632L1.368 9.832V4.184L6.28 1.336L11.192 4.184V9.832Z" />
      </svg>
    </SvgIcon>
  )
})

export { ManaEthIcon }
