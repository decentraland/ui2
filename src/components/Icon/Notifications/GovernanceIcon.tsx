import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const GovernanceIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_607_12590)" />
        <path
          d="M13.1253 8.12491C13.1253 8.74642 12.6219 9.24982 12.0003 9.24982C11.3788 9.24982 10.8753 8.74642 10.8753 8.12491C10.8753 7.5034 11.3788 7 12.0003 7C12.6219 7 13.1253 7.5034 13.1253 8.12491Z"
          fill="white"
        />
        <path
          d="M9.00014 9.24982C9.00014 9.87133 8.49671 10.3747 7.87516 10.3747C7.25432 10.3747 6.75019 9.87133 6.75019 9.24982C6.75019 8.62831 7.25432 8.12491 7.87516 8.12491C8.49671 8.12491 9.00014 8.62831 9.00014 9.24982Z"
          fill="white"
        />
        <path
          d="M17.2504 9.24982C17.2504 9.87133 16.7463 10.3747 16.1255 10.3747C15.5039 10.3747 15.0005 9.87133 15.0005 9.24982C15.0005 8.62831 15.5039 8.12491 16.1255 8.12491C16.7463 8.12491 17.2504 8.62831 17.2504 9.24982Z"
          fill="white"
        />
        <path
          d="M16.1255 11.1249C15.788 11.1249 15.4877 11.2374 15.1882 11.3871L12.001 13.2622L8.81384 11.3871C8.51291 11.2374 8.21269 11.1249 7.8752 11.1249C6.82546 11.1249 6 11.9496 6 13V17H9.74968V13.6749L11.6249 14.7999C11.7001 14.8371 11.7374 14.8751 11.8126 14.8751C11.8879 14.8751 11.9251 14.9123 12.0004 14.9123C12.0756 14.9123 12.1128 14.9123 12.1881 14.8751C12.2633 14.8751 12.3006 14.8378 12.3758 14.7999L14.251 13.6749L14.2503 16.9993H18V12.9993C18 11.9496 17.1752 11.1249 16.1255 11.1249Z"
          fill="white"
        />
        <path
          d="M12.0003 12.3996L13.8003 11.3499C13.5753 10.5997 12.863 10.0373 12.0003 10.0373C11.1376 10.0373 10.4626 10.5997 10.2004 11.3499L12.0003 12.3996Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_607_12590"
            x1="2.5"
            y1="1.5"
            x2="21"
            y2="22.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A14BF3" />
            <stop offset="1" stopColor="#6C30A6" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { GovernanceIcon }