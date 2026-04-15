import { memo } from 'react'

/** Windows logo — same SVG as landing-site/src/images/microsoft-logo.svg */
const WindowsIcon = memo(function WindowsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 5.74875L16.25 3.50375V19.2525H0V5.74875ZM18.2488 3.24875L40 0V18.9963H18.2488V3.24875ZM0 21.0037H16.25V36.7525L0 34.4988V21.0037ZM18.2488 21.0037H40V40L18.5037 36.9988L18.2488 21.0037Z"
        fill="currentColor"
      />
    </svg>
  )
})

export { WindowsIcon }
