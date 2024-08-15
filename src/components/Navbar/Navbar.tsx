import React, { useCallback, useState } from "react"
import { Toolbar } from "@mui/material"
import { MainMenu } from "./MainMenu/MainMenu"
import {
  navbarMainTitlesI18N as i18nNavbarTitlesDefault,
  navbarSubmenu,
} from "./Navbar.defaults"
import { SubMenu } from "./SubMenu/SubMenu"
import { Logo } from "../Logo/Logo"
import { TabletAndBelow, useTabletAndBelowMediaQuery } from "../Media"
import { UserMenu } from "../UserMenu"
import { i18n as i18nUserMenuDefault } from "../UserMenu/UserMenu.i18n"
import { NavbarPages, NavbarProps } from "./Navbar.types"
import {
  AppBarDesktopWrapper,
  AppBarWrapper,
  DclAppBar,
  LogoLink,
  MenuIcon,
  MenuIconBar,
  MenuModal,
} from "./Navbar.styled"

const Navbar = React.memo((props: NavbarProps) => {
  const {
    activePage,
    isSignedIn,
    i18nNavbar = i18nNavbarTitlesDefault,
    i18nUserMenu = i18nUserMenuDefault,
    submenuItems = navbarSubmenu,
    onClickNavbarItem,
    ...userMenuProps
  } = props
  const [toggle, setToggle] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState<NavbarPages | boolean>()

  const [menuMobileOpen, setMenuMobileOpen] = useState(false)

  const isTabletAndBelow = useTabletAndBelowMediaQuery()

  const handleToggle = useCallback(
    (
      _e: React.MouseEvent<HTMLElement>,
      show: boolean,
      section: NavbarPages
    ) => {
      setToggle(show)
      setSelectedMenu(show && section)
    },
    [setToggle, setSelectedMenu]
  )

  const handleClickMenu = useCallback(
    (
      event: React.MouseEvent<HTMLElement, MouseEvent>,
      options: { eventTrackingName: string; url?: string; isExternal?: boolean }
    ) => {
      onClickNavbarItem && onClickNavbarItem(event, options)
    },
    [onClickNavbarItem]
  )

  const handleMobileToggle = useCallback(
    (_e: React.MouseEvent<HTMLElement>, show: boolean) => {
      if (!show) {
        setToggle(false)
      }
      setMenuMobileOpen(show)
    },
    [setToggle, setMenuMobileOpen]
  )

  const handleUserMenuOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    trackingId: string
  ) => {
    if (userMenuProps.onClickOpen) {
      userMenuProps.onClickOpen(event, trackingId)
    }
    handleMobileToggle(event, false)
  }

  return (
    <>
      <DclAppBar isSubmenuOpen={toggle} isMobileOpen={menuMobileOpen}>
        <Toolbar>
          <AppBarWrapper>
            <TabletAndBelow>
              <MenuIcon
                aria-label="menu"
                onClick={(e) => handleMobileToggle(e, !menuMobileOpen)}
              >
                <MenuIconBar isOpen={menuMobileOpen} />
                <MenuIconBar isOpen={menuMobileOpen} />
              </MenuIcon>
            </TabletAndBelow>
            <AppBarDesktopWrapper>
              <LogoLink
                isMobile={isTabletAndBelow}
                href="https://decentraland.org"
              >
                <Logo />
              </LogoLink>

              <MainMenu
                activePage={activePage}
                onToggleShowSubMenu={handleToggle}
                i18n={i18nNavbar}
                isMobile={false}
              />
            </AppBarDesktopWrapper>
            <UserMenu
              {...userMenuProps}
              onClickOpen={
                isTabletAndBelow
                  ? handleUserMenuOpen
                  : userMenuProps.onClickOpen
              }
              isSignedIn={isSignedIn}
              i18n={i18nUserMenu}
            />
          </AppBarWrapper>
        </Toolbar>
      </DclAppBar>
      <SubMenu
        selectedMenu={selectedMenu!}
        onToggleShowSubMenu={handleToggle}
        onClickMenuOption={handleClickMenu}
        submenus={submenuItems}
      />

      <MenuModal
        open={isTabletAndBelow && menuMobileOpen}
        onClose={(event: React.MouseEvent<HTMLElement>) =>
          handleMobileToggle(event, false)
        }
      >
        <>
          <MainMenu
            activePage={activePage}
            onToggleShowSubMenu={handleToggle}
            isOpenOnMobile={menuMobileOpen}
            i18n={i18nNavbar}
            isMobile
          />
          <SubMenu
            selectedMenu={selectedMenu!}
            onToggleShowSubMenu={handleToggle}
            onClickMenuOption={handleClickMenu}
            isMobile={isTabletAndBelow}
            submenus={submenuItems}
          />
        </>
      </MenuModal>
    </>
  )
})

export { Navbar }
