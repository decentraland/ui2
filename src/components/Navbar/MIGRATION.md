# Navbar Migration Guide (v1 → v2)

## Breaking Changes

### Removed Exports

- `NavbarPages` enum — no longer exists
- `MainMenu`, `MenuItem`, `SubMenu`, `SubMenuColumn`, `SubMenuItem` components — replaced by internal `NavLinks` and `MobileMenu`
- Old `NavbarProps` shape — completely rewritten

### New Props Interface

```typescript
type NavbarProps = {
  isSignedIn: boolean
  isSigningIn?: boolean
  isLoadingProfile?: boolean
  activePage?: 'whatsOn' | 'shop' | 'create' | 'learn'
  address?: string
  avatar?: { name?: string; avatar?: { snapshots?: { face256?: string; body?: string } } }
  i18n?: Partial<NavbarI18n>
  notificationSlot?: ReactNode
  selectedChain?: ChainId
  chains?: ChainId[]
  onSelectChain?: (chain: ChainId) => void
  manaBalances?: Partial<Record<Network, number>>
  onClickBalance?: (network: Network) => void
  creditsBalance?: { balance: number; expiresAt: number }
  onClickCredits?: () => void
  onToggleUserCard?: (isOpen: boolean) => void
  onClickSignIn: () => void
  onClickSignOut: () => void
}
```

### Key Differences

| Old API                                           | New API                                                   |
| ------------------------------------------------- | --------------------------------------------------------- |
| `activePage: NavbarPages`                         | `activePage?: 'whatsOn' \| 'shop' \| 'create' \| 'learn'` |
| `submenuItems: NavbarSubmenuProps`                | Menu items are hardcoded from `config.get()`              |
| `i18nNavbar`, `i18nUserMenu`, `i18nChainSelector` | Single `i18n?: Partial<NavbarI18n>` with English defaults |
| `notifications` data object                       | `notificationSlot?: ReactNode` (consumer renders)         |
| `chains`, `selectedChain` as direct props         | Same — `selectedChain?`, `chains?`, `onSelectChain?`      |
| `manaBalances` via UserMenu                       | `manaBalances?` as direct prop                            |
| `onClickNavbarItem` callback                      | Removed — links navigate directly                         |
| `onClickBalance`, `onClickOpen`                   | `onClickBalance?`, `onClickCredits?`                      |

### Notification Slot Pattern

Notifications are no longer managed by the Navbar. Instead, pass a fully rendered notification UI as the `notificationSlot` prop:

```tsx
import { Navbar, BellButton, NotificationBadge, NotificationPanel } from 'decentraland-ui2'

;<Navbar
  notificationSlot={<MyNotificationBell items={notifications} onToggle={handleToggle} />}
  onToggleUserCard={isOpen => {
    // Close notifications when user card opens (mutual exclusion)
    if (isOpen) closeNotifications()
  }}
/>
```

The styled components for building a notification panel (`BellButton`, `NotificationBadge`, `NotificationPanel`, etc.) are exported from `decentraland-ui2` for consumer use.

### Credits Balance

Credits display is built into the Navbar. Pass the data:

```tsx
<Navbar creditsBalance={{ balance: 4200, expiresAt: Date.now() + 86400000 * 30 }} onClickCredits={() => navigateToCredits()} />
```

### Chain Selector & MANA Balance

These render inside the user card panel (not in the top bar):

```tsx
<Navbar
  selectedChain={ChainId.ETHEREUM_MAINNET}
  chains={[ChainId.ETHEREUM_MAINNET, ChainId.MATIC_MAINNET]}
  onSelectChain={chain => switchChain(chain)}
  manaBalances={{ [Network.ETHEREUM]: 1234, [Network.MATIC]: 5678 }}
  onClickBalance={network => openAccount(network)}
/>
```

### URLs

Menu URLs are resolved from `@dcl/ui-env` config at runtime, so they automatically point to the correct environment (zone for dev, today for staging, org for production).

### Versioning

This is a breaking change. Bump to the next major version when publishing.
