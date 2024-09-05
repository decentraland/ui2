import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const AvalancheIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1474_35780)">
          <path
            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
            fill="#E84142"
          />
          <path
            d="M27.0552 20.5197C27.7484 19.3226 28.8691 19.3226 29.5592 20.5197L33.8738 28.0946C34.567 29.291 34 30.2674 32.612 30.2674H23.9211C22.5513 30.2674 21.9842 29.291 22.6593 28.0946L27.0552 20.5197ZM18.709 5.93692C19.4014 4.74055 20.504 4.74055 21.1972 5.93692L22.1577 7.67194L24.4251 11.6562C24.6972 12.2182 24.8386 12.8346 24.8386 13.459C24.8386 14.0835 24.6972 14.6998 24.4251 15.2618L16.8186 28.4409C16.479 28.9688 16.0198 29.4093 15.4781 29.7267C14.9365 30.044 14.3277 30.2292 13.7011 30.2674H7.38566C6.00001 30.2674 5.43298 29.3068 6.12383 28.0946L18.709 5.93692Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1474_35780">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { AvalancheIcon }
