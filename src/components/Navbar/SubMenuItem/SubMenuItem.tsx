import React, { useCallback } from 'react'
import { SubMenuItemProps } from './SubMenuItem.types'
import { SubMenuItemContainer, SubMenuItemDescription, SubMenuItemExternal, SubMenuItemTitle, SubMenuLink } from './SubMenuItem.styled'

export const SubMenuItem = (props: SubMenuItemProps) => {
  const { title, description, href, isExternal, eventTrackingName, onClickMenuOption } = props

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event.preventDefault()
      onClickMenuOption && onClickMenuOption(event, { eventTrackingName, url: href, isExternal })
      setTimeout(
        () => {
          window.open(href, isExternal ? '_blank' : '_self', 'noopener')
        },
        onClickMenuOption ? 300 : 0
      )
    },
    [onClickMenuOption, eventTrackingName, href, isExternal]
  )

  return (
    <SubMenuItemContainer isExternal={isExternal} aria-label="submenu item">
      <SubMenuLink
        href={href}
        onClick={handleClick}
        isExternal={isExternal}
        aria-label={`${title} - ${isExternal ? 'opens in new tab' : 'opens in same tab'}`}
      >
        <SubMenuItemTitle aria-label={title}>{title}</SubMenuItemTitle>
        <SubMenuItemDescription aria-label={description}>{description}</SubMenuItemDescription>
        {isExternal && <SubMenuItemExternal aria-label="external link icon" />}
      </SubMenuLink>
    </SubMenuItemContainer>
  )
}
