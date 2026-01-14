import React, { useCallback, useState } from "react"
import { Toolbar } from "@mui/material"
import { MainMenu } from "./MainMenu/MainMenu"
import {
  i18nChainSelectorDefault,
  navbarMainTitlesI18N as i18nNavbarTitlesDefault,
  navbarSubmenu,
} from "./Navbar.defaults"
import { ChainSelector } from "../ChainSelector"
import { TabletAndBelow, useTabletAndBelowMediaQuery } from "../Media"
import { UserMenu } from "../UserMenu"
import { SubMenu } from "./SubMenu/SubMenu"
import { i18n as i18nUserMenuDefault } from "../UserMenu/UserMenu.i18n"
import { NavbarPages, NavbarProps } from "./Navbar.types"
import {
  AppBarDesktopWrapper,
  AppBarRightWrapper,
  AppBarTabletAndBelowWrapper,
  AppBarWrapper,
  DclAppBar,
  Logo,
  LogoLink,
  MenuIcon,
  MenuIconBar,
  MenuModal,
} from "./Navbar.styled"

const Navbar = React.memo((props: NavbarProps) => {
  const {
    activePage,
    chains,
    chainBeingConfirmed,
    onSelectChain,
    selectedChain,
    isSignedIn,
    i18nNavbar = i18nNavbarTitlesDefault,
    i18nUserMenu = i18nUserMenuDefault,
    i18nChainSelector = i18nChainSelectorDefault,
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

  const handleUserMenuOpen = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>, trackingId: string) => {
      if (userMenuProps.onClickOpen) {
        userMenuProps.onClickOpen(event, trackingId)
      }
      handleMobileToggle(event, false)
    },
    [userMenuProps.onClickOpen, handleMobileToggle]
  )

  return (
    <>
      <DclAppBar
        isSubmenuOpen={toggle}
        isMobileOpen={menuMobileOpen}
        aria-label="navigation bar"
      >
        <Toolbar>
          <AppBarWrapper>
            <TabletAndBelow>
              <AppBarTabletAndBelowWrapper>
                <LogoLink
                  isMobile
                  href="https://decentraland.org"
                  aria-label="Decentraland home"
                >
                  <Logo />
                </LogoLink>
                <MenuIcon
                  aria-label="toggle menu"
                  onClick={(e) => handleMobileToggle(e, !menuMobileOpen)}
                >
                  <MenuIconBar isOpen={menuMobileOpen} aria-label="menu bar" />
                  <MenuIconBar isOpen={menuMobileOpen} aria-label="menu bar" />
                </MenuIcon>
              </AppBarTabletAndBelowWrapper>
            </TabletAndBelow>
            <AppBarDesktopWrapper>
              <LogoLink
                href="https://decentraland.org"
                aria-label="Decentraland home"
              >
                <Logo />
              </LogoLink>

              <MainMenu
                activePage={activePage}
                onToggleShowSubMenu={handleToggle}
                i18n={i18nNavbar}
                isMobile={false}
                aria-label="main navigation menu"
              />
            </AppBarDesktopWrapper>
            <AppBarRightWrapper>
              {isSignedIn &&
              onSelectChain &&
              chains?.length &&
              selectedChain ? (
                <ChainSelector
                  chains={chains}
                  selectedChain={selectedChain}
                  chainBeingConfirmed={chainBeingConfirmed}
                  i18n={i18nChainSelector}
                  onSelectChain={onSelectChain}
                  aria-label="blockchain network selector"
                />
              ) : null}
              <UserMenu
                {...userMenuProps}
                onClickOpen={
                  isTabletAndBelow
                    ? handleUserMenuOpen
                    : userMenuProps.onClickOpen
                }
                isSignedIn={isSignedIn}
                i18n={i18nUserMenu}
                aria-label="user menu"
              />
            </AppBarRightWrapper>
          </AppBarWrapper>
        </Toolbar>
      </DclAppBar>
      <SubMenu
        selectedMenu={selectedMenu!}
        onToggleShowSubMenu={handleToggle}
        onClickMenuOption={handleClickMenu}
        submenus={submenuItems}
        aria-label="submenu navigation"
      />

      <MenuModal
        open={isTabletAndBelow && menuMobileOpen}
        onClose={(event: React.MouseEvent<HTMLElement>) =>
          handleMobileToggle(event, false)
        }
        aria-label="mobile menu"
      >
        <>
          <MainMenu
            activePage={activePage}
            onToggleShowSubMenu={handleToggle}
            isOpenOnMobile={menuMobileOpen}
            i18n={i18nNavbar}
            isMobile
            aria-label="main mobile navigation menu"
          />
          <SubMenu
            selectedMenu={selectedMenu!}
            onToggleShowSubMenu={handleToggle}
            onClickMenuOption={handleClickMenu}
            isMobile={isTabletAndBelow}
            submenus={submenuItems}
            aria-label="mobile submenu navigation"
          />
        </>
      </MenuModal>
    </>
  )
})

export { Navbar }
