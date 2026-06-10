import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const MouthIcon = React.memo((props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 8.68494C12 8.68494 11.1 7.18494 9 7.18494C6.9 7.18494 3 11.3849 3 11.3849C3 11.3849 6.3 16.4849 12 16.7849V8.68494ZM12 11.2537C12 11.2537 10.5 10.7849 8.99998 10.7849C7.5 10.7849 5.4 11.9849 5.4 11.9849C5.4 11.9849 7.2 13.4849 12 13.7849V11.2537Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 8.68494C12 8.68494 12.9 7.18494 15 7.18494C17.1 7.18494 21 11.3849 21 11.3849C21 11.3849 17.7 16.4849 12 16.7849V8.68494ZM12 11.2537C12 11.2537 13.5 10.7849 15 10.7849C16.5 10.7849 18.6 11.9849 18.6 11.9849C18.6 11.9849 16.8 13.4849 12 13.7849V11.2537Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  )
})

export { MouthIcon }
