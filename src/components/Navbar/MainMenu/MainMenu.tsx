import { MenuItem } from "../MenuItem/MenuItem"
import { NavbarPages, NavbarPagesUrls } from "../Navbar.types"
import { MainMenuProps } from "./MainMenu.types"
import { MainMenuContainer } from "./MainMenu.styled"

export const MainMenu = (props: MainMenuProps) => {
  const { i18n, isOpenOnMobile, ...menuItemProps } = props
  return (
    <MainMenuContainer isOpenOnMobile={isOpenOnMobile}>
      <MenuItem
        {...menuItemProps}
        section={NavbarPages.MARKETPLACE}
        title={i18n.marketplace}
        mainUrl={NavbarPagesUrls[NavbarPages.MARKETPLACE.toUpperCase()]}
      />
      <MenuItem
        {...menuItemProps}
        section={NavbarPages.CREATE}
        title={i18n.create}
        mainUrl={NavbarPagesUrls[NavbarPages.CREATE.toUpperCase()]}
      />
      <MenuItem
        {...menuItemProps}
        section={NavbarPages.EXPLORE}
        title={i18n.explore}
        mainUrl={NavbarPagesUrls[NavbarPages.EXPLORE.toUpperCase()]}
      />
      <MenuItem
        {...menuItemProps}
        section={NavbarPages.LEARN}
        title={i18n.learn}
        mainUrl={NavbarPagesUrls[NavbarPages.LEARN.toUpperCase()]}
      />
      <MenuItem
        {...menuItemProps}
        section={NavbarPages.GOVERNANCE}
        title={i18n.governance}
        mainUrl={NavbarPagesUrls[NavbarPages.GOVERNANCE.toUpperCase()]}
      />
    </MainMenuContainer>
  )
}
