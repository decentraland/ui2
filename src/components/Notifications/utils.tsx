import { FunctionComponent } from "react"
import { NotificationType, Rarity } from "@dcl/schemas"
import {
  BidAcceptedNotification,
  BidReceivedNotification,
  CampaignGasPriceHigherThanExpectedNotification,
  CampaignOutOfFundsNotification,
  CampaignOutOfStockNotification,
  CreditsClaimReminderNotification,
  CreditsCompleteYourWeeklyGoalsNotification,
  CreditsDoNotMissOutNotification,
  CreditsExpireIn24HrsReminderNotification,
  CreditsExpireSoonReminderNotification,
  EventsStartedNotification,
  EventsStartsSoonNotification,
  GovernanceAnnouncementNotification,
  GovernanceAuthoredProposalFinishedNotification,
  GovernanceCoauthorRequestedNotification,
  GovernanceNewCommentOnProjectUpdateNotification,
  GovernanceNewCommentOnProposalNotification,
  GovernancePitchPassedNotification,
  GovernanceProposalEnactedNotification,
  GovernanceTenderPassedNotification,
  GovernanceVotingEndedVoterNotification,
  ItemSoldNotification,
  LandRentalEndedNotification,
  LandRentedNotification,
  ReferralInvitedUserAcceptedNotification,
  ReferralNewTierReachedNotification,
  RewardAssignedNotification,
  RewardDelayedNotification,
  RewardInProgressNotification,
  RoyaltiesEarnedNotification,
  StreamingKeyExpiredNotification,
  StreamingKeyResetNotification,
  StreamingKeyRevokeNotification,
  StreamingPlaceUpdatedNotification,
  StreamingTimeExceededNotification,
  WorldsAccessRestoredNotification,
  WorldsAccessRestrictedNotification,
  WorldsMissingResourcesNotification,
  WorldsPermissionGrantedNotification,
  WorldsPermissionRevokedNotification,
} from "./NotificationTypes"
import { CommonNotificationProps, DCLNotificationProps } from "./types"

const MAXIMUM_FRACTION_DIGITS = 2

function formatMana(
  mana: string,
  maximumFractionDigits = MAXIMUM_FRACTION_DIGITS
): string {
  return (Number(mana) / 1e18).toFixed(maximumFractionDigits).toLocaleString()
}

function getBGColorByRarity(rarity: Rarity) {
  return Rarity.getGradient(rarity).join()
}

type DecentralandNotificationComponentByType<T> = Partial<{
  [k in NotificationType]: T extends DCLNotificationProps
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      FunctionComponent<CommonNotificationProps<any>> | null
    : never
}>

