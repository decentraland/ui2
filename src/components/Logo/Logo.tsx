import React from "react"
import { SvgIconProps } from "@mui/material/SvgIcon"
import { LogoContainer } from "./Logo.styled"

const Logo = React.memo((props: SvgIconProps) => {
  return (
    <LogoContainer {...props}>
      <svg
        width="36px"
        height="36px"
        viewBox="0 0 36 36"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="85.35535%"
            y1="14.644675%"
            x2="14.644675%"
            y2="85.35535%"
            id="linearGradient-1"
          >
            <stop stopColor="#FF2D55" offset="0%"></stop>
            <stop stopColor="#FFBC5B" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="49.9664%"
            y1="6.66666667e-05%"
            x2="49.9664%"
            y2="100.000067%"
            id="linearGradient-2"
          >
            <stop stopColor="#A524B3" offset="0%"></stop>
            <stop stopColor="#FF2D55" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="49.9664%"
            y1="6.66666667e-05%"
            x2="49.9664%"
            y2="100.000067%"
            id="linearGradient-3"
          >
            <stop stopColor="#A524B3" offset="0%"></stop>
            <stop stopColor="#FF2D55" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g
          id="ui-kit"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="logo" transform="translate(-824.000000, -254.000000)">
            <g id="color" transform="translate(128.000000, 128.000000)">
              <g id="36" transform="translate(696.000000, 126.000000)">
                <circle
                  id="world"
                  fill="url(#linearGradient-1)"
                  cx="18"
                  cy="18"
                  r="18"
                ></circle>
                <g id="big-pyramid" transform="translate(1.440000, 11.700000)">
                  <polygon
                    id="shadow"
                    fill="url(#linearGradient-2)"
                    points="11.313 0 11.313 13.5 22.563 13.5"
                  ></polygon>
                  <polygon
                    id="light"
                    fill="#FFFFFF"
                    points="0.063 13.5 11.313 13.5 11.313 0"
                  ></polygon>
                </g>
                <path
                  d="M7.2,32.4 C10.206,34.659 13.95,36 18,36 C22.05,36 25.794,34.659 28.8,32.4 L7.2,32.4 Z"
                  id="end"
                  fill="#FF2D55"
                ></path>
                <path
                  d="M3.6,28.8 C4.626,30.159 5.841,31.374 7.2,32.4 L28.8,32.4 C30.159,31.374 31.374,30.159 32.4,28.8 L3.6,28.8 Z"
                  id="horizon"
                  fill="#FC9965"
                ></path>
                <path
                  d="M24.147,25.2 L1.503,25.2 C2.061,26.487 2.772,27.693 3.6,28.8 L24.156,28.8 L24.156,25.2 L24.147,25.2 Z"
                  id="ground"
                  fill="#FFBC5B"
                ></path>
                <g
                  id="small-pyramid"
                  transform="translate(15.840000, 18.900000)"
                >
                  <polygon
                    id="shadow"
                    fill="url(#linearGradient-3)"
                    points="8.307 0 8.307 9.9 16.56 9.9"
                  ></polygon>
                  <polygon
                    id="light"
                    fill="#FFFFFF"
                    points="0.063 9.9 8.307 9.9 8.307 0"
                  ></polygon>
                </g>
                <circle
                  id="big-moon"
                  fill="#FFC95B"
                  cx="24.147"
                  cy="11.7"
                  r="4.5"
                ></circle>
                <circle
                  id="small-moon"
                  fill="#FFC95B"
                  cx="12.753"
                  cy="6.75"
                  r="2.25"
                ></circle>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </LogoContainer>
  )
})

export { Logo }
