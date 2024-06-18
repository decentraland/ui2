import { NFTCategory, NotificationType, Rarity } from "@dcl/schemas"

export enum NotificationActiveTab {
  NEWEST = "newest",
  READ = "read",
}

export type NotificationLocale = "en" | "es" | "zh"

export type RawDecentralandNotification<T extends NotificationType, M> = {
  id: string
  type: T
  address: string
  timestamp: number
  read: boolean
  created_at: string
  updated_at: string
  metadata: M
}

// Marketplace Notifications

type CommonNFTNotificationMetadataProps = {
  link: string
  image: string
  rarity: Rarity
  nftName: string
  network: "ethereum" | "polygon"
  category: NFTCategory
}

type ItemSoldMetadataProps = CommonNFTNotificationMetadataProps & {
  seller: string
}

type RoyalitesEarnedMetadataProps = CommonNFTNotificationMetadataProps & {
  royaltiesCollector: string
  royaltiesCut: string
}

type BidAcceptedMetadataProps = CommonNFTNotificationMetadataProps & {
  price: string
}

type BidReceivedMetadataProps = CommonNFTNotificationMetadataProps & {
  price: string
}

export type ItemSoldNotificationProps = RawDecentralandNotification<
  NotificationType.ITEM_SOLD,
  ItemSoldMetadataProps
>

export type RoyalitesEarnedNotificationProps = RawDecentralandNotification<
  NotificationType.ROYALTIES_EARNED,
  RoyalitesEarnedMetadataProps
>

export type BidAcceptedNotificationProps = RawDecentralandNotification<
  NotificationType.BID_ACCEPTED,
  BidAcceptedMetadataProps
>

export type BidReceivedNotificationProps = RawDecentralandNotification<
  NotificationType.BID_RECEIVED,
  BidReceivedMetadataProps
>

type MarketplaceNotificationsProps =
  | ItemSoldNotificationProps
  | RoyalitesEarnedNotificationProps
  | BidAcceptedNotificationProps
  | BidReceivedNotificationProps

// Governance Notifications

type CommonGovernanceNotificationMetadataProps = {
  proposalId: string
  proposalTitle: string
  title: string
  description: string
  link: string
}

export type GovernanceAnnouncementNotificationProps =
  RawDecentralandNotification<
    NotificationType.GOVERNANCE_ANNOUNCEMENT,
    Omit<
      CommonGovernanceNotificationMetadataProps,
      "proposalId" | "proposalTitle"
    >
  >
export type GovernanceProposalEnactedNotificationProps =
  RawDecentralandNotification<
    NotificationType.GOVERNANCE_PROPOSAL_ENACTED,
    CommonGovernanceNotificationMetadataProps
  >
export type GovernanceCoauthorRequestedNotificationProps =
  RawDecentralandNotification<
    NotificationType.GOVERNANCE_COAUTHOR_REQUESTED,
    CommonGovernanceNotificationMetadataProps
  >
export type GovernanceAuthoredProposalFinishedNotificationProps =
  RawDecentralandNotification<
    NotificationType.GOVERNANCE_AUTHORED_PROPOSAL_FINISHED,
    CommonGovernanceNotificationMetadataProps
  >
export type GovernanceVotingEndedVoterNotificationProps =
  RawDecentralandNotification<
    NotificationType.GOVERNANCE_VOTING_ENDED_VOTER,
    CommonGovernanceNotificationMetadataProps
  >
export type GovernanceNewCommentOnProposalNotificationProps =
  RawDecentralandNotification<
    NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROPOSAL,
    CommonGovernanceNotificationMetadataProps
  >
export type GovernanceNewCommentOnProjectUpdateNotificationProps =
  RawDecentralandNotification<
    NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROJECT_UPDATE,
    CommonGovernanceNotificationMetadataProps
  >

export type GovernancePitchPassedNotificationProps =
  RawDecentralandNotification<
    NotificationType.GOVERNANCE_PITCH_PASSED,
    CommonGovernanceNotificationMetadataProps
  >

export type GovernanceTenderPassedNotificationProps =
  RawDecentralandNotification<
    NotificationType.GOVERNANCE_TENDER_PASSED,
    CommonGovernanceNotificationMetadataProps
  >

