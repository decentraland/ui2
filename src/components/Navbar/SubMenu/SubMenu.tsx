import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import { NavbarPages } from '../Navbar.types'
import { SubMenuColumn } from '../SubMenuColumn/SubMenuColumn'
import { SubMenuItem } from '../SubMenuItem/SubMenuItem'
import { SubMenuProps } from './SubMenu.types'
import { BackButton, MenuItemContainer, SubMenuContainer, SubMenuWrapper } from './SubMenu.styled'

export const SubMenu = (props: SubMenuProps) => {
  const { selectedMenu, onToggleShowSubMenu, onClickMenuOption, isMobile, submenus } = props

  return (
    <SubMenuContainer>
      {Object.keys(submenus).map(key => {
        const section = key as NavbarPages
        const submenu = submenus[section]
        return (
          <MenuItemContainer
            key={key}
            onMouseEnter={e => !isMobile && onToggleShowSubMenu(e, true, section)}
            onMouseLeave={e => !isMobile && onToggleShowSubMenu(e, false, section)}
            active={selectedMenu === section}
            section={section}
            isMobile={isMobile}
            aria-label={`${section.toLowerCase()} submenu section`}
          >
            <SubMenuWrapper>
              {isMobile && (
                <BackButton
                  variant="text"
                  color="inherit"
                  onClick={e => onToggleShowSubMenu(e, false, section)}
                  startIcon={<ArrowBackIosNewRoundedIcon />}
                  aria-label="back to main menu"
                >
                  Back
                </BackButton>
              )}
              <SubMenuColumn title={submenu.column1Title}>
                {submenu.column1.map((item, index) => (
                  <SubMenuItem
                    key={index}
                    isExternal={item.isExternal}
                    title={item.title}
                    description={item.description}
                    href={item.url}
                    eventTrackingName={item.eventTrackingName}
                    onClickMenuOption={onClickMenuOption}
                  />
                ))}
              </SubMenuColumn>
              <SubMenuColumn title={submenu.column2Title}>
                {submenu.column2.map((item, index) => (
                  <SubMenuItem
                    key={index}
                    isExternal={item.isExternal}
                    title={item.title}
                    description={item.description}
                    href={item.url}
                    eventTrackingName={item.eventTrackingName}
                    onClickMenuOption={onClickMenuOption}
                  />
                ))}
              </SubMenuColumn>
              {!!submenu.column3 && (
                <SubMenuColumn title={submenu.column3Title}>
                  {submenu.column3.map((item, index) => (
                    <SubMenuItem
                      key={index}
                      isExternal={item.isExternal}
                      title={item.title}
                      description={item.description}
                      href={item.url}
                      eventTrackingName={item.eventTrackingName}
                      onClickMenuOption={onClickMenuOption}
                    />
                  ))}
                </SubMenuColumn>
              )}
            </SubMenuWrapper>
          </MenuItemContainer>
        )
      })}
    </SubMenuContainer>
  )
}
