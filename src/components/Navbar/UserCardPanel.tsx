import { memo, useCallback, useEffect, useState } from 'react'
import { Network } from '@dcl/schemas/dist/dapps/network'
import { formatBalance } from './formatBalance'
import {
  AccountIcon,
  ChainIcon,
  ChevronDownIcon,
  CopyIcon,
  DclLogo,
  LogoutIcon,
  ManaEthInlineIcon,
  ManaMaticInlineIcon,
  SettingsIcon,
  ShoppingBagIcon,
  WearableIcon
} from './icons'
import { getUserMenuItems } from './Navbar.defaults'
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
/*  Chain helpers                                                      */
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
  const [faceError, setFaceError] = useState(false)

  // Reset error when face URL changes
  useEffect(() => {
    setFaceError(false)
  }, [resolvedFace])

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
    if (!resolvedFace || faceError) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', padding: 6 }}>
          <DclLogo style={{ width: '100%', height: '100%' }} />
        </div>
      )
    }
    return (
      <AvatarImage
        src={resolvedFace}
        alt=""
        onLoad={() => setLoadedUrl(resolvedFace)}
        onError={() => setFaceError(true)}
        style={{ opacity: faceLoaded ? 1 : 0 }}
      />
    )
  }

  const renderMenuItems = () => (
    <>
      {getUserMenuItems().map(item => {
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
