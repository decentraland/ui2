import { memo } from 'react'

type IconProps = React.SVGAttributes<SVGElement>

const DclLogo = memo(function DclLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45 89.9999C69.8528 89.9999 89.9999 69.8528 89.9999 45C89.9999 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 89.9999 45 89.9999Z"
        fill="url(#dcl-nav0)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 80.9996C25.515 86.6471 34.875 89.9996 45 89.9996C55.125 89.9996 64.485 86.6471 72 80.9996H18Z"
        fill="#FF2D55"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 71.9996C11.565 75.397 14.603 78.435 18 80.9996H72C75.398 78.435 78.435 75.397 81 71.9996H9Z"
        fill="#FFA25A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.368 62.9997H3.758C5.153 66.2172 6.93 69.2322 9 71.9997H60.39V62.9997H60.368Z"
        fill="#FFC95B"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M31.883 29.25V63H60.008L31.883 29.25Z" fill="url(#dcl-nav1)" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3.758 63H31.883V29.25L3.758 63Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M60.368 47.25V72H81L60.368 47.25Z" fill="url(#dcl-nav2)" />
      <path fillRule="evenodd" clipRule="evenodd" d="M39.757 72H60.367V47.25L39.757 72Z" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.368 40.5C66.58 40.5 71.618 35.463 71.618 29.25C71.618 23.037 66.58 18 60.368 18C54.154 18 49.118 23.037 49.118 29.25C49.118 35.463 54.154 40.5 60.368 40.5Z"
        fill="#FFC95B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.882 22.5C34.989 22.5 37.507 19.981 37.507 16.875C37.507 13.768 34.989 11.25 31.882 11.25C28.776 11.25 26.257 13.768 26.257 16.875C26.257 19.981 28.776 22.5 31.882 22.5Z"
        fill="#FFC95B"
      />
      <defs>
        <linearGradient id="dcl-nav0" x1="45" y1="-18.64" x2="-18.64" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF2D55" />
          <stop offset="1" stopColor="#FFBC5B" />
        </linearGradient>
        <linearGradient id="dcl-nav1" x1="31.873" y1="29.25" x2="31.873" y2="63" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A524B3" />
          <stop offset="1" stopColor="#FF2D55" />
        </linearGradient>
        <linearGradient id="dcl-nav2" x1="60.36" y1="47.25" x2="60.36" y2="72" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A524B3" />
          <stop offset="1" stopColor="#FF2D55" />
        </linearGradient>
      </defs>
    </svg>
  )
})

const HamburgerIcon = memo(function HamburgerIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
})

const CloseIcon = memo(function CloseIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
})

const ChevronDownIcon = memo(function ChevronDownIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
})

const ChevronUpIcon = memo(function ChevronUpIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15 12.5L10 7.5L5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
})

const ExternalLinkIcon = memo(function ExternalLinkIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 2H14V6" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.66699 9.33333L14.0003 2" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
})

const LogoutIcon = memo(function LogoutIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 14.1667L17.4997 10.0001L13.333 5.83337"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17.5 10H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
})

const CopyIcon = memo(function CopyIcon(props: IconProps) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M8.5 3.5V2C8.5 1.17157 7.82843 0.5 7 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V7C0.5 7.82843 1.17157 8.5 2 8.5H3.5"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  )
})

