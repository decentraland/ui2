import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const BaseFemaleIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4306 6C10.5359 6 8.99988 7.536 8.99988 9.43075C8.99988 11.3255 10.5359 12.8615 12.4306 12.8615C14.3254 12.8615 15.8614 11.3255 15.8614 9.43075C15.8614 7.536 14.3254 6 12.4306 6ZM6.99988 9.43075C6.99988 6.43142 9.43132 4 12.4306 4C15.43 4 17.8614 6.43142 17.8614 9.43075C17.8614 12.4301 15.43 14.8615 12.4306 14.8615C9.43131 14.8615 6.99988 12.4301 6.99988 9.43075Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4306 13.153C12.9829 13.153 13.4306 13.6008 13.4306 14.153V19.4C13.4306 19.9523 12.9829 20.4 12.4306 20.4C11.8783 20.4 11.4306 19.9523 11.4306 19.4V14.153C11.4306 13.6008 11.8783 13.153 12.4306 13.153Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.3991 16.9205C8.3991 16.3682 8.84681 15.9205 9.3991 15.9205H15.4623C16.0145 15.9205 16.4623 16.3682 16.4623 16.9205C16.4623 17.4728 16.0145 17.9205 15.4623 17.9205H9.3991C8.84681 17.9205 8.3991 17.4728 8.3991 16.9205Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  )
})

export { BaseFemaleIcon }
