import React from "react"
import {
  DCLNotificationProps,
  NotificationActiveTab,
  NotificationLocale,
} from "./types"

export type NotificationsFeedTabsProps = {
  unreadNotifications: DCLNotificationProps[]
  previousNotifications: DCLNotificationProps[]
  readNotifications: DCLNotificationProps[]
  locale: NotificationLocale
  activeTab: NotificationActiveTab
  isModal?: boolean
  renderProfile?: (address: string) => JSX.Element | string | null
  onChangeTab: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    newActiveTab: NotificationActiveTab
  ) => void
}
