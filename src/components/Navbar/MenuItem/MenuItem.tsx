import { useCallback } from "react"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import { MenuItemProps } from "./MenuItem.types"
import { MenuItemContainer, MenuItemTitle } from "./MenuItem.styled"

const MenuItem = (props: MenuItemProps) => {
  const {
    activePage,
    section,
    title,
    onToggleShowSubMenu,
    mainUrl,
    isMobile,
    textColor,
    backgroundColor,
    isExtraButton,
  } = props

  const mainRedirect = useCallback(() => {
    mainUrl && window.open(mainUrl, "_self")
  }, [mainUrl])

  return (
    <MenuItemContainer
      active={activePage === section}
      onClick={(e) => {
        isMobile && !isExtraButton && onToggleShowSubMenu(e, true, section)
      }}
      onMouseEnter={(e) => !isMobile && onToggleShowSubMenu(e, true, section)}
      onMouseLeave={(e) => !isMobile && onToggleShowSubMenu(e, false, section)}
      backgroundColor={backgroundColor}
      aria-label={`${title} menu item`}
    >
      <MenuItemTitle
        variant="subtitle1"
        onClick={mainRedirect}
        textColor={textColor}
        aria-label={`${title}`}
      >
        {title}
      </MenuItemTitle>
      {isMobile && <ArrowForwardRoundedIcon aria-label="forward arrow icon" />}
    </MenuItemContainer>
  )
}

export { MenuItem }
