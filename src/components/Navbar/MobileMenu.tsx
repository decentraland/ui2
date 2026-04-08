import { memo, useCallback, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, ExternalLinkIcon } from './icons'
import { DROPDOWN_SECTIONS, getMenuConfig } from './Navbar.defaults'
import type { NavbarI18n } from './Navbar.types'
import {
  MobileMenuAccordionHeader,
  MobileMenuItem,
  MobileMenuLink,
  MobileMenuOverlay,
  MobileMenuPanel,
  MobileMenuSubItem,
  MobileMenuSubItems
} from './MobileMenu.styled'
import type { DropdownSection } from './Navbar.defaults'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  i18n: NavbarI18n
}

const MobileMenu = memo(function MobileMenu({ open, onClose, i18n }: MobileMenuProps) {
  const menuConfig = getMenuConfig()
  const [mobileAccordion, setMobileAccordion] = useState<DropdownSection | null>(null)

  const toggleMobileAccordion = useCallback((section: DropdownSection) => {
    setMobileAccordion(prev => (prev === section ? null : section))
  }, [])

  return (
    <>
      <MobileMenuOverlay open={open} onClick={onClose} />
      <MobileMenuPanel open={open} role="navigation" aria-label="Mobile navigation">
        <MobileMenuItem>
          <MobileMenuLink href={menuConfig.whatsOn.url}>{i18n[menuConfig.whatsOn.label]}</MobileMenuLink>
        </MobileMenuItem>

        {DROPDOWN_SECTIONS.map(section => {
          const config = menuConfig[section]
          const isExpanded = mobileAccordion === section

          return (
            <MobileMenuItem key={section}>
              <MobileMenuAccordionHeader onClick={() => toggleMobileAccordion(section)} aria-expanded={isExpanded}>
                {i18n[config.label]}
                {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MobileMenuAccordionHeader>

              <MobileMenuSubItems open={isExpanded}>
                {config.items?.map(item => (
                  <MobileMenuSubItem
                    key={item.label}
                    href={item.url}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {i18n[item.label]}
                    {item.isExternal && <ExternalLinkIcon />}
                  </MobileMenuSubItem>
                ))}
              </MobileMenuSubItems>
            </MobileMenuItem>
          )
        })}
      </MobileMenuPanel>
    </>
  )
})

MobileMenu.displayName = 'MobileMenu'

export { MobileMenu }
