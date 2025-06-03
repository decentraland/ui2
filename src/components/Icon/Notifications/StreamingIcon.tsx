import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const StreamingIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.914062"
          y="0.635254"
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_radial_21008_111770)"
        />
        <rect
          x="0.914062"
          y="0.635254"
          width="40"
          height="40"
          rx="20"
          fill="black"
          fillOpacity="0.4"
        />
        <g clipPath="url(#clip0_21008_111770)">
          <path
            d="M20.9154 22.3888C21.9171 22.3888 22.7292 21.6047 22.7292 20.6375C22.7292 19.6703 21.9171 18.8862 20.9154 18.8862C19.9136 18.8862 19.1016 19.6703 19.1016 20.6375C19.1016 21.6047 19.9136 22.3888 20.9154 22.3888Z"
            fill="#FCFCFC"
          />
          <path
            d="M16.8493 17.1484C15.965 18.1095 15.4766 19.3503 15.4766 20.6358C15.4766 21.9213 15.965 23.1622 16.8493 24.1232"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.9805 24.1232C25.8648 23.1622 26.3532 21.9213 26.3532 20.6358C26.3532 19.3503 25.8648 18.1095 24.9805 17.1484"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.9624 14.3618C12.3149 16.0636 11.3984 18.3061 11.3984 20.6356C11.3984 22.965 12.3149 25.2075 13.9624 26.9093"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.8633 26.9088C29.5108 25.207 30.4272 22.9645 30.4272 20.6351C30.4272 18.3056 29.5108 16.0631 27.8633 14.3613"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.0508 29.3843C33.276 26.9761 34.5058 23.8616 34.5058 20.6343C34.5058 17.407 33.276 14.2925 31.0508 11.8843"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.7753 11.8843C8.55009 14.2925 7.32031 17.407 7.32031 20.6343C7.32031 23.8616 8.55009 26.9761 10.7753 29.3843"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_21008_111770"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(20.9141 20.6353) rotate(90) scale(20)"
          >
            <stop stopColor="#DFC5FA" />
            <stop offset="0.864583" stopColor="#A24BF3" />
          </radialGradient>
          <clipPath id="clip0_21008_111770">
            <rect
              width="29"
              height="28"
              fill="white"
              transform="translate(6.41406 6.63525)"
            />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { StreamingIcon }
