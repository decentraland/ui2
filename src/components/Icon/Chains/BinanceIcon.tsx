import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const BinanceIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1474_35783)">
          <mask
            id="mask0_1474_35783"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="40"
            height="40"
          >
            <path d="M0 0H40V40H0V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1474_35783)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 0C31.0471 0 40 8.95286 40 20C40 31.0471 31.0471 40 20 40C8.95286 40 0 31.0471 0 20C0 8.95286 8.95286 0 20 0Z"
              fill="#F0B90B"
            />
            <path
              d="M10.9914 20L11.0057 25.2886L15.5 27.9314V31.0286L8.37714 26.8514V18.4543L10.9914 20ZM10.9914 14.7114V17.7929L8.37428 16.2457V13.1629L10.9914 11.6157L13.6214 13.1629L10.9929 14.7114H10.9914ZM17.3771 13.1629L19.9943 11.6157L22.6229 13.1629L19.9943 14.7114L17.3771 13.1629Z"
              fill="white"
            />
            <path
              d="M12.8829 24.1929V21.0957L15.5 22.6443V25.7257L12.8829 24.1929ZM17.3771 29.0414L19.9943 30.59L22.6229 29.0414V32.1229L19.9943 33.6714L17.3771 32.1229V29.0414ZM26.3771 13.1629L28.9943 11.6157L31.6229 13.1629V16.2457L28.9943 17.7929V14.7114L26.3771 13.1629ZM28.9943 25.2886L29.0086 20L31.6243 18.4514V26.85L24.5014 31.0272V27.9314L28.9943 25.2886Z"
              fill="white"
            />
            <path
              d="M27.1171 24.1928L24.5 25.7257V22.6443L27.1171 21.0957V24.1928Z"
              fill="white"
            />
            <path
              d="M27.1171 15.8072L27.1314 18.9043L22.6243 21.5472V26.85L20.0086 28.3829L17.3914 26.85V21.5486L12.8843 18.9043V15.8072L15.5129 14.26L19.9914 16.9172L24.4986 14.26L27.1271 15.8072H27.1171ZM12.8829 10.5214L19.9929 6.32858L27.1171 10.5214L24.5 12.0686L19.9943 9.41144L15.5 12.0686L12.8829 10.5214Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1474_35783">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { BinanceIcon }
