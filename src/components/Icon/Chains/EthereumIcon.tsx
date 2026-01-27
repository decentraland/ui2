import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const EthereumIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1474_35775)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 40C25.3043 40 30.3914 37.8929 34.1421 34.1421C37.8929 30.3914 40 25.3043 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0C14.6957 0 9.60859 2.10714 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20C0 25.3043 2.10714 30.3914 5.85786 34.1421C9.60859 37.8929 14.6957 40 20 40Z"
            fill="#25292E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 40C25.3043 40 30.3914 37.8929 34.1421 34.1421C37.8929 30.3914 40 25.3043 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0C14.6957 0 9.60859 2.10714 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20C0 25.3043 2.10714 30.3914 5.85786 34.1421C9.60859 37.8929 14.6957 40 20 40Z"
            fill="url(#paint0_linear_1474_35775)"
            fillOpacity="0.3"
          />
          <path d="M11.7 21.1L20 26.0143L28.2857 21.1L20 32.8L11.7 21.1Z" fill="url(#paint1_linear_1474_35775)" />
          <path d="M20 24.1857L11.7 19.2714L20 6.20001L28.3 19.2714L20 24.1857Z" fill="white" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_1474_35775" x1="0" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_1474_35775" x1="20" y1="21.1" x2="20" y2="32.8" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.9" />
          </linearGradient>
          <clipPath id="clip0_1474_35775">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { EthereumIcon }
