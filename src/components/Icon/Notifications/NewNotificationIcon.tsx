import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

export default function NewNotificationIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
        <circle cx="6" cy="6" r="6" fill="#FF2D55" />
      </svg>
    </SvgIcon>
  )
}
