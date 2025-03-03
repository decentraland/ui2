import {
  ChainSelectorProps,
  ChainSelectori18n,
} from "../ChainSelector/ChainSelector.types"
import { UserMenuI18N, UserMenuProps } from "../UserMenu/UserMenu.types"

enum NavbarPages {
  MARKETPLACE = "marketplace",
  CREATE = "create",
  EXPLORE = "explore",
  LEARN = "learn",
  GOVERNANCE = "governance",
  EXTRA = "extra",
}

type NavbarMenuI18nProps = Record<NavbarPages, string>

type NavbarSubMenuItemsProps = {
  column1Title?: string
  column1: {
    title: string
    description: string
    url: string
    eventTrackingName: string
    isExternal?: boolean
  }[]
  column2Title?: string
  column2: {
    title: string
    description: string
    url: string
    eventTrackingName: string
    isExternal?: boolean
  }[]
  column3Title?: string
  column3?: {
    title: string
    description: string
    url: string
    eventTrackingName: string
    isExternal?: boolean
  }[]
}

type NavbarSubmenuProps = {
  marketplace: NavbarSubMenuItemsProps
  create: NavbarSubMenuItemsProps
  explore: NavbarSubMenuItemsProps
  learn: NavbarSubMenuItemsProps
  governance: NavbarSubMenuItemsProps
}

type NavbarProps = Omit<UserMenuProps, "i18n"> &
  Partial<ChainSelectorProps> & {
    i18nNavbar?: NavbarMenuI18nProps
    submenuItems?: NavbarSubmenuProps
    i18nUserMenu?: UserMenuI18N
    i18nChainSelector?: ChainSelectori18n
    activePage: NavbarPages | string
    onClickNavbarItem?: (
      event: React.MouseEvent<HTMLElement, MouseEvent>,
      options: { eventTrackingName: string; url?: string; isExternal?: boolean }
    ) => void
  }

export { NavbarPages }
export type {
  NavbarMenuI18nProps,
  NavbarSubMenuItemsProps,
  NavbarSubmenuProps,
  NavbarProps,
}