type GovernanceNotificationsProps =
  | GovernanceAnnouncementNotificationProps
  | GovernanceProposalEnactedNotificationProps
  | GovernanceCoauthorRequestedNotificationProps
  | GovernanceAuthoredProposalFinishedNotificationProps
  | GovernanceVotingEndedVoterNotificationProps
  | GovernanceNewCommentOnProposalNotificationProps
  | GovernanceNewCommentOnProjectUpdateNotificationProps
  | GovernancePitchPassedNotificationProps
  | GovernanceTenderPassedNotificationProps

// Worlds Notifications

type CommonWorldsNotificationMetadataProps = {
  title: string
  description: string
  url: string
}

type WorldsNotificationMetadataWithWhenProps =
  CommonWorldsNotificationMetadataProps & {
    when: number
  }

export type WorldsMissingResourcesNotificationProps =
  RawDecentralandNotification<
    NotificationType.WORLDS_MISSING_RESOURCES,
    WorldsNotificationMetadataWithWhenProps
  >

export type WorldsAccessRestrictedNotificationProps =
  RawDecentralandNotification<
    NotificationType.WORLDS_ACCESS_RESTRICTED,
    WorldsNotificationMetadataWithWhenProps
  >

export type WorldsAccessRestoredNotificationProps = RawDecentralandNotification<
  NotificationType.WORLDS_ACCESS_RESTORED,
  CommonWorldsNotificationMetadataProps
>

type WorldPermissionMetadataProps = {
  title: string
  description: string
  world: string
  permissions: string[]
}

export type WorldsPermissionGrantedNotificationProps =
  RawDecentralandNotification<
    NotificationType.WORLDS_PERMISSION_GRANTED,
    WorldPermissionMetadataProps
  >

export type WorldsPermissionRevokedNotificationProps =
  RawDecentralandNotification<
    NotificationType.WORLDS_PERMISSION_REVOKED,
    WorldPermissionMetadataProps
  >

type WorldsNotificationsProps =
  | WorldsMissingResourcesNotificationProps
  | WorldsAccessRestrictedNotificationProps
  | WorldsAccessRestoredNotificationProps
  | WorldsPermissionGrantedNotificationProps
  | WorldsPermissionRevokedNotificationProps

// Land Notifications
type LandNotificationMetadataProps = {
  description: string
  link: string
  title: string
  contract: string
  lessor: string
  tenant: string
  operator: string
  startedAt: string
  endedAt: string
  tokenId: string
  land: string
}

export type LandRentedNotificationProps = RawDecentralandNotification<
  NotificationType.LAND_RENTED,
  LandNotificationMetadataProps
>

export type LandRentalEndedNotificationProps = RawDecentralandNotification<
  NotificationType.LAND_RENTAL_ENDED,
  LandNotificationMetadataProps
>

type LandNotificationsProps =
  | LandRentedNotificationProps
  | LandRentalEndedNotificationProps

// Reward Notifications

export type RewardAssignedNotificationProps = RawDecentralandNotification<
  NotificationType.REWARD_ASSIGNED,
  {
    tokenName: string
    tokenImage: string
    tokenRarity: Rarity
  }
>
type CommonEventsMetadataProps = {
  image: string
  link: string
  name: string
}

// events notifications
export type EventsStartsSoonNotificationProps = RawDecentralandNotification<
  NotificationType.EVENTS_STARTS_SOON,
  CommonEventsMetadataProps & {
    startsAt: string
    endsAt: string
  }
>

export type EventsStartedNotificationProps = RawDecentralandNotification<
  NotificationType.EVENTS_STARTED,
  CommonEventsMetadataProps
>

type EventsNotificationsProps =
  | EventsStartsSoonNotificationProps
  | EventsStartedNotificationProps

export type DCLNotificationProps =
  | MarketplaceNotificationsProps
  | GovernanceNotificationsProps
  | WorldsNotificationsProps
  | LandNotificationsProps
  | RewardAssignedNotificationProps
  | EventsNotificationsProps

export type CommonNotificationProps<N> = {
  notification: N
  locale: NotificationLocale
  renderProfile?: (address: string) => JSX.Element | string | null
}
