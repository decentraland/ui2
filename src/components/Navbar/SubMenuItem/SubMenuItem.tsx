import React, { useCallback } from "react"
import { SubMenuItemProps } from "./SubMenuItem.types"
import {
  SubMenuItemContainer,
  SubMenuItemDescription,
  SubMenuItemExternal,
  SubMenuItemTitle,
  SubMenuLink,
} from "./SubMenuItem.styled"

export const SubMenuItem = (props: SubMenuItemProps) => {
  const {
    title,
    description,
    href,
    isExternal,
    eventTrackingName,
    onClickMenuOption,
  } = props

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event.preventDefault()
      onClickMenuOption &&
        onClickMenuOption(event, { eventTrackingName, url: href, isExternal })
      setTimeout(
        () => {
          window.open(href, isExternal ? "_blank" : "_self", "noopener")
        },
        onClickMenuOption ? 300 : 0
      )
    },
    [onClickMenuOption, eventTrackingName, href, isExternal]
  )

  return (
    <SubMenuItemContainer isExternal={isExternal}>
      <SubMenuLink href={href} onClick={handleClick}>
        <SubMenuItemTitle>{title}</SubMenuItemTitle>
        <SubMenuItemDescription>{description}</SubMenuItemDescription>
        {isExternal && <SubMenuItemExternal />}
      </SubMenuLink>
    </SubMenuItemContainer>
  )
}
