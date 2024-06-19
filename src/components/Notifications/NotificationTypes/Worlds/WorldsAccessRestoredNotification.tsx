import AccessRestoredIcon from "../../../Icon/Notifications/AccessRestoredIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  WorldsAccessRestoredNotificationProps,
} from "../../types"

const i18N = {
  en: {
    description: "Access to your Worlds has been restored.",
    title: "Worlds available",
  },
  es: {
    description: "El acceso a tus Mundos ha sido restaurado.",
    title: "Mundos disponible",
  },
  zh: {
    description: '您的 "世界 "访问权限已恢复.',
    title: "可用的世界",
  },
}

export default function WorldsAccessRestoredNotification(
  props: CommonNotificationProps<WorldsAccessRestoredNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{ image: <AccessRestoredIcon fontSize="inherit" /> }}
      timestamp={notification.timestamp}
      isNew={!notification.read}
      locale={locale}
    >
      <NotificationItemTitle>{i18N[locale].title}</NotificationItemTitle>
      <NotificationItemDescription color="inherit" underline="none">
        {i18N[locale].description}
      </NotificationItemDescription>
    </NotificationItem>
  )
}
