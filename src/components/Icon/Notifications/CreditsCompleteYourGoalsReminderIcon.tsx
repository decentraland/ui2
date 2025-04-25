import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const CreditsCompleteYourGoalsReminderIcon = React.memo(
  (props: SvgIconProps) => {
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
            x="0.285156"
            y="0.0332031"
            width="40"
            height="40"
            fill="url(#paint0_radial_1414_14540)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1414_14540"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(20.2852 21.2369) rotate(90) scale(44.4259 24.9896)"
            >
              <stop stopColor="#A0ABFF" />
              <stop offset="1" stopColor="#A0ABFF" />
            </radialGradient>
          </defs>
        </svg>
      </SvgIcon>
    )
  }
)

export { CreditsCompleteYourGoalsReminderIcon }
