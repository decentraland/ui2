import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const TenderIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="24" cy="24" r="24" fill="url(#paint0_linear_2576_13)" />
        <path
          d="M14.6667 14.3333C14.6667 13.5958 14.0708 13 13.3333 13C12.5958 13 12 13.5958 12 14.3333V18.3333V29C12 30.4708 13.1958 31.6667 14.6667 31.6667H22.6667V29H14.6667V19.6667H22.6667V17H14.6667V14.3333ZM24 21C24 21.7375 24.5958 22.3333 25.3333 22.3333H34.6667C35.4042 22.3333 36 21.7375 36 21V15.6667C36 14.9292 35.4042 14.3333 34.6667 14.3333H30.5542C30.2 14.3333 29.8625 14.1917 29.6125 13.9417L29.0583 13.3917C28.8083 13.1417 28.4708 13 28.1167 13H25.3333C24.5958 13 24 13.5958 24 14.3333V21ZM24 33C24 33.7375 24.5958 34.3333 25.3333 34.3333H34.6667C35.4042 34.3333 36 33.7375 36 33V27.6667C36 26.9292 35.4042 26.3333 34.6667 26.3333H30.5542C30.2 26.3333 29.8625 26.1917 29.6125 25.9417L29.0583 25.3875C28.8083 25.1375 28.4708 24.9958 28.1167 24.9958H25.3333C24.5958 24.9958 24 25.5917 24 26.3292V33Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2576_13"
            x1="0"
            y1="0"
            x2="48"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D80027" />
            <stop offset="1" stopColor="#720015" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { TenderIcon }