const AccountIcon = memo(function AccountIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 16.25C5 14.1789 7.23858 12.5 10 12.5C12.7614 12.5 15 14.1789 15 16.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

const WearableIcon = memo(function WearableIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.8333 7.5L13.3333 3.33337H6.66667L4.16667 7.5L2.5 16.6667H17.5L15.8333 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66667 3.33337L7.5 7.50004L10 9.16671L12.5 7.50004L13.3333 3.33337"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

const SettingsIcon = memo(function SettingsIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1666 10C16.1666 9.58337 16.1249 9.16671 16.0416 8.75004L17.9166 7.27087L16.4166 4.72921L14.1666 5.52087C13.5416 4.97921 12.8124 4.56254 11.9999 4.31254L11.6666 1.66671H8.33325L7.99992 4.31254C7.18742 4.56254 6.45825 4.97921 5.83325 5.52087L3.58325 4.72921L2.08325 7.27087L3.95825 8.75004C3.87492 9.16671 3.83325 9.58337 3.83325 10C3.83325 10.4167 3.87492 10.8334 3.95825 11.25L2.08325 12.7292L3.58325 15.2709L5.83325 14.4792C6.45825 15.0209 7.18742 15.4375 7.99992 15.6875L8.33325 18.3334H11.6666L11.9999 15.6875C12.8124 15.4375 13.5416 15.0209 14.1666 14.4792L16.4166 15.2709L17.9166 12.7292L16.0416 11.25C16.1249 10.8334 16.1666 10.4167 16.1666 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

const ShoppingBagIcon = memo(function ShoppingBagIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 1.66663L2.5 4.99996V16.6666C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6666V4.99996L15 1.66663H5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2.5 5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M13.3334 8.33337C13.3334 9.21743 12.9822 10.0653 12.3571 10.6904C11.7319 11.3155 10.8841 11.6667 10.0001 11.6667C9.11603 11.6667 8.26818 11.3155 7.64306 10.6904C7.01794 10.0653 6.66675 9.21743 6.66675 8.33337"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

const BellIcon = memo(function BellIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 21.75C13.1 21.75 14 20.85 14 19.75H10C10 20.85 10.89 21.75 12 21.75ZM18 15.75V10.75C18 7.68 16.36 5.11 13.5 4.43V3.75C13.5 2.92 12.83 2.25 12 2.25C11.17 2.25 10.5 2.92 10.5 3.75V4.43C7.63 5.11 6 7.67 6 10.75V15.75L4 17.75V18.75H20V17.75L18 15.75Z"
        fill="#FCFCFC"
      />
    </svg>
  )
})

/** Inline credits icon sized for the navbar (20x20). */
const NavbarCreditsIcon = memo(function NavbarCreditsIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M25.5371 184.328C16.718 180.685 12.5221 170.582 16.1653 161.763L29.8558 128.622L16.1025 95.5076C12.4426 86.6954 16.6194 76.5848 25.4316 72.9248L58.5462 59.1716L72.2367 26.0312C75.8799 17.212 85.9827 13.0162 94.8018 16.6594L127.942 30.3498L161.057 16.5966C169.869 12.9367 179.98 17.1135 183.639 25.9257L197.393 59.0402L230.533 72.7308C239.352 76.374 243.548 86.4767 239.905 95.2958L226.215 128.436L239.968 161.551C243.628 170.363 239.451 180.474 230.639 184.134L197.524 197.887L183.834 231.027C180.19 239.846 170.088 244.042 161.269 240.399L128.128 226.709L95.0135 240.462C86.2013 244.122 76.0907 239.945 72.4307 231.133L58.6775 198.018L25.5371 184.328Z"
        fill="url(#credits-nav-g0)"
      />
      <path
        d="M39.4715 176.904C31.9127 173.782 28.3165 165.123 31.439 157.564L43.173 129.16L31.3852 100.777C28.2483 93.2245 31.8282 84.5587 39.3811 81.4219L67.7634 69.634L79.4974 41.2296C82.62 33.6708 91.279 30.0746 98.8377 33.1971L127.242 44.9312L155.624 33.1434C163.177 30.0065 171.843 33.5863 174.98 41.1392L186.768 69.5215L215.172 81.2555C222.731 84.3781 226.327 93.0371 223.205 100.596L211.471 129L223.258 157.383C226.395 164.935 222.815 173.601 215.262 176.738L186.88 188.526L175.146 216.93C172.024 224.489 163.365 228.085 155.806 224.963L127.401 213.229L99.0192 225.017C91.4664 228.153 82.8006 224.574 79.6637 217.021L67.8759 188.638L39.4715 176.904Z"
        fill="url(#credits-nav-g1)"
      />
      <path
        d="M54.4478 168.591C48.116 165.975 45.1036 158.722 47.7192 152.39L57.5484 128.596L47.6741 104.822C45.0465 98.4947 48.0452 91.2357 54.372 88.6081L78.147 78.7338L87.9762 54.9403C90.5919 48.6086 97.8452 45.5961 104.177 48.2118L127.97 58.041L151.745 48.1667C158.072 45.539 165.331 48.5378 167.959 54.8646L177.833 78.6395L201.627 88.4687C207.958 91.0844 210.971 98.3377 208.355 104.669L198.526 128.463L208.4 152.238C211.028 158.565 208.029 165.824 201.702 168.451L177.927 178.326L168.098 202.119C165.483 208.451 158.229 211.463 151.897 208.848L128.104 199.018L104.329 208.893C98.0022 211.52 90.7432 208.522 88.1155 202.195L78.2413 178.42L54.4478 168.591Z"
        fill="url(#credits-nav-g2)"
      />
      <defs>
        <linearGradient id="credits-nav-g0" x1="211.108" y1="218.484" x2="77.4791" y2="27.1647" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9BFFFF" />
          <stop offset="0.5" stopColor="#B8B9FF" />
          <stop offset="0.885" stopColor="#FFCBFF" />
          <stop offset="1" stopColor="#FDFCFF" />
        </linearGradient>
        <linearGradient id="credits-nav-g1" x1="225.88" y1="218.975" x2="71.9492" y2="33.3822" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5285BF" />
          <stop offset="1" stopColor="#AE66F0" />
        </linearGradient>
        <linearGradient id="credits-nav-g2" x1="195.385" y1="221.054" x2="91.1662" y2="16.6319" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9BFFFF" />
          <stop offset="0.5" stopColor="#B8B9FF" />
          <stop offset="1" stopColor="#FFCBFF" />
        </linearGradient>
      </defs>
    </svg>
  )
})

