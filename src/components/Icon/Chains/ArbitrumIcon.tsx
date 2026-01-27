import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const ArbitrumIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1474_35757)">
          <path
            d="M20 1C30.4286 1 39 9.57143 39 20C39 30.4286 30.4286 39 20 39C9.57143 39 1 30.4286 1 20C1 9.57143 9.57143 1 20 1Z"
            fill="#2D374B"
            stroke="#96BEDC"
            strokeWidth="1.4"
          />
          <path d="M16.4286 10.7143C14.2857 10.7143 12 11.2857 11 13L2 27L3 29L5 32L19 10.7143H16.4286Z" fill="white" />
          <path d="M20.8571 10.7143L7 33.5L9 36L11.5 37L27.4286 10.7143H20.8571Z" fill="white" />
          <path
            d="M20.1428 26.5714L27.5 37.5L32.5 34L23.8571 20.1429L20.1428 26.5714ZM36.8571 28.8571L38 27.5L28.4286 12.5714L25.1428 18.1429L34.5 33L36.4286 29.8571C36.7143 29.5714 36.8571 29.2857 37 28.8571C36.8571 29 36.8571 28.8571 36.8571 28.8571Z"
            fill="#28A0F0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0731 2.14834C10.1438 2.14834 2.14834 10.1438 2.14834 20.0731C2.14834 29.9915 10.133 37.8517 20.0731 37.8517C29.8616 37.8517 37.8517 29.9969 37.8517 20.0731C37.8517 10.133 29.9915 2.14834 20.0731 2.14834ZM0 20.0731C0 8.95736 8.95736 0 20.0731 0C31.1996 0 40 8.96822 40 20.0731C40 31.1942 31.0372 40 20.0731 40C8.96822 40 0 31.1996 0 20.0731Z"
            fill="#96BEDC"
          />
        </g>
        <defs>
          <clipPath id="clip0_1474_35757">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { ArbitrumIcon }
