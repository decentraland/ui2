import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const CoauthorIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width="47" height="47" viewBox="0 0 47 47" fill="none" {...props}>
        <circle
          cx="23.5"
          cy="23.5"
          r="23.5"
          fill="url(#paint0_linear_662_7054)"
        />
        <path
          d="M25.7037 15.9113C25.7037 17.1284 24.7178 18.1142 23.5006 18.1142C22.2834 18.1142 21.2975 17.1284 21.2975 15.9113C21.2975 14.6942 22.2834 13.7083 23.5006 13.7083C24.7178 13.7083 25.7037 14.6942 25.7037 15.9113Z"
          fill="white"
        />
        <path
          d="M17.6253 18.1142C17.6253 19.3314 16.6394 20.3172 15.4222 20.3172C14.2064 20.3172 13.2191 19.3314 13.2191 18.1142C13.2191 16.8971 14.2064 15.9113 15.4222 15.9113C16.6394 15.9113 17.6253 16.8971 17.6253 18.1142Z"
          fill="white"
        />
        <path
          d="M33.7821 18.1142C33.7821 19.3314 32.7949 20.3172 31.579 20.3172C30.3618 20.3172 29.376 19.3314 29.376 18.1142C29.376 16.8971 30.3618 15.9113 31.579 15.9113C32.7949 15.9113 33.7821 16.8971 33.7821 18.1142Z"
          fill="white"
        />
        <path
          d="M31.579 21.7863C30.9181 21.7863 30.3302 22.0066 29.7436 22.2998L23.502 25.9719L17.2604 22.2998C16.6711 22.0066 16.0832 21.7863 15.4223 21.7863C13.3665 21.7863 11.75 23.4013 11.75 25.4583V33.2917H19.0931V26.7801L22.7654 28.9831C22.9127 29.056 22.9857 29.1304 23.133 29.1304C23.2804 29.1304 23.3533 29.2034 23.5007 29.2034C23.648 29.2034 23.721 29.2034 23.8683 29.1304C24.0157 29.1304 24.0886 29.0574 24.236 28.9831L27.9083 26.7801L27.9069 33.2903H35.25V25.4569C35.25 23.4013 33.6348 21.7863 31.579 21.7863Z"
          fill="white"
        />
        <path
          d="M23.5006 24.2825L27.0255 22.2269C26.5849 20.7578 25.1901 19.6563 23.5006 19.6563C21.8111 19.6563 20.4893 20.7578 19.9757 22.2269L23.5006 24.2825Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_662_7054"
            x1="-1.23684"
            y1="1.23684"
            x2="47"
            y2="47"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#34CE76" />
            <stop offset="1" stopColor="#229754" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { CoauthorIcon }