/** Chain icon components keyed by chainId. Uses the same SVGs as Icon/Chains/ but without MUI SvgIcon wrapper. */

const EthereumChainIcon = memo(function EthereumChainIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 40C25.3043 40 30.3914 37.8929 34.1421 34.1421C37.8929 30.3914 40 25.3043 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0C14.6957 0 9.60859 2.10714 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20C0 25.3043 2.10714 30.3914 5.85786 34.1421C9.60859 37.8929 14.6957 40 20 40Z" fill="#25292E" />
      <path d="M11.7 21.1L20 26.0143L28.2857 21.1L20 32.8L11.7 21.1Z" fill="white" fillOpacity="0.8" />
      <path d="M20 24.1857L11.7 19.2714L20 6.20001L28.3 19.2714L20 24.1857Z" fill="white" />
    </svg>
  )
})

const PolygonChainIcon = memo(function PolygonChainIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="40" height="40" rx="20" fill="white" />
      <path d="M20 0C9 0 0 9 0 20C0 31 8.85714 40 20 40C31.1429 40 40 31.1429 40 20C40 8.85714 31 0 20 0ZM31.8571 20.1429C31.8571 20.4286 31.7143 20.8571 31.4286 21L25.7143 24.2857C25.4286 24.4286 25 24.4286 24.7143 24.2857L22.5714 23V20L25.1429 21.5714L29.1429 19.2857V14.7143L25.1429 12.4286L21.4286 14.5714V26.2857C21.4286 26.5714 21.2857 27 21 27.1429L15.2857 30.4286C15 30.5714 14.5714 30.5714 14.2857 30.4286L8.57143 27.1429C8.28571 27 8.14286 26.7143 8.14286 26.2857V19.7143C8.14286 19.4286 8.28571 19 8.57143 18.8571L14.2857 15.5714C14.5714 15.4286 15 15.4286 15.2857 15.5714L17.4286 16.8571V20L14.8571 18.4286L10.8571 20.7143V25.2857L14.8571 27.5714L18.8571 25.2857V13.7143C18.8571 13.4286 19 13 19.2857 12.8571L25 9.57143C25.2857 9.42857 25.7143 9.42857 26 9.57143L31.4286 12.8571C31.7143 13 31.8571 13.2857 31.8571 13.7143V20.1429Z" fill="#8247E5" />
    </svg>
  )
})

const ArbitrumChainIcon = memo(function ArbitrumChainIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 1C30.4286 1 39 9.57143 39 20C39 30.4286 30.4286 39 20 39C9.57143 39 1 30.4286 1 20C1 9.57143 9.57143 1 20 1Z" fill="#2D374B" stroke="#96BEDC" strokeWidth="1.4" />
      <path d="M16.4286 10.7143C14.2857 10.7143 12 11.2857 11 13L2 27L3 29L5 32L19 10.7143H16.4286Z" fill="white" />
      <path d="M20.8571 10.7143L7 33.5L9 36L11.5 37L27.4286 10.7143H20.8571Z" fill="white" />
      <path d="M20.1428 26.5714L27.5 37.5L32.5 34L23.8571 20.1429L20.1428 26.5714ZM36.8571 28.8571L38 27.5L28.4286 12.5714L25.1428 18.1429L34.5 33L36.4286 29.8571C36.7143 29.5714 36.8571 29.2857 37 28.8571C36.8571 29 36.8571 28.8571 36.8571 28.8571Z" fill="#28A0F0" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20.0731 2.14834C10.1438 2.14834 2.14834 10.1438 2.14834 20.0731C2.14834 29.9915 10.133 37.8517 20.0731 37.8517C29.8616 37.8517 37.8517 29.9969 37.8517 20.0731C37.8517 10.133 29.9915 2.14834 20.0731 2.14834ZM0 20.0731C0 8.95736 8.95736 0 20.0731 0C31.1996 0 40 8.96822 40 20.0731C40 31.1942 31.0372 40 20.0731 40C8.96822 40 0 31.1996 0 20.0731Z" fill="#96BEDC" />
    </svg>
  )
})

