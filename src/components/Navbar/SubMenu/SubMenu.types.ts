import { NavbarPages, NavbarSubmenuProps } from '../Navbar.types'

type SubMenuProps = {
  selectedMenu: NavbarPages | boolean
  submenus: NavbarSubmenuProps
  onToggleShowSubMenu: (e: React.MouseEvent<HTMLElement>, show: boolean, section: NavbarPages) => void
  onClickMenuOption?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    options: { eventTrackingName: string; url?: string; isExternal?: boolean }
  ) => void
  isMobile?: boolean
}

export { SubMenuProps }
