import { useEffect, useRef, useState } from "react"
import { config } from "../../../config"
import { MenuItem } from "../MenuItem/MenuItem"
import { NavbarPages } from "../Navbar.types"
import { NavbarExtraButton, getExtraButton } from "../utils"
import { MainMenuProps } from "./MainMenu.types"
import { MainMenuContainer } from "./MainMenu.styled"

export const MainMenu = (props: MainMenuProps) => {
  const { i18n, isOpenOnMobile, ...menuItemProps } = props

  const isMounted = useRef(false)
  const [extraButton, setExtraButton] = useState<NavbarExtraButton | null>(null)
  useEffect(() => {
    isMounted.current = true
    if (!extraButton) {
      getExtraButton().then((button) => {
        if (!isMounted.current) return
        setExtraButton(button)
      })
    }
    return () => {
      isMounted.current = false
    }
  }, [extraButton, isMounted, setExtraButton])

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
      {extraButton && extraButton.visible ? (
        <MenuItem
          {...menuItemProps}
          section={NavbarPages.EXTRA}
          title={extraButton.text}
          mainUrl={extraButton.link}
          textColor={extraButton.textColor}
          backgroundColor={extraButton.backgroundColor}
          isExtraButton
        />
      ) : null}
    </MainMenuContainer>
  )
}
