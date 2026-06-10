import { ModalProps } from '@mui/material'
import { NotificationActiveTab } from '../Notifications.types'
import type { DCLNotificationProps, NotificationLocale } from '../Notifications.types'

type NotificationsProps = {
  isOpen: boolean
  items: DCLNotificationProps[]
  isLoading: boolean
  locale: NotificationLocale
  isOnboarding: boolean
  activeTab: NotificationActiveTab
  renderProfile?: (address: string) => JSX.Element | string | null
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onChangeTab: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, newActiveTab: NotificationActiveTab) => void
  onBegin: (e: React.MouseEvent<HTMLButtonElement>) => void
  onClose: (event: React.MouseEvent<HTMLElement> | MouseEvent, data?: ModalProps) => void
}

export type { NotificationsProps }
