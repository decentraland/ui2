import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { CloseIcon, DclLogo, HamburgerIcon } from './icons'
import { MobileMenu } from './MobileMenu'
import { DEFAULT_I18N } from './Navbar.defaults'
import { NavLinks } from './NavLinks'
import { UserCardPanel } from './UserCardPanel'
import type { NavbarI18n, NavbarProps } from './Navbar.types'
import { CreditsBalanceButton, CreditsTooltip } from './Credits.styled'
import { HamburgerButton, LogoLink, NavBarLeft, NavBarRight, NavBarRightGroup, NavBarRoot, SignInButton } from './Navbar.styled'
import type { DropdownSection } from './Navbar.defaults'

/** Inline credits icon sized for the navbar (20x20). */
function NavbarCreditsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.5371 184.328C16.718 180.685 12.5221 170.582 16.1653 161.763L29.8558 128.622L16.1025 95.5076C12.4426 86.6954 16.6194 76.5848 25.4316 72.9248L58.5462 59.1716L72.2367 26.0312C75.8799 17.212 85.9827 13.0162 94.8018 16.6594L127.942 30.3498L161.057 16.5966C169.869 12.9367 179.98 17.1135 183.639 25.9257L197.393 59.0402L230.533 72.7308C239.352 76.374 243.548 86.4767 239.905 95.2958L226.215 128.436L239.968 161.551C243.628 170.363 239.451 180.474 230.639 184.134L197.524 197.887L183.834 231.027C180.19 239.846 170.088 244.042 161.269 240.399L128.128 226.709L95.0135 240.462C86.2013 244.122 76.0907 239.945 72.4307 231.133L58.6775 198.018L25.5371 184.328Z"
        fill="url(#credits-nav-g0)"
      />
      <path
        d="M39.4715 176.904C31.9127 173.782 28.3165 165.123 31.439 157.564L43.173 129.16L31.3852 100.777C28.2483 93.2245 31.8282 84.5587 39.3811 81.4219L67.7634 69.634L79.4974 41.2296C82.62 33.6708 91.279 30.0746 98.8377 33.1971L127.242 44.9312L155.624 33.1434C163.177 30.0065 171.843 33.5863 174.98 41.1392L186.768 69.5215L215.172 81.2555C222.731 84.3781 226.327 93.0371 223.205 100.596L211.471 129L223.258 157.383C226.395 164.935 222.815 173.601 215.262 176.738L186.88 188.526L175.146 216.93C172.024 224.489 163.365 228.085 155.806 224.963L127.401 213.229L99.0192 225.017C91.4664 228.153 82.8006 224.574 79.6637 217.021L67.8759 188.638L39.4715 176.904Z"
        fill="url(#credits-nav-g1)"
      />
      <path
        d="M54.4478 168.591C48.116 165.975 45.1036 158.722 47.7192 152.39L57.5484 128.596L47.6741 104.822C45.0465 98.4947 48.0452 91.2357 54.372 88.6081L78.147 78.7338L87.9762 54.9403C90.5919 48.6086 97.8452 45.5961 104.177 48.2118L127.97 58.041L151.745 48.1667C158.072 45.539 165.331 48.5378 167.959 54.8646L177.833 78.6395L201.627 88.4687C207.958 91.0844 210.971 98.3377 208.355 104.669L198.526 128.463L208.4 152.238C211.028 158.565 208.029 165.824 201.702 168.451L177.927 178.326L168.098 202.119C165.483 208.451 158.229 211.463 151.897 208.848L128.104 199.018L104.329 208.893C98.0022 211.52 90.7432 208.522 88.1155 202.195L78.2413 178.42L54.4478 168.591Z"
        fill="url(#credits-nav-g2)"
      />
      <defs>
        <linearGradient id="credits-nav-g0" x1="211.108" y1="218.484" x2="77.4791" y2="27.1647" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9BFFFF" />
          <stop offset="0.5" stopColor="#B8B9FF" />
          <stop offset="0.885" stopColor="#FFCBFF" />
          <stop offset="1" stopColor="#FDFCFF" />
        </linearGradient>
        <linearGradient id="credits-nav-g1" x1="225.88" y1="218.975" x2="71.9492" y2="33.3822" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5285BF" />
          <stop offset="1" stopColor="#AE66F0" />
        </linearGradient>
        <linearGradient id="credits-nav-g2" x1="195.385" y1="221.054" x2="91.1662" y2="16.6319" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9BFFFF" />
          <stop offset="0.5" stopColor="#B8B9FF" />
          <stop offset="1" stopColor="#FFCBFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/** Format a number with commas (e.g. 1234 -> "1,234"). */
function formatCreditsBalance(value: number): string {
  return Math.floor(value).toLocaleString('en-US')
}

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
  creditsBalance,
  onClickCredits,
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
        // Don't close if clicking inside the mobile user card
        const mobileCard = document.querySelector('[data-mobile-user-card]')
        if (mobileCard?.contains(target)) return
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
      <NavBarRoot ref={navRef}>
        <NavBarLeft>
          <LogoLink href="https://decentraland.org" aria-label="Decentraland Home">
            <DclLogo />
          </LogoLink>

          <NavLinks
            desktopDropdown={desktopDropdown}
            onOpenDropdown={openDesktopDropdown}
            onScheduleCloseDropdown={scheduleCloseDesktopDropdown}
            i18n={i18n}
          />
        </NavBarLeft>

        <NavBarRight>
          {isSignedIn && (
            <NavBarRightGroup>
              {creditsBalance && (
                <CreditsBalanceButton onClick={onClickCredits} aria-label={`${formatCreditsBalance(creditsBalance.balance)} credits`}>
                  <NavbarCreditsIcon />
                  {formatCreditsBalance(creditsBalance.balance)}
                  <CreditsTooltip className="credits-tooltip">
                    {i18n.creditsExpiringIn.replace('{days}', String(daysUntil(creditsBalance.expiresAt)))}
                    <br />
                    {i18n.creditsValueNote}
                  </CreditsTooltip>
                </CreditsBalanceButton>
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
                manaBalances={manaBalances}
                onClickBalance={onClickBalance}
                i18n={i18n}
              />
            </NavBarRightGroup>
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
        </NavBarRight>
      </NavBarRoot>

      <MobileMenu open={mobileMenuOpen} onClose={closeMobileMenu} i18n={i18n} />
    </>
  )
})

Navbar.displayName = 'Navbar'

export { Navbar }
