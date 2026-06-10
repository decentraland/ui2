import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const OptimismIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1474_35771)">
          <path
            d="M40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20Z"
            fill="#FF3131"
          />
          <path
            d="M40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20Z"
            fill="url(#paint0_linear_1474_35771)"
            fillOpacity="0.3"
          />
          <path
            d="M13.1714 26.2143C17.0286 26.2143 20.1143 23.0714 20.1143 18.5286C20.1143 15.4 18.0143 13.1 14.4286 13.1C10.5429 13.1 7.5 16.2429 7.5 20.7857C7.5 23.9286 9.64286 26.2143 13.1714 26.2143ZM14.3571 15.7143C15.8714 15.7143 16.8429 16.8714 16.8429 18.7143C16.8429 21.4286 15.2571 23.6 13.2571 23.6C11.7429 23.6 10.7714 22.4286 10.7714 20.6C10.7714 17.9 12.3571 15.7143 14.3429 15.7143H14.3571ZM23.4714 13.3143L20.7857 26H24.0143L24.8 22.2857H26.9C30.3714 22.2857 32.6286 20.3143 32.6286 17.1429C32.6286 14.8429 30.9571 13.3143 28.2 13.3143H23.4857H23.4714ZM26.1857 15.8H27.5286C28.7143 15.8 29.3857 16.3429 29.3857 17.4286C29.3857 18.8571 28.4143 19.8571 26.9 19.8571H25.3143L26.1714 15.8H26.1857Z"
            fill="white"
          />
        </g>
        <defs>
          <linearGradient id="paint0_linear_1474_35771" x1="0" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_1474_35771">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { OptimismIcon }
