import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const ManaMaticIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0L24 12L12 24L0 12L12 0ZM12.0002 3.36001L20.6402 12L12.0002 20.64L3.36023 12L12.0002 3.36001ZM12.0009 16.32C14.3868 16.32 16.3209 14.3859 16.3209 12C16.3209 9.61415 14.3868 7.68002 12.0009 7.68002C9.61507 7.68002 7.68094 9.61415 7.68094 12C7.68094 14.3859 9.61507 16.32 12.0009 16.32Z"
          fill="#16141A"
        />
      </svg>
    </SvgIcon>
  )
})

export { ManaMaticIcon }
