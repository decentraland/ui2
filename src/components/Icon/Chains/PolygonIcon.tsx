import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const PolygonIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1474_35755)">
          <rect width="40" height="40" rx="20" fill="white" />
          <path
            d="M20 0C9 0 0 9 0 20C0 31 8.85714 40 20 40C31.1429 40 40 31.1429 40 20C40 8.85714 31 0 20 0ZM31.8571 20.1429C31.8571 20.4286 31.7143 20.8571 31.4286 21L25.7143 24.2857C25.4286 24.4286 25 24.4286 24.7143 24.2857L22.5714 23V20L25.1429 21.5714L29.1429 19.2857V14.7143L25.1429 12.4286L21.4286 14.5714V26.2857C21.4286 26.5714 21.2857 27 21 27.1429L15.2857 30.4286C15 30.5714 14.5714 30.5714 14.2857 30.4286L8.57143 27.1429C8.28571 27 8.14286 26.7143 8.14286 26.2857V19.7143C8.14286 19.4286 8.28571 19 8.57143 18.8571L14.2857 15.5714C14.5714 15.4286 15 15.4286 15.2857 15.5714L17.4286 16.8571V20L14.8571 18.4286L10.8571 20.7143V25.2857L14.8571 27.5714L18.8571 25.2857V13.7143C18.8571 13.4286 19 13 19.2857 12.8571L25 9.57143C25.2857 9.42857 25.7143 9.42857 26 9.57143L31.4286 12.8571C31.7143 13 31.8571 13.2857 31.8571 13.7143V20.1429Z"
            fill="url(#paint0_linear_1474_35755)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1474_35755"
            x1="0.0709752"
            y1="20"
            x2="39.929"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A229C5" />
            <stop offset="1" stopColor="#7B3FE4" />
          </linearGradient>
          <clipPath id="clip0_1474_35755">
            <rect width="40" height="40" rx="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { PolygonIcon }
