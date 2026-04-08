import { memo, useCallback, useState } from 'react'
import { Network } from '@dcl/schemas/dist/dapps/network'
import { AccountIcon, ChevronDownIcon, CopyIcon, DclLogo, LogoutIcon, SettingsIcon, ShoppingBagIcon, WearableIcon } from './icons'
import { USER_MENU_ITEMS } from './Navbar.defaults'
import type { NavbarI18n } from './Navbar.types'
import {
  AvatarButton,
  AvatarImage,
  BalanceAndChainRow,
  ChainOption,
  ChainPillButton,
  ChainPillContainer,
  ChainPillIconWrapper,
  ChainPillText,
  ManaBalanceClickable,
  ManaBalanceValue,
  ManaBalancesGroup,
  MobileUserCard,
  MobileUserCardAddress,
  MobileUserCardAddressLabel,
  MobileUserCardAvatar,
  MobileUserCardCopyButton,
  MobileUserCardInfo,
  MobileUserCardName,
  MobileUserCardTop,
  UserCard,
  UserCardAddress,
  UserCardAddressLabel,
  UserCardAvatarBody,
  UserCardAvatarContainer,
  UserCardChainOptions,
  UserCardCopyButton,
  UserCardDivider,
  UserCardLogout,
  UserCardMenu,
  UserCardMenuItem,
  UserCardName,
  UserCardWrapper
} from './UserCardPanel.styled'
import type { UserMenuItem } from './Navbar.defaults'
import type { ChainId } from '@dcl/schemas'

const ICON_MAP: Record<UserMenuItem['icon'], React.FC> = {
  account: AccountIcon,
  wearable: WearableIcon,
  settings: SettingsIcon,
  shopping: ShoppingBagIcon
}

const PEER_BASE_URL = 'https://peer.decentraland.org/content/contents/'

function resolveContentUrl(hash: string | undefined): string | undefined {
  if (!hash) return undefined
  if (hash.startsWith('http://') || hash.startsWith('https://')) return hash
  if (hash.startsWith('data:')) return hash
  if (!/^[a-zA-Z0-9]+$/.test(hash)) return undefined
  return `${PEER_BASE_URL}${hash}`
}

/* ------------------------------------------------------------------ */
/*  Chain helpers & icons                                              */
/* ------------------------------------------------------------------ */

const CHAIN_DISPLAY_NAME: Partial<Record<number, string>> = {
  1: 'Ethereum',
  11155111: 'Sepolia',
  137: 'Polygon',
  80002: 'Amoy',
  56: 'BSC',
  43114: 'Avalanche',
  42161: 'Arbitrum',
  10: 'Optimism',
  250: 'Fantom'
}

function getChainDisplayName(chainId: number): string {
  return CHAIN_DISPLAY_NAME[chainId] ?? `Chain ${chainId}`
}

/** Ethereum family: mainnet, sepolia, goerli, kovan, rinkeby, ropsten */
const ETHEREUM_FAMILY = new Set([1, 5, 42, 4, 3, 11155111])

function isEthereumFamily(chainId: number): boolean {
  return ETHEREUM_FAMILY.has(chainId)
}

function EthereumChainIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2L4.5 10.5L10 13.5L15.5 10.5L10 2Z" fill="#627EEA" />
      <path d="M4.5 10.5L10 18L15.5 10.5L10 13.5L4.5 10.5Z" fill="#627EEA" opacity="0.6" />
      <path d="M10 2L4.5 10.5L10 8.5L15.5 10.5L10 2Z" fill="#C0CBF6" opacity="0.4" />
    </svg>
  )
}

function PolygonChainIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 7.5L10.75 5.9C10.3 5.64 9.7 5.64 9.25 5.9L6.5 7.5L9.25 9.1C9.7 9.36 10.3 9.36 10.75 9.1L13.5 7.5Z" fill="#8247E5" />
      <path d="M14.5 8.3L11.75 9.9C11.3 10.16 11 10.66 11 11.2V14.4L13.75 12.8C14.2 12.54 14.5 12.04 14.5 11.5V8.3Z" fill="#8247E5" />
      <path d="M9 11.2C9 10.66 8.7 10.16 8.25 9.9L5.5 8.3V11.5C5.5 12.04 5.8 12.54 6.25 12.8L9 14.4V11.2Z" fill="#8247E5" />
    </svg>
  )
}

function ChainIcon({ chainId }: { chainId: number }) {
  return isEthereumFamily(chainId) ? <EthereumChainIcon /> : <PolygonChainIcon />
}

/* ------------------------------------------------------------------ */
/*  Mana icons (inline SVGs matching ManaEthIcon / ManaMaticIcon)     */
/* ------------------------------------------------------------------ */

function ManaEthInlineIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.864 6.952C9.864 4.968 8.264 3.32 6.28 3.32C4.296 3.32 2.696 4.968 2.696 6.952C2.696 8.92 4.296 10.52 6.28 10.52C8.264 10.52 9.864 8.92 9.864 6.952ZM9.032 6.952C9.032 8.456 7.688 9.688 6.28 9.688C4.728 9.688 3.528 8.488 3.528 6.952C3.528 5.432 4.728 4.152 6.28 4.152C7.704 4.152 9.032 5.432 9.032 6.952ZM12.248 10.424V3.544L6.28 0.12L0.312 3.544V10.424L6.28 13.848L12.248 10.424ZM11.192 9.832L6.296 12.632L1.368 9.832V4.184L6.28 1.336L11.192 4.184V9.832Z"
        fill="#FF2D55"
      />
    </svg>
  )
}

function ManaMaticInlineIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0L24 12L12 24L0 12L12 0ZM12.0002 3.36001L20.6402 12L12.0002 20.64L3.36023 12L12.0002 3.36001ZM12.0009 16.32C14.3868 16.32 16.3209 14.3859 16.3209 12C16.3209 9.61415 14.3868 7.68002 12.0009 7.68002C9.61507 7.68002 7.68094 9.61415 7.68094 12C7.68094 14.3859 9.61507 16.32 12.0009 16.32Z"
        fill="#FCFCFC"
      />
    </svg>
  )
}

