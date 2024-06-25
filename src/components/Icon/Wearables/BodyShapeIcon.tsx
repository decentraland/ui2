import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const BodyShapeIcon = React.memo((props: SvgIconProps) => {
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
          d="M13.1069 7.04572C13.6025 7.04572 14.0586 7.11294 14.4753 7.24742C15.7122 7.68469 15.9407 8.52864 16.1414 9.44243L17.0914 14.6197C17.0914 15.3 15.9 15.6 15.476 14.6197L14.4753 9.79839C14.4753 9.79839 14.4753 17.8123 14.4753 21.381C14.4753 22.4912 12.224 22.4624 12.224 21.3573L12.224 14.847C12.224 14.4668 11.5624 14.4668 11.5624 14.847C11.5624 17.663 11.5962 18.5413 11.5962 21.3573C11.5962 22.4479 9.33551 22.3902 9.33551 21.381C9.33551 18.5075 9.33551 9.79839 9.33551 9.79839L8.30573 14.6197C8.30573 15.4488 6.59998 15.4425 6.59998 14.6197L7.6998 9.44243C7.8642 8.49977 8.18612 7.66648 9.28776 7.24742C9.64816 7.11294 9.86732 7.0457 10.3854 7.0457L13.1069 7.04572Z"
          fill="white"
        />
        <path
          d="M11.8457 6.46284C13.1333 6.46284 14.1771 5.41902 14.1771 4.13141C14.1771 2.84381 13.1333 1.79999 11.8456 1.79999C10.5581 1.79999 9.51424 2.84381 9.51426 4.13141C9.51426 5.41902 10.5581 6.46284 11.8457 6.46284Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  )
})

export { BodyShapeIcon }
