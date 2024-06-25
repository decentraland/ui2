import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const LowerBodyIcon = React.memo((props: SvgIconProps) => {
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
          d="M20.3923 16.5581L18.8251 8.28912V5.88885C18.8251 5.61999 18.5889 5.4 18.3001 5.4H5.70008C5.41133 5.4 5.17508 5.61999 5.17508 5.88885V8.28912L3.60794 16.5581C3.56069 16.8098 3.73132 17.0542 3.99907 17.1178L10.2991 18.5844C10.3411 18.5941 10.3831 18.599 10.4251 18.599C10.6535 18.599 10.8635 18.4573 10.9291 18.2446L11.9528 14.9082L12.8007 18.225C12.8322 18.3522 12.9189 18.4597 13.037 18.5281C13.1551 18.5966 13.2995 18.6161 13.4334 18.5868L19.9959 17.1202C20.2689 17.0591 20.4395 16.8123 20.3923 16.5581ZM17.7751 7.84426H6.22508V6.37771H17.7751V7.84426Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  )
})

export { LowerBodyIcon }
