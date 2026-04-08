import { memo } from 'react'
import { ChevronDownIcon, ExternalLinkIcon } from './icons'
import { DROPDOWN_SECTIONS, getMenuConfig } from './Navbar.defaults'
import type { NavbarI18n } from './Navbar.types'
import {
  DesktopDropdown,
  DesktopDropdownItem,
  DesktopDropdownWrapper,
  DesktopTabLink,
  DesktopTabList,
  DesktopTabWithDropdown
} from './NavLinks.styled'
import type { DropdownSection } from './Navbar.defaults'

interface NavLinksProps {
  desktopDropdown: DropdownSection | null
  onOpenDropdown: (section: DropdownSection) => void
  onScheduleCloseDropdown: () => void
  activePage?: 'whatsOn' | 'shop' | 'create' | 'learn'
  i18n: NavbarI18n
}

const NavLinks = memo(function NavLinks({ desktopDropdown, onOpenDropdown, onScheduleCloseDropdown, activePage, i18n }: NavLinksProps) {
  const menuConfig = getMenuConfig()
  return (
    <DesktopTabList>
      <DesktopTabLink href={menuConfig.whatsOn.url} className={activePage === 'whatsOn' ? 'active' : undefined}>
        {i18n[menuConfig.whatsOn.label]}
      </DesktopTabLink>

      {DROPDOWN_SECTIONS.map(section => (
        <DesktopDropdownWrapper key={section} onMouseEnter={() => onOpenDropdown(section)} onMouseLeave={onScheduleCloseDropdown}>
          <DesktopTabWithDropdown
            className={activePage === section ? 'active' : undefined}
            aria-expanded={desktopDropdown === section}
            aria-haspopup="true"
            onClick={() => {
              const firstItem = menuConfig[section].items?.[0]
              if (firstItem) window.open(firstItem.url, '_self')
            }}
          >
            {i18n[menuConfig[section].label]}
            <ChevronDownIcon
              style={{
                transform: desktopDropdown === section ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s ease'
              }}
            />
          </DesktopTabWithDropdown>

          {desktopDropdown === section && (
            <DesktopDropdown>
              {menuConfig[section].items?.map(item => (
                <DesktopDropdownItem
                  key={item.label}
                  href={item.url}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                >
                  {i18n[item.label]}
                  {item.isExternal && <ExternalLinkIcon />}
                </DesktopDropdownItem>
              ))}
            </DesktopDropdown>
          )}
        </DesktopDropdownWrapper>
      ))}
    </DesktopTabList>
  )
})

NavLinks.displayName = 'NavLinks'

export { NavLinks }
