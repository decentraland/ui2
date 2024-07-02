import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const NewNotificationIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg fill="none">
        <circle cx="6" cy="6" r="6" fill="#FF2D55" />
      </svg>
    </SvgIcon>
  )
})

export { NewNotificationIcon }
