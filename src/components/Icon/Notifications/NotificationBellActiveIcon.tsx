import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"
import { Palette, useTheme } from "@mui/material"

const NotificationBellActiveIcon = React.memo((props: SvgIconProps) => {
  const theme = useTheme<{
    palette: Palette & { icon: string }
  }>()
  return (
    <SvgIcon {...props}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill={theme.palette.primary.main} />
        <path
          d="M16 23C15.6021 22.9982 15.2209 22.8503 14.9388 22.5884C14.6568 22.3264 14.4964 21.9714 14.4925 21.6H17.4925C17.4941 21.7872 17.4558 21.9727 17.38 22.146C17.283 22.3537 17.1345 22.5369 16.9467 22.6806C16.7589 22.8242 16.5373 22.9241 16.3 22.972H16.2647C16.1776 22.9889 16.089 22.9983 16 23ZM22 20.9H10V19.5L11.5 18.8L11.5 14.95C11.4605 13.9624 11.6995 12.9824 12.193 12.108C12.4359 11.7071 12.7671 11.3588 13.1647 11.0861C13.5624 10.8134 14.0175 10.6225 14.5 10.526V9L17.5 9V10.526C19.4342 10.9558 20.5 12.5266 20.5 14.95V18.8L22 19.5V20.9Z"
          fill={theme.palette.icon}
        />
      </svg>
    </SvgIcon>
  )
})

export { NotificationBellActiveIcon }
