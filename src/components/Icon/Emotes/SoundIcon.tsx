import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const SoundIcon = React.memo((props: SvgIconProps) => {
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
          d="M16.5217 8.40576C16.5217 7.44526 17.3004 6.66663 18.2609 6.66663C19.2214 6.66663 20 7.44526 20 8.40576V15.5942C20 16.5547 19.2214 17.3333 18.2609 17.3333C17.3004 17.3333 16.5217 16.5547 16.5217 15.5942V8.40576Z"
          fill="white"
        />
        <path
          d="M10.2609 5.73913C10.2609 4.77864 11.0395 4 12 4C12.9605 4 13.7391 4.77864 13.7391 5.73913V18.2609C13.7391 19.2214 12.9605 20 12 20C11.0395 20 10.2609 19.2214 10.2609 18.2609V5.73913Z"
          fill="white"
        />
        <path
          d="M4 8.40578C4 7.44529 4.77863 6.66665 5.73913 6.66665C6.69963 6.66665 7.47826 7.44529 7.47826 8.40578V15.5942C7.47826 16.5547 6.69963 17.3333 5.73913 17.3333C4.77863 17.3333 4 16.5547 4 15.5942V8.40578Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  )
})

export { SoundIcon }
