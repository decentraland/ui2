import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const RentPeriodEndingIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_32_9733)" />
        <path
          d="M15.3364 14.1184C15.7643 14.5925 16.0014 15.2025 16.002 15.8344V17.6996H16.3345C16.7018 17.6996 17 17.9909 17 18.3498C17 18.7087 16.7018 19 16.3345 19L7.68488 19C7.31749 19 7.01996 18.7087 7.01996 18.3498C7.01996 17.9909 7.31811 17.6996 7.68551 17.6996H8.01796L8.01796 15.8344C8.01859 15.2025 8.25561 14.5925 8.68351 14.1184L9.34906 13.358C9.79067 12.8674 9.79005 11.1326 9.34843 10.642L8.68289 9.88826C8.25001 9.40931 8.01423 8.79143 8.01796 8.15281L8.01796 6.30037H7.66555C7.29815 6.30037 7 6.0091 7 5.65019C7 5.29127 7.29815 5 7.66555 5L16.3344 5C16.7018 5 17 5.29127 17 5.65019C17 6.0091 16.7018 6.30037 16.3344 6.30037H16.002L16.002 8.15282C16.0057 8.79143 15.7693 9.40931 15.3364 9.88826L14.6709 10.642C14.2293 11.1326 14.2299 12.8674 14.6715 13.358L15.3364 14.1184ZM13.6529 14.2092C13.2294 13.7358 12.9974 12.6288 12.9974 12C12.9974 11.3712 13.23 10.2642 13.6536 9.79077L14.3384 9.03029C14.5543 8.79143 14.6728 8.4837 14.6715 8.16561V6.30038L9.34842 6.30038V8.16561C9.34717 8.4837 9.46569 8.79142 9.6815 9.03029L10.347 9.79077C10.7706 10.2642 11.0026 11.3712 11.0026 12C11.0026 12.6288 10.77 13.7358 10.3464 14.2092L9.68087 14.9764C9.46693 15.2135 9.34904 15.5181 9.34842 15.8344V17.6996L14.6715 17.6996V15.8344C14.6709 15.5181 14.5524 15.2135 14.3384 14.9764L13.6529 14.2092Z"
          fill="#FCFCFC"
        />
        <path
          d="M13.3404 17.0501H10.6789C10.5024 17.0501 10.3333 16.9812 10.2086 16.8593C10.0838 16.7374 10.014 16.5723 10.014 16.3999V15.9642C10.014 15.824 10.0607 15.6869 10.1468 15.5742L11.4773 13.8455C11.6027 13.6815 11.8004 13.5853 12.01 13.5853C12.2195 13.5853 12.4167 13.6815 12.542 13.8455L13.8725 15.5742C13.9586 15.6869 14.006 15.824 14.006 15.9642V16.3999C14.006 16.7588 13.7078 17.0501 13.3404 17.0501Z"
          fill="#FCFCFC"
        />
        <defs>
          <linearGradient
            id="paint0_linear_32_9733"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF7439" />
            <stop offset="1" stopColor="#BF5122" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { RentPeriodEndingIcon }
