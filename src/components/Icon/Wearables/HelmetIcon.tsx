import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const HelmetIcon = React.memo((props: SvgIconProps) => {
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
          d="M7.07408 7.16381C5.88834 8.42084 5.18182 10.2165 5.18182 12.3654C5.18182 14.4994 5.87449 15.818 6.99681 16.6335C8.15889 17.4779 9.8662 17.8462 12 17.8462C14.1338 17.8462 15.8411 17.4779 17.0032 16.6335C18.1255 15.818 18.8182 14.4994 18.8182 12.3654C18.8182 10.2165 18.1117 8.42084 16.9259 7.16381C15.7404 5.90697 14.043 5.15385 12 5.15385C9.95702 5.15385 8.25964 5.90697 7.07408 7.16381ZM6.30181 6.34885C7.71125 4.85467 9.69568 4 12 4C14.3043 4 16.2887 4.85467 17.6982 6.34885C19.1074 7.84283 19.9091 9.94139 19.9091 12.3654C19.9091 14.8043 19.0936 16.5145 17.6209 17.5846C16.188 18.6258 14.2135 19 12 19C9.7865 19 7.812 18.6258 6.37908 17.5846C4.90641 16.5145 4.09091 14.8043 4.09091 12.3654C4.09091 9.94139 4.89256 7.84283 6.30181 6.34885Z"
          fill="white"
        />
        <path
          d="M3 11.5C3 10.5441 3.73263 9.76923 4.63636 9.76923V15.5385C3.73263 15.5385 3 14.7636 3 13.8077V11.5Z"
          fill="white"
        />
        <path
          d="M21 11.5C21 10.5441 20.2674 9.76923 19.3636 9.76923V15.5385C20.2674 15.5385 21 14.7636 21 13.8077V11.5Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3636 4.28846H13.6364V8.61538H13.0909V4.86538H10.9091V8.61538H10.3636V4.28846Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 8.03846C15.3812 8.03846 17.1818 9.02834 17.1818 12.0769C17.1818 15.1255 15.3812 16.1154 12 16.1154C8.61877 16.1154 6.81818 15.1255 6.81818 12.0769C6.81818 9.02834 8.61877 8.03846 12 8.03846ZM12 10.9231C13.6569 10.9231 15 10.4065 15 9.76923C15 9.13198 13.6569 8.61538 12 8.61538C10.3431 8.61538 9 9.13198 9 9.76923C9 10.4065 10.3431 10.9231 12 10.9231Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  )
})

export { HelmetIcon }