const OptimismChainIcon = memo(function OptimismChainIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20Z" fill="#FF3131" />
      <path d="M13.1714 26.2143C17.0286 26.2143 20.1143 23.0714 20.1143 18.5286C20.1143 15.4 18.0143 13.1 14.4286 13.1C10.5429 13.1 7.5 16.2429 7.5 20.7857C7.5 23.9286 9.64286 26.2143 13.1714 26.2143ZM14.3571 15.7143C15.8714 15.7143 16.8429 16.8714 16.8429 18.7143C16.8429 21.4286 15.2571 23.6 13.2571 23.6C11.7429 23.6 10.7714 22.4286 10.7714 20.6C10.7714 17.9 12.3571 15.7143 14.3429 15.7143H14.3571ZM23.4714 13.3143L20.7857 26H24.0143L24.8 22.2857H26.9C30.3714 22.2857 32.6286 20.3143 32.6286 17.1429C32.6286 14.8429 30.9571 13.3143 28.2 13.3143H23.4857H23.4714ZM26.1857 15.8H27.5286C28.7143 15.8 29.3857 16.3429 29.3857 17.4286C29.3857 18.8571 28.4143 19.8571 26.9 19.8571H25.3143L26.1714 15.8H26.1857Z" fill="white" />
    </svg>
  )
})

const BscChainIcon = memo(function BscChainIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 0C31.0471 0 40 8.95286 40 20C40 31.0471 31.0471 40 20 40C8.95286 40 0 31.0471 0 20C0 8.95286 8.95286 0 20 0Z" fill="#F0B90B" />
      <path d="M10.9914 20L11.0057 25.2886L15.5 27.9314V31.0286L8.37714 26.8514V18.4543L10.9914 20ZM10.9914 14.7114V17.7929L8.37428 16.2457V13.1629L10.9914 11.6157L13.6214 13.1629L10.9929 14.7114H10.9914ZM17.3771 13.1629L19.9943 11.6157L22.6229 13.1629L19.9943 14.7114L17.3771 13.1629Z" fill="white" />
      <path d="M12.8829 24.1929V21.0957L15.5 22.6443V25.7257L12.8829 24.1929ZM17.3771 29.0414L19.9943 30.59L22.6229 29.0414V32.1229L19.9943 33.6714L17.3771 32.1229V29.0414ZM26.3771 13.1629L28.9943 11.6157L31.6229 13.1629V16.2457L28.9943 17.7929V14.7114L26.3771 13.1629ZM28.9943 25.2886L29.0086 20L31.6243 18.4514V26.85L24.5014 31.0272V27.9314L28.9943 25.2886Z" fill="white" />
      <path d="M27.1171 24.1928L24.5 25.7257V22.6443L27.1171 21.0957V24.1928Z" fill="white" />
      <path d="M27.1171 15.8072L27.1314 18.9043L22.6243 21.5472V26.85L20.0086 28.3829L17.3914 26.85V21.5486L12.8843 18.9043V15.8072L15.5129 14.26L19.9914 16.9172L24.4986 14.26L27.1271 15.8072H27.1171ZM12.8829 10.5214L19.9929 6.32858L27.1171 10.5214L24.5 12.0686L19.9943 9.41144L15.5 12.0686L12.8829 10.5214Z" fill="white" />
    </svg>
  )
})

