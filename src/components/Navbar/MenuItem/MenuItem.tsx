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
  } = props

  const mainRedirect = useCallback(() => {
    mainUrl && window.open(mainUrl, "_self")
  }, [mainUrl])

  return (
    <MenuItemContainer
      active={activePage === section}
      onClick={(e) => {
        isMobile && onToggleShowSubMenu(e, true, section)
      }}
      onMouseEnter={(e) => !isMobile && onToggleShowSubMenu(e, true, section)}
      onMouseLeave={(e) => !isMobile && onToggleShowSubMenu(e, false, section)}
      backgroundColor={backgroundColor}
    >
      <MenuItemTitle
        variant="subtitle1"
        onClick={mainRedirect}
        textColor={textColor}
      >
        {title}
      </MenuItemTitle>
      {isMobile && <ArrowForwardRoundedIcon />}
    </MenuItemContainer>
  )
}

export { MenuItem }
