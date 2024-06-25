import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const HairIcon = React.memo((props: SvgIconProps) => {
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
          d="M8.10903 6.88957C2.84951 8.51027 5.65007 16.4983 6.57802 16.6457C7.193 17.1543 6.88432 13.4024 8.55893 11.4067C10.5928 14.796 16.0155 13.7116 16.0155 13.7116C16.0155 13.7116 18.1863 15.6901 16.9697 19.2678C19.3676 16.8943 21.6051 8.38384 15.7426 5.55227C14.8995 5.14483 13.9468 5.02985 13.0112 5.00409C11.2211 4.9559 9.18297 5.3204 8.21303 6.82564"
          fill="white"
        />
      </svg>
    </SvgIcon>
  )
})

export { HairIcon }
