import { NavbarPages } from "../Navbar.types"

export type MenuItemProps = {
  activePage: NavbarPages | string
  section: NavbarPages
  title: React.ReactNode
  onToggleShowSubMenu: (
    e: React.MouseEvent<HTMLElement>,
    show: boolean,
    section: NavbarPages
  ) => void
  mainUrl?: string
  isMobile?: boolean
  isExtraButton?: boolean
  textColor?: string
  backgroundColor?: string
}