const NotificationComponentByType: DecentralandNotificationComponentByType<DCLNotificationProps> =
  {
    [NotificationType.BID_ACCEPTED]: BidAcceptedNotification,
    [NotificationType.BID_RECEIVED]: BidReceivedNotification,
    [NotificationType.CREDITS_REMINDER_CLAIM_CREDITS]:
      CreditsClaimReminderNotification,
    [NotificationType.CREDITS_REMINDER_COMPLETE_GOALS]:
      CreditsCompleteYourWeeklyGoalsNotification,
    [NotificationType.CREDITS_REMINDER_DO_NOT_MISS_OUT]:
      CreditsDoNotMissOutNotification,
    [NotificationType.CREDITS_REMINDER_USAGE]:
      CreditsExpireSoonReminderNotification,
    [NotificationType.CREDITS_REMINDER_USAGE_24_HOURS]:
      CreditsExpireIn24HrsReminderNotification,
    [NotificationType.EVENTS_STARTED]: EventsStartedNotification,
    [NotificationType.EVENTS_STARTS_SOON]: EventsStartsSoonNotification,
    [NotificationType.GOVERNANCE_ANNOUNCEMENT]:
      GovernanceAnnouncementNotification,
    [NotificationType.GOVERNANCE_AUTHORED_PROPOSAL_FINISHED]:
      GovernanceAuthoredProposalFinishedNotification,
    [NotificationType.GOVERNANCE_COAUTHOR_REQUESTED]:
      GovernanceCoauthorRequestedNotification,
    [NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROPOSAL]:
      GovernanceNewCommentOnProposalNotification,
    [NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROJECT_UPDATE]:
      GovernanceNewCommentOnProjectUpdateNotification,
    [NotificationType.GOVERNANCE_PITCH_PASSED]:
      GovernancePitchPassedNotification,
    [NotificationType.GOVERNANCE_PROPOSAL_ENACTED]:
      GovernanceProposalEnactedNotification,
    [NotificationType.GOVERNANCE_TENDER_PASSED]:
      GovernanceTenderPassedNotification,
    [NotificationType.GOVERNANCE_VOTING_ENDED_VOTER]:
      GovernanceVotingEndedVoterNotification,
    [NotificationType.ITEM_SOLD]: ItemSoldNotification,
    [NotificationType.LAND_RENTAL_ENDED]: LandRentalEndedNotification,
    [NotificationType.LAND_RENTED]: LandRentedNotification,
    [NotificationType.REFERRAL_INVITED_USERS_ACCEPTED]:
      ReferralInvitedUserAcceptedNotification,
    [NotificationType.REFERRAL_NEW_TIER_REACHED]:
      ReferralNewTierReachedNotification,
    [NotificationType.REWARD_ASSIGNED]: RewardAssignedNotification,
    [NotificationType.REWARD_CAMPAIGN_GAS_PRICE_HIGHER_THAN_EXPECTED]:
      CampaignGasPriceHigherThanExpectedNotification,
    [NotificationType.REWARD_CAMPAIGN_OUT_OF_FUNDS]:
      CampaignOutOfFundsNotification,
    [NotificationType.REWARD_CAMPAIGN_OUT_OF_STOCK]:
      CampaignOutOfStockNotification,
    [NotificationType.REWARD_DELAYED]: RewardDelayedNotification,
    [NotificationType.REWARD_IN_PROGRESS]: RewardInProgressNotification,
    [NotificationType.ROYALTIES_EARNED]: RoyaltiesEarnedNotification,
    [NotificationType.STREAMING_KEY_EXPIRED]: StreamingKeyExpiredNotification,
    [NotificationType.STREAMING_KEY_RESET]: StreamingKeyResetNotification,
    [NotificationType.STREAMING_KEY_REVOKE]: StreamingKeyRevokeNotification,
    [NotificationType.STREAMING_PLACE_UPDATED]:
      StreamingPlaceUpdatedNotification,
    [NotificationType.STREAMING_TIME_EXCEEDED]:
      StreamingTimeExceededNotification,
    [NotificationType.WORLDS_ACCESS_RESTORED]: WorldsAccessRestoredNotification,
    [NotificationType.WORLDS_ACCESS_RESTRICTED]:
      WorldsAccessRestrictedNotification,
    [NotificationType.WORLDS_MISSING_RESOURCES]:
      WorldsMissingResourcesNotification,
    [NotificationType.WORLDS_PERMISSION_GRANTED]:
      WorldsPermissionGrantedNotification,
    [NotificationType.WORLDS_PERMISSION_REVOKED]:
      WorldsPermissionRevokedNotification,
  }

const CURRENT_AVAILABLE_NOTIFICATIONS = Object.keys(NotificationComponentByType)

const replaceWithValues = (
  str: string,
  values: Record<string, string | JSX.Element>
): JSX.Element | string => {
  const parts = str.split(/{|}/)
  const jsxElements = parts.map((part, index) => {
    if (index % 2 === 0) {
      return part
    } else {
      const value = values[part.trim()]
      return value !== undefined ? value : `{${part}}`
    }
  })

  return <>{jsxElements}</>
}

export {
  MAXIMUM_FRACTION_DIGITS,
  formatMana,
  getBGColorByRarity,
  DecentralandNotificationComponentByType,
  NotificationComponentByType,
  CURRENT_AVAILABLE_NOTIFICATIONS,
  replaceWithValues,
}
