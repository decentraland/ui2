import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

export default function PlacesIcon(props: SvgIconProps) {
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
          d="M20 9.82515C20 14.1645 15.1574 19.4488 13.0076 21.581C12.4438 22.1401 11.5562 22.1401 10.9924 21.581C8.84257 19.4488 4 14.1645 4 9.82515C4 5.50344 7.58172 2 12 2C16.4183 2 20 5.50344 20 9.82515ZM15.2452 10.037C15.2452 11.6819 13.8819 13.0153 12.2003 13.0153C10.5186 13.0153 9.1554 11.6819 9.1554 10.037C9.1554 8.3921 10.5186 7.05865 12.2003 7.05865C13.8819 7.05865 15.2452 8.3921 15.2452 10.037Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  )
}
