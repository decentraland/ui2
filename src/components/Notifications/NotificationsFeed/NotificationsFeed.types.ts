import React from "react"
import { NotificationActiveTab } from "../Notifications.types"
import type {
  DCLNotificationProps,
  NotificationLocale,
} from "../Notifications.types"

type NotificationsFeedProps = {
  items: DCLNotificationProps[]
  isLoading: boolean
  locale: NotificationLocale
  isOnboarding: boolean
  activeTab: NotificationActiveTab
  isOpen: boolean
  anchorEl: HTMLElement | null
  renderProfile?: (address: string) => JSX.Element | string | null
  onChangeTab: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    newActiveTab: NotificationActiveTab
  ) => void
  onBegin: (e: React.MouseEvent<HTMLButtonElement>) => void
  onClose: (event: React.MouseEvent<HTMLElement> | MouseEvent) => void
}

export { NotificationsFeedProps }
