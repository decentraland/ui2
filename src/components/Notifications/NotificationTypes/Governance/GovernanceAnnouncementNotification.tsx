import GovernanceIcon from "../../../Icon/Notifications/GovernanceIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceAnnouncementNotificationProps,
} from "../../types"

export default function GovernanceAnnouncementNotification(
  props: CommonNotificationProps<GovernanceAnnouncementNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{ image: <GovernanceIcon fontSize="inherit" /> }}
      timestamp={notification.timestamp}
      isNew={!notification.read}
      locale={locale}
    >
      <NotificationItemTitle>
        {notification.metadata.title}
      </NotificationItemTitle>
      <NotificationItemDescription
        href={notification.metadata.link}
        color="inherit"
        underline="none"
      >
        {notification.metadata.description}
      </NotificationItemDescription>
    </NotificationItem>
  )
}
