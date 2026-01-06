import {
  CampaignGasPriceHigherThanExpectedNotificationProps,
  CampaignOutOfFundsNotificationProps,
  CampaignOutOfStockNotificationProps,
  CommonNotificationProps,
  RewardAssignedNotificationProps,
  RewardDelayedNotificationProps,
  RewardInProgressNotificationProps,
} from "../../Notifications.types"

type RewardsNotificationProps =
  | RewardAssignedNotificationProps
  | RewardDelayedNotificationProps
  | RewardInProgressNotificationProps

type CampaignsNotificationProps =
  | CampaignGasPriceHigherThanExpectedNotificationProps
  | CampaignOutOfFundsNotificationProps
  | CampaignOutOfStockNotificationProps

type CommonI18nProps = {
  title: string
  description: { start: string; end: string }
}

type RewardNotificationProps =
  CommonNotificationProps<RewardsNotificationProps> & {
    i18n: Record<string, CommonI18nProps>
  }

type CampaignNotificationProps =
  CommonNotificationProps<CampaignsNotificationProps> & {
    i18n: Record<string, CommonI18nProps>
  }

export type {
  CampaignNotificationProps,
  CampaignsNotificationProps,
  CommonI18nProps,
  RewardNotificationProps,
  RewardsNotificationProps,
}