const AvalancheChainIcon = memo(function AvalancheChainIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#E84142" />
      <path d="M27.0552 20.5197C27.7484 19.3226 28.8691 19.3226 29.5592 20.5197L33.8738 28.0946C34.567 29.291 34 30.2674 32.612 30.2674H23.9211C22.5513 30.2674 21.9842 29.291 22.6593 28.0946L27.0552 20.5197ZM18.709 5.93692C19.4014 4.74055 20.504 4.74055 21.1972 5.93692L22.1577 7.67194L24.4251 11.6562C24.6972 12.2182 24.8386 12.8346 24.8386 13.459C24.8386 14.0835 24.6972 14.6998 24.4251 15.2618L16.8186 28.4409C16.479 28.9688 16.0198 29.4093 15.4781 29.7267C14.9365 30.044 14.3277 30.2292 13.7011 30.2674H7.38566C6.00001 30.2674 5.43298 29.3068 6.12383 28.0946L18.709 5.93692Z" fill="white" />
    </svg>
  )
})

const FantomChainIcon = memo(function FantomChainIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#13B5EC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21.5 16.125L26 13.5V18.75L21.5 16.125ZM26 27.375L20 30.875L14 27.375V21.25L20 24.75L26 21.25V27.375ZM14 13.5L18.5 16.125L14 18.75V13.5ZM20.75 17.375L25.25 20L20.75 22.625V17.375ZM19.25 22.625L14.75 20L19.25 17.375V22.625ZM25.25 12.25L20 15.25L14.75 12.25L20 9.125L25.25 12.25ZM12.5 11.75V28.125L20 32.375L27.5 28.125V11.75L20 7.5L12.5 11.75Z" fill="white" />
    </svg>
  )
})

/** Ethereum family: mainnet, sepolia, goerli, kovan, rinkeby, ropsten */
const ETHEREUM_CHAIN_IDS = new Set([1, 5, 42, 4, 3, 11155111])
/** Polygon family: mainnet, amoy */
const POLYGON_CHAIN_IDS = new Set([137, 80002, 80001])

const CHAIN_ICON_MAP: Record<number, React.FC<IconProps>> = {
  56: BscChainIcon,
  10: OptimismChainIcon,
  42161: ArbitrumChainIcon,
  250: FantomChainIcon,
  43114: AvalancheChainIcon
}

function ChainIcon({ chainId, ...props }: { chainId: number } & IconProps) {
  const Specific = CHAIN_ICON_MAP[chainId]
  if (Specific) return <Specific {...props} />
  if (ETHEREUM_CHAIN_IDS.has(chainId)) return <EthereumChainIcon {...props} />
  if (POLYGON_CHAIN_IDS.has(chainId)) return <PolygonChainIcon {...props} />
  return <EthereumChainIcon {...props} />
}

const ManaEthInlineIcon = memo(function ManaEthInlineIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.864 6.952C9.864 4.968 8.264 3.32 6.28 3.32C4.296 3.32 2.696 4.968 2.696 6.952C2.696 8.92 4.296 10.52 6.28 10.52C8.264 10.52 9.864 8.92 9.864 6.952ZM9.032 6.952C9.032 8.456 7.688 9.688 6.28 9.688C4.728 9.688 3.528 8.488 3.528 6.952C3.528 5.432 4.728 4.152 6.28 4.152C7.704 4.152 9.032 5.432 9.032 6.952ZM12.248 10.424V3.544L6.28 0.12L0.312 3.544V10.424L6.28 13.848L12.248 10.424ZM11.192 9.832L6.296 12.632L1.368 9.832V4.184L6.28 1.336L11.192 4.184V9.832Z"
        fill="#FF2D55"
      />
    </svg>
  )
})

const ManaMaticInlineIcon = memo(function ManaMaticInlineIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0L24 12L12 24L0 12L12 0ZM12.0002 3.36001L20.6402 12L12.0002 20.64L3.36023 12L12.0002 3.36001ZM12.0009 16.32C14.3868 16.32 16.3209 14.3859 16.3209 12C16.3209 9.61415 14.3868 7.68002 12.0009 7.68002C9.61507 7.68002 7.68094 9.61415 7.68094 12C7.68094 14.3859 9.61507 16.32 12.0009 16.32Z"
        fill="#FCFCFC"
      />
    </svg>
  )
})

export {
  AccountIcon,
  BellIcon,
  ChainIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CloseIcon,
  CopyIcon,
  DclLogo,
  EthereumChainIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  LogoutIcon,
  ManaEthInlineIcon,
  ManaMaticInlineIcon,
  NavbarCreditsIcon,
  PolygonChainIcon,
  SettingsIcon,
  ShoppingBagIcon,
  WearableIcon
}
