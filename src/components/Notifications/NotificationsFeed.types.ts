import React from "react"
import {
  DCLNotificationProps,
  NotificationActiveTab,
  NotificationLocale,
} from "./types"

export interface NotificationsFeedProps {
  items: DCLNotificationProps[]
  isLoading: boolean
  locale: NotificationLocale
  isOnboarding: boolean
  activeTab: NotificationActiveTab
  isOpen: boolean
  renderProfile?: (address: string) => JSX.Element | string | null
  onChangeTab: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    newActiveTab: NotificationActiveTab
  ) => void
  onBegin: (e: React.MouseEvent<HTMLButtonElement>) => void
  onClose: (event: React.MouseEvent<HTMLElement> | MouseEvent) => void
}
