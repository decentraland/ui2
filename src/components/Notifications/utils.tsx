import { FunctionComponent } from "react"
import { NotificationType, Rarity } from "@dcl/schemas"
import {
  BidAcceptedNotification,
  BidReceivedNotification,
  CampaignGasPriceHigherThanExpectedNotification,
  CampaignOutOfFundsNotification,
  CampaignOutOfStockNotification,
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
  RewardAssignedNotification,
  RewardDelayedNotification,
  RewardInProgressNotification,
  RoyaltiesEarnedNotification,
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

type DecentralandNotificationComponentByType<T> = {
  [k in NotificationType]: T extends DCLNotificationProps
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      FunctionComponent<CommonNotificationProps<any>> | null
    : never
}

const NotificationComponentByType: DecentralandNotificationComponentByType<DCLNotificationProps> =
  {
    [NotificationType.ROYALTIES_EARNED]: RoyaltiesEarnedNotification,
    [NotificationType.ITEM_SOLD]: ItemSoldNotification,
    [NotificationType.BID_ACCEPTED]: BidAcceptedNotification,
    [NotificationType.BID_RECEIVED]: BidReceivedNotification,
    [NotificationType.GOVERNANCE_ANNOUNCEMENT]:
      GovernanceAnnouncementNotification,
    [NotificationType.GOVERNANCE_COAUTHOR_REQUESTED]:
      GovernanceCoauthorRequestedNotification,
    [NotificationType.GOVERNANCE_AUTHORED_PROPOSAL_FINISHED]:
      GovernanceAuthoredProposalFinishedNotification,
    [NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROPOSAL]:
      GovernanceNewCommentOnProposalNotification,
    [NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROJECT_UPDATE]:
      GovernanceNewCommentOnProjectUpdateNotification,
    [NotificationType.GOVERNANCE_PROPOSAL_ENACTED]:
      GovernanceProposalEnactedNotification,
    [NotificationType.GOVERNANCE_VOTING_ENDED_VOTER]:
      GovernanceVotingEndedVoterNotification,
    [NotificationType.GOVERNANCE_PITCH_PASSED]:
      GovernancePitchPassedNotification,
    [NotificationType.GOVERNANCE_TENDER_PASSED]:
      GovernanceTenderPassedNotification,
    [NotificationType.WORLDS_MISSING_RESOURCES]:
      WorldsMissingResourcesNotification,
    [NotificationType.WORLDS_ACCESS_RESTORED]: WorldsAccessRestoredNotification,
    [NotificationType.WORLDS_ACCESS_RESTRICTED]:
      WorldsAccessRestrictedNotification,
    [NotificationType.LAND_RENTED]: LandRentedNotification,
    [NotificationType.LAND_RENTAL_ENDED]: LandRentalEndedNotification,
    [NotificationType.REWARD_ASSIGNED]: RewardAssignedNotification,
    [NotificationType.REWARD_IN_PROGRESS]: RewardInProgressNotification,
    [NotificationType.REWARD_DELAYED]: RewardDelayedNotification,
    [NotificationType.EVENTS_STARTS_SOON]: EventsStartsSoonNotification,
    [NotificationType.EVENTS_STARTED]: EventsStartedNotification,
    [NotificationType.WORLDS_PERMISSION_GRANTED]:
      WorldsPermissionGrantedNotification,
    [NotificationType.WORLDS_PERMISSION_REVOKED]:
      WorldsPermissionRevokedNotification,
    [NotificationType.BADGE_GRANTED]: null,
    [NotificationType.GOVERNANCE_CLIFF_ENDED]: null,
    [NotificationType.GOVERNANCE_WHALE_VOTE]: null,
    [NotificationType.GOVERNANCE_VOTED_ON_BEHALF]: null,
    [NotificationType.REWARD_CAMPAIGN_OUT_OF_FUNDS]:
      CampaignOutOfFundsNotification,
    [NotificationType.REWARD_CAMPAIGN_GAS_PRICE_HIGHER_THAN_EXPECTED]:
      CampaignGasPriceHigherThanExpectedNotification,
    [NotificationType.REWARD_CAMPAIGN_OUT_OF_STOCK]:
      CampaignOutOfStockNotification,
  }

const CURRENT_AVAILABLE_NOTIFICATIONS = Object.values(NotificationType)

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