/** Format a number with commas (e.g. 1234 -> "1,234"). */
function formatBalance(value: number): string {
  return Math.floor(value).toLocaleString('en-US')
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

interface UserCardPanelProps {
  isLoadingProfile?: boolean
  address?: string
  avatar?: { name?: string; avatar?: { snapshots?: { face256?: string; body?: string } } }
  userCardOpen: boolean
  onToggleUserCard: () => void
  onClickSignOut: () => void
  selectedChain?: ChainId
  chains?: ChainId[]
  onSelectChain?: (chain: ChainId) => void
  manaBalances?: Partial<Record<Network, number>>
  onClickBalance?: (network: Network) => void
  i18n: NavbarI18n
}

const UserCardPanel = memo(function UserCardPanel({
  isLoadingProfile,
  address,
  avatar,
  userCardOpen,
  onToggleUserCard,
  onClickSignOut,
  selectedChain,
  chains,
  onSelectChain,
  manaBalances,
  onClickBalance,
  i18n
}: UserCardPanelProps) {
  const resolvedFace = resolveContentUrl(avatar?.avatar?.snapshots?.face256)
  const [loadedUrl, setLoadedUrl] = useState<string>()
  const faceLoaded = resolvedFace ? loadedUrl === resolvedFace : false
  const bodyUrl = resolveContentUrl(avatar?.avatar?.snapshots?.body)
  const userName = avatar?.name || (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '')
  const shortAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''

  const [addressCopied, setAddressCopied] = useState(false)
  const [chainSelectorOpen, setChainSelectorOpen] = useState(false)

  const copyAddress = useCallback(() => {
    if (address) {
      navigator.clipboard
        .writeText(address)
        .then(() => {
          setAddressCopied(true)
          setTimeout(() => setAddressCopied(false), 2000)
        })
        .catch(() => {
          // Silently fail if clipboard API is not available
        })
    }
  }, [address])

  const handleSelectChain = useCallback(
    (chain: ChainId) => {
      if (chain !== selectedChain) {
        onSelectChain?.(chain)
      }
      setChainSelectorOpen(false)
    },
    [selectedChain, onSelectChain]
  )

  const hasChainOrMana =
    (selectedChain !== undefined && chains && chains.length > 0) || (manaBalances && Object.keys(manaBalances).length > 0)

  const renderBalanceAndChain = () => {
    if (!hasChainOrMana) return null
    return (
      <BalanceAndChainRow>
        {manaBalances && (
          <ManaBalancesGroup>
            {manaBalances.ETHEREUM !== undefined && (
              <ManaBalanceClickable clickable={!!onClickBalance} onClick={() => onClickBalance?.(Network.ETHEREUM)}>
                <ManaEthInlineIcon />
                <ManaBalanceValue>{formatBalance(manaBalances.ETHEREUM)}</ManaBalanceValue>
              </ManaBalanceClickable>
            )}
            {manaBalances.MATIC !== undefined && (
              <ManaBalanceClickable clickable={!!onClickBalance} onClick={() => onClickBalance?.(Network.MATIC)}>
                <ManaMaticInlineIcon />
                <ManaBalanceValue>{formatBalance(manaBalances.MATIC)}</ManaBalanceValue>
              </ManaBalanceClickable>
            )}
          </ManaBalancesGroup>
        )}
        {selectedChain !== undefined && chains && chains.length > 0 && (
          <ChainPillContainer>
            <ChainPillButton onClick={() => setChainSelectorOpen(prev => !prev)}>
              <ChainPillIconWrapper>
                <ChainIcon chainId={selectedChain} />
              </ChainPillIconWrapper>
              <ChainPillText>{getChainDisplayName(selectedChain)}</ChainPillText>
              <ChevronDownIcon
                style={{
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                  color: 'white',
                  transform: chainSelectorOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease'
                }}
              />
            </ChainPillButton>
            {chainSelectorOpen && (
              <UserCardChainOptions role="listbox" aria-label="Select chain">
                {chains.map(chain => {
                  const isSelected = chain === selectedChain
                  return (
                    <ChainOption
                      key={chain}
                      selected={isSelected}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelectChain(chain)}
                    >
                      <ChainIcon chainId={chain} />
                      {getChainDisplayName(chain)}
                    </ChainOption>
                  )
                })}
              </UserCardChainOptions>
            )}
          </ChainPillContainer>
        )}
      </BalanceAndChainRow>
    )
  }

  const renderAvatar = () => {
    if (resolvedFace) {
      return (
        <AvatarImage
          src={resolvedFace}
          alt=""
          onLoad={() => setLoadedUrl(resolvedFace)}
          onError={() => setLoadedUrl(resolvedFace)}
          style={{ opacity: faceLoaded ? 1 : 0 }}
        />
      )
    }
    // Fallback: render the DCL logo as a small avatar placeholder
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', padding: 6 }}>
        <DclLogo style={{ width: '100%', height: '100%' }} />
      </div>
    )
  }

  const renderMenuItems = () => (
    <>
      {USER_MENU_ITEMS.map(item => {
        const Icon = ICON_MAP[item.icon]
        return (
          <UserCardMenuItem key={item.label} href={item.url}>
            {Icon && <Icon />}
            {i18n[item.label]}
          </UserCardMenuItem>
        )
      })}
      <UserCardDivider />
      <UserCardLogout onClick={onClickSignOut}>
        <LogoutIcon />
        {i18n.logout}
      </UserCardLogout>
    </>
  )

  return (
    <>
      {/* Desktop avatar button + user card */}
      <UserCardWrapper>
        <AvatarButton
          onClick={onToggleUserCard}
          aria-label="User menu"
          aria-expanded={userCardOpen}
          aria-haspopup="true"
          className={isLoadingProfile ? 'loading' : undefined}
        >
          {!isLoadingProfile && renderAvatar()}
        </AvatarButton>

        {userCardOpen && (
          <UserCard onClick={e => e.stopPropagation()}>
            <UserCardAvatarContainer>{bodyUrl ? <UserCardAvatarBody src={bodyUrl} alt="" /> : null}</UserCardAvatarContainer>
            <UserCardMenu>
              <div style={{ paddingLeft: 16, paddingBottom: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <UserCardName title={userName}>{userName}</UserCardName>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <UserCardAddressLabel>{i18n.walletAddress}</UserCardAddressLabel>
                  <UserCardAddress>
                    {addressCopied ? i18n.addressCopied : shortAddress}
                    <UserCardCopyButton onClick={copyAddress} aria-label="Copy address">
                      <CopyIcon />
                    </UserCardCopyButton>
                  </UserCardAddress>
                </div>
                {renderBalanceAndChain()}
              </div>
              <UserCardDivider />
              {renderMenuItems()}
            </UserCardMenu>
          </UserCard>
        )}
      </UserCardWrapper>

      {/* Mobile user card (rendered outside navbar root via portal-like placement) */}
      {userCardOpen && (
        <MobileUserCard data-mobile-user-card onClick={e => e.stopPropagation()}>
          <MobileUserCardTop>
            <MobileUserCardAvatar className={isLoadingProfile ? 'loading' : undefined}>
              {!isLoadingProfile && renderAvatar()}
            </MobileUserCardAvatar>
            <MobileUserCardInfo>
              <MobileUserCardName title={userName}>{userName}</MobileUserCardName>
              <MobileUserCardAddressLabel>{i18n.walletAddress}</MobileUserCardAddressLabel>
              <MobileUserCardAddress>
                {addressCopied ? i18n.addressCopied : shortAddress}
                <MobileUserCardCopyButton onClick={copyAddress} aria-label="Copy address">
                  <CopyIcon />
                </MobileUserCardCopyButton>
              </MobileUserCardAddress>
              {renderBalanceAndChain()}
            </MobileUserCardInfo>
          </MobileUserCardTop>
          <UserCardDivider />
          <UserCardMenu>{renderMenuItems()}</UserCardMenu>
        </MobileUserCard>
      )}
    </>
  )
})

UserCardPanel.displayName = 'UserCardPanel'

export { UserCardPanel }
