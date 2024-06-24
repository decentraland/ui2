import useMediaQuery from "@mui/material/useMediaQuery"

/**
 * Media hook to determine if we're going to be rendering in a desktop environment with big screens.
 */
const useBigDesktopMediaQuery = (): boolean =>
  useMediaQuery("(min-width: 1920px)")

/**
 * Media hook to determine if we're going to be rendering in a desktop environment.
 */
const useDesktopMediaQuery = (): boolean => useMediaQuery("(min-width: 992px)")

/**
 * Media hook to determine if we're going to be rendering in a tablet environment.
 */
const useTabletMediaQuery = (): boolean =>
  useMediaQuery("(min-width: 768px) and (max-width: 991px)")

/**
 * Media hook to determine if we're going to be rendering in a tablet or below environment.
 */
const useTabletAndBelowMediaQuery = (): boolean =>
  useMediaQuery("(max-width: 991px)")

/**
 * Media hook to determine if we're going to be rendering in a mobile environment.
 */
const useMobileMediaQuery = (): boolean => useMediaQuery("(max-width: 767px)")

/**
 * Media hook to determine if we're going to be rendering in an environment that's not mobile.
 */
const useNotMobileMediaQuery = (): boolean =>
  useMediaQuery("(min-width: 768px)")

/**
 * Renders a component if the screen suits the desktop size.
 */
const Desktop = ({
  children,
}: {
  children: JSX.Element
}): JSX.Element | null => {
  const isDesktop = useDesktopMediaQuery()
  return isDesktop ? children : null
}

/**
 * Renders a component if the screen suits the tablet size.
 */
const Tablet = ({
  children,
}: {
  children: JSX.Element
}): JSX.Element | null => {
  const isTablet = useTabletMediaQuery()
  return isTablet ? children : null
}

/**
 * Renders a component if the screen suits the tablet or mobile size.
 */
const TabletAndBelow = ({
  children,
}: {
  children: JSX.Element
}): JSX.Element | null => {
  const isTablet = useTabletAndBelowMediaQuery()
  return isTablet ? children : null
}

/**
 * Renders a component if the screen suits the mobile size.
 */
const Mobile = ({
  children,
}: {
  children: JSX.Element
}): JSX.Element | null => {
  const isMobile = useMobileMediaQuery()
  return isMobile ? children : null
}

/**
 * Renders a component if the screen doesn't have the size of a mobile device.
 */
const NotMobile = ({
  children,
}: {
  children: JSX.Element
}): JSX.Element | null => {
  const isNotMobile = useNotMobileMediaQuery()
  return isNotMobile ? children : null
}

export {
  Desktop,
  Tablet,
  TabletAndBelow,
  Mobile,
  NotMobile,
  useBigDesktopMediaQuery,
  useDesktopMediaQuery,
  useTabletMediaQuery,
  useTabletAndBelowMediaQuery,
  useMobileMediaQuery,
  useNotMobileMediaQuery,
}
