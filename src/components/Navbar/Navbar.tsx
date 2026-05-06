import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Network } from '@dcl/schemas/dist/dapps/network'
import { formatBalance } from './formatBalance'
import { CloseIcon, DclLogo, HamburgerIcon, ManaEthInlineIcon, ManaMaticInlineIcon } from './icons'
import { MobileMenu } from './MobileMenu'
import { DEFAULT_I18N } from './Navbar.defaults'
import { NavLinks } from './NavLinks'
import { UserCardPanel } from './UserCardPanel'
import { CreditsIcon } from '../Icon/CreditsIcon'
import type { NavbarI18n, NavbarProps } from './Navbar.types'
import {
  CreditsBalanceButton,
  CreditsTooltip,
  NavbarBalancesStack,
  NavbarManaBalanceButton,
  NavbarManaBalancesGroup
} from './Credits.styled'
import { HamburgerButton, LogoLink, NavbarLeft, NavbarRight, NavbarRightGroup, NavbarRoot, SignInButton } from './Navbar.styled'
import type { DropdownSection } from './Navbar.defaults'

/** Calculate days remaining until a given timestamp. */
function daysUntil(timestamp: number): number {
  const diff = timestamp - Date.now()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

const Navbar = memo(function Navbar({
  isSignedIn,
  isSigningIn,
  isLoadingProfile = false,
  address,
  avatar,
  i18n: i18nPartial,
  notificationSlot,
  selectedChain,
  chains,
  onSelectChain,
  manaBalances,
  onClickBalance,
  showManaBalancesInNavbar = false,
  creditsBalance,
  onClickCredits,
  activePage,
  onToggleUserCard,
  onClickSignIn,
  onClickSignOut
}: NavbarProps) {
  const i18n: NavbarI18n = { ...DEFAULT_I18N, ...i18nPartial }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [desktopDropdown, setDesktopDropdown] = useState<DropdownSection | null>(null)
  const [userCardOpen, setUserCardOpen] = useState(false)

  const navRef = useRef<HTMLElement>(null)
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => {
      if (!prev) {
        setDesktopDropdown(null)
        setUserCardOpen(false)
      }
      return !prev
    })
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  const openDesktopDropdown = useCallback((section: DropdownSection) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current)
      dropdownTimerRef.current = null
    }
    setDesktopDropdown(section)
    setUserCardOpen(false)
  }, [])

  const scheduleCloseDesktopDropdown = useCallback(() => {
    dropdownTimerRef.current = setTimeout(() => {
      setDesktopDropdown(null)
    }, 300)
  }, [])

  const closeDesktopDropdown = useCallback(() => {
    setDesktopDropdown(null)
  }, [])

  const toggleUserCard = useCallback(() => {
    setUserCardOpen(prev => {
      const next = !prev
      if (next) {
        setDesktopDropdown(null)
        setMobileMenuOpen(false)
      }
      onToggleUserCard?.(next)
      return next
    })
  }, [onToggleUserCard])

  const closeUserCard = useCallback(() => {
    setUserCardOpen(false)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node
      if (navRef.current && !navRef.current.contains(target)) {
        closeDesktopDropdown()
        closeUserCard()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [closeDesktopDropdown, closeUserCard])

  // Close open panels on scroll
  useEffect(() => {
    const handleScroll = () => {
      closeUserCard()
      closeDesktopDropdown()
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [closeUserCard, closeDesktopDropdown])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeDesktopDropdown()
        closeUserCard()
        closeMobileMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeDesktopDropdown, closeUserCard, closeMobileMenu])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <NavbarRoot ref={navRef}>
        <NavbarLeft>
          <LogoLink href="https://decentraland.org" aria-label="Decentraland Home">
            <DclLogo />
          </LogoLink>

          <NavLinks
            desktopDropdown={desktopDropdown}
            onOpenDropdown={openDesktopDropdown}
            onScheduleCloseDropdown={scheduleCloseDesktopDropdown}
            activePage={activePage}
            i18n={i18n}
          />
        </NavbarLeft>

        <NavbarRight>
          {isSignedIn && (
            <NavbarRightGroup>
              {(creditsBalance || (showManaBalancesInNavbar && manaBalances)) && (
                <NavbarBalancesStack>
                  {creditsBalance && (
                    <CreditsBalanceButton onClick={onClickCredits} aria-label={`${formatBalance(creditsBalance.balance)} credits`}>
                      <CreditsIcon />
                      {formatBalance(creditsBalance.balance)}
                      <CreditsTooltip className="credits-tooltip">
                        {i18n.creditsExpiringIn.replace('{days}', String(daysUntil(creditsBalance.expiresAt)))}
                        <br />
                        {i18n.creditsValueNote}
                      </CreditsTooltip>
                    </CreditsBalanceButton>
                  )}

                  {showManaBalancesInNavbar && manaBalances && (
                    <NavbarManaBalancesGroup>
                      {manaBalances.ETHEREUM !== undefined && (
                        <NavbarManaBalanceButton
                          clickable={!!onClickBalance}
                          onClick={onClickBalance ? () => onClickBalance(Network.ETHEREUM) : undefined}
                          aria-label={`${formatBalance(manaBalances.ETHEREUM)} MANA on Ethereum`}
                        >
                          <ManaEthInlineIcon />
                          {formatBalance(manaBalances.ETHEREUM)}
                        </NavbarManaBalanceButton>
                      )}
                      {manaBalances.MATIC !== undefined && (
                        <NavbarManaBalanceButton
                          clickable={!!onClickBalance}
                          onClick={onClickBalance ? () => onClickBalance(Network.MATIC) : undefined}
                          aria-label={`${formatBalance(manaBalances.MATIC)} MANA on Polygon`}
                        >
                          <ManaMaticInlineIcon />
                          {formatBalance(manaBalances.MATIC)}
                        </NavbarManaBalanceButton>
                      )}
                    </NavbarManaBalancesGroup>
                  )}
                </NavbarBalancesStack>
              )}

              {notificationSlot && (
                <div
                  onClick={() => {
                    setUserCardOpen(false)
                    setDesktopDropdown(null)
                  }}
                >
                  {notificationSlot}
                </div>
              )}

              <UserCardPanel
                isLoadingProfile={isLoadingProfile}
                address={address}
                avatar={avatar}
                userCardOpen={userCardOpen}
                onToggleUserCard={toggleUserCard}
                onClickSignOut={onClickSignOut}
                selectedChain={selectedChain}
                chains={chains}
                onSelectChain={onSelectChain}
                manaBalances={showManaBalancesInNavbar ? undefined : manaBalances}
                onClickBalance={showManaBalancesInNavbar ? undefined : onClickBalance}
                i18n={i18n}
              />
            </NavbarRightGroup>
          )}

          {!isSignedIn && (
            <SignInButton onClick={onClickSignIn} disabled={isSigningIn}>
              {isSigningIn ? i18n.signingIn : i18n.signIn}
            </SignInButton>
          )}

          <HamburgerButton
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </HamburgerButton>
        </NavbarRight>
      </NavbarRoot>

      <MobileMenu open={mobileMenuOpen} onClose={closeMobileMenu} i18n={i18n} />
    </>
  )
})

Navbar.displayName = 'Navbar'

export { Navbar }
