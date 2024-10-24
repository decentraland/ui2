import { config } from "../../../config"
import { MenuItem } from "../MenuItem/MenuItem"
import { NavbarPages } from "../Navbar.types"
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
        mainUrl={config.get("MARKETPLACE_URL")}
      />
      <MenuItem
        {...menuItemProps}
        section={NavbarPages.CREATE}
        title={i18n.create}
        mainUrl={config.get("CREATE_URL")}
      />
      <MenuItem
        {...menuItemProps}
        section={NavbarPages.LEARN}
        title={i18n.learn}
        mainUrl={config.get("LEARN_URL")}
      />
      <MenuItem
        {...menuItemProps}
        section={NavbarPages.GOVERNANCE}
        title={i18n.governance}
        mainUrl={config.get("GOVERNANCE_URL")}
      />
      <MenuItem
        {...menuItemProps}
        section={NavbarPages.EXPLORE}
        title={i18n.explore}
        mainUrl={config.get("EVENTS_URL")}
      />
    </MainMenuContainer>
  )
}
