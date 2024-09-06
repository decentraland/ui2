import React from "react"
import { NotificationActiveTab } from "./types"
import type { DCLNotificationProps, NotificationLocale } from "./types"

type NotificationsFeedTabsProps = {
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

export { NotificationsFeedTabsProps }
