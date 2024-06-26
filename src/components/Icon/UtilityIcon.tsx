import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const UtilityIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_668)">
          <path
            d="M21.7069 18.3504L16.397 13.3034H15.4051L12.8604 15.7222V16.6649L18.1703 21.7119C18.561 22.0833 19.1922 22.0833 19.583 21.7119L21.7069 19.6931C22.0977 19.3313 22.0977 18.7218 21.7069 18.3504Z"
            fill="white"
          />
          <path
            d="M17.3688 10.7513L18.7815 9.40864L20.9054 11.4274C22.0776 10.3133 22.0776 8.50399 20.9054 7.38983L17.3588 4.01881L15.9461 5.36151V2.67611L15.2448 2L11.6982 5.37103L12.4095 6.04714H15.2448L13.8322 7.38983L14.8942 8.39924L11.9987 11.1513L7.86099 7.21843V5.86621L4.83532 2.99036L2 5.68528L5.03569 8.57065H6.44834L10.5861 12.5035L9.7345 13.3129H7.61052L2.30056 18.36C1.90983 18.7313 1.90983 19.3313 2.30056 19.7027L4.42455 21.7215C4.81528 22.0928 5.44646 22.0928 5.83719 21.7215L11.1472 16.6744V14.6556L16.3068 9.75146L17.3688 10.7513Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_668">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { UtilityIcon }
