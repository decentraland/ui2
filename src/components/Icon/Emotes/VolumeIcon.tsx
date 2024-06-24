import React from "react"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const VolumeIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1321_19516)">
          <path
            d="M10 7.21999L6.603 9.99999H3V14H6.603L10 16.78V7.21999ZM5.889 16H2C1.73478 16 1.48043 15.8946 1.29289 15.7071C1.10536 15.5196 1 15.2652 1 15V8.99999C1 8.73477 1.10536 8.48042 1.29289 8.29288C1.48043 8.10535 1.73478 7.99999 2 7.99999H5.889L11.183 3.66799C11.2563 3.60794 11.3451 3.56993 11.4391 3.55838C11.5331 3.54684 11.6284 3.56224 11.714 3.60279C11.7996 3.64334 11.872 3.70737 11.9226 3.78742C11.9732 3.86748 12.0001 3.96027 12 4.05499V19.945C12.0001 20.0397 11.9732 20.1325 11.9226 20.2126C11.872 20.2926 11.7996 20.3566 11.714 20.3972C11.6284 20.4377 11.5331 20.4531 11.4391 20.4416C11.3451 20.4301 11.2563 20.392 11.183 20.332L5.89 16H5.889ZM19.406 20.134L17.99 18.718C18.938 17.8745 19.6964 16.8397 20.2152 15.6817C20.734 14.5237 21.0015 13.2689 21 12C21.0012 10.6661 20.7054 9.34864 20.1339 8.14336C19.5624 6.93808 18.7296 5.87523 17.696 5.03199L19.116 3.61199C20.3345 4.64354 21.3132 5.92847 21.9841 7.37719C22.6549 8.8259 23.0016 10.4035 23 12C23 15.223 21.614 18.122 19.406 20.134ZM15.863 16.591L14.441 15.169C14.9265 14.7957 15.3196 14.3157 15.5899 13.7662C15.8602 13.2167 16.0006 12.6124 16 12C16 10.57 15.25 9.31499 14.12 8.60799L15.559 7.16899C16.3165 7.72618 16.9321 8.45384 17.3562 9.29311C17.7802 10.1324 18.0008 11.0597 18 12C18 13.842 17.17 15.49 15.863 16.591Z"
            fill="#ECEBED"
          />
        </g>
        <defs>
          <clipPath id="clip0_1321_19516">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  )
})

export { VolumeIcon }
