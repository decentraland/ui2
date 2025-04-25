import { NFTCategory, NotificationType, Rarity } from "@dcl/schemas"
import { CreditsCompleteYourWeeklyGoalsNotificationProps, CreditsNotificationsProps } from "./NotificationTypes/Credits/types"

enum NotificationActiveTab {
  NEWEST = "newest",
  READ = "read",
}

type NotificationLocale = "en" | "es" | "zh"

type RawDecentralandNotification<T extends NotificationType, M> = {
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

type ItemSoldNotificationProps = RawDecentralandNotification<
  NotificationType.ITEM_SOLD,
  ItemSoldMetadataProps
>

type RoyalitesEarnedNotificationProps = RawDecentralandNotification<
  NotificationType.ROYALTIES_EARNED,
  RoyalitesEarnedMetadataProps
>

type BidAcceptedNotificationProps = RawDecentralandNotification<
  NotificationType.BID_ACCEPTED,
  BidAcceptedMetadataProps
>

type BidReceivedNotificationProps = RawDecentralandNotification<
  NotificationType.BID_RECEIVED,
  BidReceivedMetadataProps
>

type MarketplaceNotificationsProps =
  | ItemSoldNotificationProps
  | RoyalitesEarnedNotificationProps
  | BidAcceptedNotificationProps
  | BidReceivedNotificationProps

type RewardsNotificationProps =
  | RewardAssignedNotificationProps
  | RewardInProgressNotificationProps
  | RewardDelayedNotificationProps
  | CampaignOutOfFundsNotificationProps
  | CampaignOutOfStockNotificationProps
  | CampaignGasPriceHigherThanExpectedNotificationProps

// Governance Notifications

type CommonGovernanceNotificationMetadataProps = {
  proposalId: string
  proposalTitle: string
  title: string
  description: string
  link: string
}

type GovernanceAnnouncementNotificationProps = RawDecentralandNotification<
  NotificationType.GOVERNANCE_ANNOUNCEMENT,
  Omit<
    CommonGovernanceNotificationMetadataProps,
    "proposalId" | "proposalTitle"
  >
>
type GovernanceProposalEnactedNotificationProps = RawDecentralandNotification<
  NotificationType.GOVERNANCE_PROPOSAL_ENACTED,
  CommonGovernanceNotificationMetadataProps
>
type GovernanceCoauthorRequestedNotificationProps = RawDecentralandNotification<
  NotificationType.GOVERNANCE_COAUTHOR_REQUESTED,
  CommonGovernanceNotificationMetadataProps
>
type GovernanceAuthoredProposalFinishedNotificationProps =
  RawDecentralandNotification<
    NotificationType.GOVERNANCE_AUTHORED_PROPOSAL_FINISHED,
    CommonGovernanceNotificationMetadataProps
  >
type GovernanceVotingEndedVoterNotificationProps = RawDecentralandNotification<
  NotificationType.GOVERNANCE_VOTING_ENDED_VOTER,
  CommonGovernanceNotificationMetadataProps
>
type GovernanceNewCommentOnProposalNotificationProps =
  RawDecentralandNotification<
    NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROPOSAL,
    CommonGovernanceNotificationMetadataProps
  >
type GovernanceNewCommentOnProjectUpdateNotificationProps =
  RawDecentralandNotification<
    NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROJECT_UPDATE,
    CommonGovernanceNotificationMetadataProps
  >

type GovernancePitchPassedNotificationProps = RawDecentralandNotification<
  NotificationType.GOVERNANCE_PITCH_PASSED,
  CommonGovernanceNotificationMetadataProps
>

type GovernanceTenderPassedNotificationProps = RawDecentralandNotification<
  NotificationType.GOVERNANCE_TENDER_PASSED,
  CommonGovernanceNotificationMetadataProps
>

type GovernanceVotedOnBehalfNotification = RawDecentralandNotification<
  NotificationType.GOVERNANCE_VOTED_ON_BEHALF,
  CommonGovernanceNotificationMetadataProps
>

type GovernanceWhaleVoteNotification = RawDecentralandNotification<
  NotificationType.GOVERNANCE_WHALE_VOTE,
  CommonGovernanceNotificationMetadataProps
>

type GovernanceCliffEndedNotification = RawDecentralandNotification<
  NotificationType.GOVERNANCE_CLIFF_ENDED,
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
  | GovernanceVotedOnBehalfNotification
  | GovernanceWhaleVoteNotification
  | GovernanceCliffEndedNotification

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

type WorldsMissingResourcesNotificationProps = RawDecentralandNotification<
  NotificationType.WORLDS_MISSING_RESOURCES,
  WorldsNotificationMetadataWithWhenProps
>

type WorldsAccessRestrictedNotificationProps = RawDecentralandNotification<
  NotificationType.WORLDS_ACCESS_RESTRICTED,
  WorldsNotificationMetadataWithWhenProps
>

type WorldsAccessRestoredNotificationProps = RawDecentralandNotification<
  NotificationType.WORLDS_ACCESS_RESTORED,
  CommonWorldsNotificationMetadataProps
>

type WorldPermissionMetadataProps = {
  title: string
  description: string
  world: string
  permissions: string[]
}

type WorldsPermissionGrantedNotificationProps = RawDecentralandNotification<
  NotificationType.WORLDS_PERMISSION_GRANTED,
  WorldPermissionMetadataProps
>

type WorldsPermissionRevokedNotificationProps = RawDecentralandNotification<
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

type LandRentedNotificationProps = RawDecentralandNotification<
  NotificationType.LAND_RENTED,
  LandNotificationMetadataProps
>

type LandRentalEndedNotificationProps = RawDecentralandNotification<
  NotificationType.LAND_RENTAL_ENDED,
  LandNotificationMetadataProps
>

type LandNotificationsProps =
  | LandRentedNotificationProps
  | LandRentalEndedNotificationProps

// Reward Notifications

type CommonRewardsMetadata = {
  tokenName: string
  tokenImage: string
  tokenRarity: Rarity
}

type CommonCampaignMetadata = {
  link?: string
  campaignName: string
}

type RewardAssignedNotificationProps = RawDecentralandNotification<
  NotificationType.REWARD_ASSIGNED,
  CommonRewardsMetadata
>

type RewardInProgressNotificationProps = RawDecentralandNotification<
  NotificationType.REWARD_IN_PROGRESS,
  CommonRewardsMetadata
>

type RewardDelayedNotificationProps = RawDecentralandNotification<
  NotificationType.REWARD_DELAYED,
  CommonRewardsMetadata
>

type CampaignOutOfStockNotificationProps = RawDecentralandNotification<
  NotificationType.REWARD_CAMPAIGN_OUT_OF_STOCK,
  CommonCampaignMetadata
>

type CampaignOutOfFundsNotificationProps = RawDecentralandNotification<
  NotificationType.REWARD_CAMPAIGN_OUT_OF_FUNDS,
  CommonCampaignMetadata
>

type CampaignGasPriceHigherThanExpectedNotificationProps =
  RawDecentralandNotification<
    NotificationType.REWARD_CAMPAIGN_GAS_PRICE_HIGHER_THAN_EXPECTED,
    CommonCampaignMetadata
  >

type CommonEventsMetadataProps = {
  image: string
  link: string
  name: string
}

// events notifications
type EventsStartsSoonNotificationProps = RawDecentralandNotification<
  NotificationType.EVENTS_STARTS_SOON,
  CommonEventsMetadataProps & {
    startsAt: string
    endsAt: string
  }
>

type EventsStartedNotificationProps = RawDecentralandNotification<
  NotificationType.EVENTS_STARTED,
  CommonEventsMetadataProps
>

type EventsNotificationsProps =
  | EventsStartsSoonNotificationProps
  | EventsStartedNotificationProps

// Streaming Notifications

type CommonStreamingNotificationMetadataProps = {
  title: string
  description: string
  position: string
  worldName: string | null
  isWorld: boolean
  url: string
  address: string
}

type StreamingKeyResetNotificationProps = RawDecentralandNotification<
  NotificationType.STREAMING_KEY_RESET,
  CommonStreamingNotificationMetadataProps
>

type StreamingKeyRevokeNotificationProps = RawDecentralandNotification<
  NotificationType.STREAMING_KEY_REVOKE,
  CommonStreamingNotificationMetadataProps
>

type StreamingKeyExpiredNotificationProps = RawDecentralandNotification<
  NotificationType.STREAMING_KEY_EXPIRED,
  CommonStreamingNotificationMetadataProps
>

type StreamingTimeExceededNotificationProps = RawDecentralandNotification<
  NotificationType.STREAMING_TIME_EXCEEDED,
  CommonStreamingNotificationMetadataProps
>

type StreamingPlaceUpdatedNotificationProps = RawDecentralandNotification<
  NotificationType.STREAMING_PLACE_UPDATED,
  CommonStreamingNotificationMetadataProps
>

type StreamingNotificationsProps =
  | StreamingKeyResetNotificationProps
  | StreamingKeyRevokeNotificationProps
  | StreamingKeyExpiredNotificationProps
  | StreamingTimeExceededNotificationProps
  | StreamingPlaceUpdatedNotificationProps

type DCLNotificationProps =
  | MarketplaceNotificationsProps
  | GovernanceNotificationsProps
  | WorldsNotificationsProps
  | LandNotificationsProps
  | RewardsNotificationProps
  | EventsNotificationsProps
  | StreamingNotificationsProps
  | CreditsNotificationsProps

type CommonNotificationProps<N> = {
  notification: N
  locale: NotificationLocale
  renderProfile?: (address: string) => JSX.Element | string | null
}

export { NotificationActiveTab }
export type {
  NotificationLocale,
  RawDecentralandNotification,
  ItemSoldNotificationProps,
  RoyalitesEarnedNotificationProps,
  BidAcceptedNotificationProps,
  BidReceivedNotificationProps,
  GovernanceAnnouncementNotificationProps,
  GovernanceProposalEnactedNotificationProps,
  GovernanceCoauthorRequestedNotificationProps,
  GovernanceAuthoredProposalFinishedNotificationProps,
  GovernanceVotingEndedVoterNotificationProps,
  GovernanceNewCommentOnProposalNotificationProps,
  GovernanceNewCommentOnProjectUpdateNotificationProps,
  GovernancePitchPassedNotificationProps,
  GovernanceTenderPassedNotificationProps,
  WorldsMissingResourcesNotificationProps,
  WorldsAccessRestrictedNotificationProps,
  WorldsAccessRestoredNotificationProps,
  WorldsPermissionGrantedNotificationProps,
  WorldsPermissionRevokedNotificationProps,
  LandRentedNotificationProps,
  LandRentalEndedNotificationProps,
  RewardAssignedNotificationProps,
  RewardInProgressNotificationProps,
  RewardDelayedNotificationProps,
  CampaignOutOfStockNotificationProps,
  CampaignOutOfFundsNotificationProps,
  CampaignGasPriceHigherThanExpectedNotificationProps,
  EventsStartsSoonNotificationProps,
  EventsStartedNotificationProps,
  StreamingKeyResetNotificationProps,
  StreamingKeyRevokeNotificationProps,
  StreamingKeyExpiredNotificationProps,
  StreamingTimeExceededNotificationProps,
  StreamingPlaceUpdatedNotificationProps,
  StreamingNotificationsProps,
  DCLNotificationProps,
  CommonNotificationProps,
  CreditsNotificationsProps,
  CreditsCompleteYourWeeklyGoalsNotificationProps,
}
