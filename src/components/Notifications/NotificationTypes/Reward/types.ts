import {
  CampaignGasPriceHigherThanExpectedNotificationProps,
  CampaignOutOfFundsNotificationProps,
  CampaignOutOfStockNotificationProps,
  CommonNotificationProps,
  NotificationLocale,
  RewardAssignedNotificationProps,
  RewardDelayedNotificationProps,
  RewardInProgressNotificationProps,
} from "components/Notifications/types"

type RewardsNotificationProps =
  | RewardAssignedNotificationProps
  | RewardInProgressNotificationProps
  | RewardDelayedNotificationProps

type CampaignsNotificationProps =
  | CampaignOutOfFundsNotificationProps
  | CampaignOutOfStockNotificationProps
  | CampaignGasPriceHigherThanExpectedNotificationProps

type i18nProps = {
  title: string
  description: {
    start: string
    end: string
  }
}

type RewardsCommonNotificationProps =
  CommonNotificationProps<RewardsNotificationProps> & {
    i18n: Record<NotificationLocale, i18nProps>
  }

type CampaignsCommonNotificationProps =
  CommonNotificationProps<CampaignsNotificationProps> & {
    i18n: Record<NotificationLocale, i18nProps>
  }

export { RewardsCommonNotificationProps, CampaignsCommonNotificationProps }
