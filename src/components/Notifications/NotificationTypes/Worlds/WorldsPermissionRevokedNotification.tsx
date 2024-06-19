import AccessRestrictedIcon from "../../../Icon/Notifications/AccessRestrictedIcon"
import PermissionRevokedIcon from "../../../Icon/Notifications/PermissionRevokedIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  WorldsPermissionRevokedNotificationProps,
} from "../../types"
import { replaceWithValues } from "../../utils"

export const i18N = {
  en: {
    title: "World Permission Revoked",
    accessTitle: "World Access Revoked",
    access: "You have been revoked the permission to access World {world}",
    deployment:
      "The owner of the World {world} has revoked your permission to deploy in their world",
    streaming:
      "The owner of the World {world} has revoked your permission to stream in their world",
  },
  es: {
    title: "Permiso para mundo revocado",
    accessTitle: "Acceso a Mundo revocado",
    access: "Te han removido el permiso para acceder al mundo {world}",
    deployment:
      "El propietario del mundo {world} ha revocado tu permiso para deployar en su mundo",
    streaming:
      "El propietario del mundo {world} ha revocado tu permiso para transmitir en su mundo",
  },
  zh: {
    title: "世界许可被撤销",
    accessTitle: "世界访问被撤销",
    access: "您已被撤销访问世界{workd}的许可",
    deployment: "世界所有者{world}已撤销您在其世界中部署的许可",
    streaming: "世界的所有者{world}已撤销了您在世界上流媒体的允许",
  },
}

export default function WorldsPermissionRevokedNotification(
  props: CommonNotificationProps<WorldsPermissionRevokedNotificationProps>
) {
  const { notification, locale } = props
  const permission = notification.metadata.permissions[0]
  const isAccessNotification = permission === "access"
  const Icon = isAccessNotification
    ? AccessRestrictedIcon
    : PermissionRevokedIcon

  return (
    <NotificationItem
      image={{ image: <Icon fontSize="inherit" /> }}
      timestamp={notification.timestamp}
      isNew={!notification.read}
      locale={locale}
    >
      <NotificationItemTitle>
        {isAccessNotification ? i18N[locale].accessTitle : i18N[locale].title}
      </NotificationItemTitle>
      <NotificationItemDescription color="inherit" underline="none">
        {replaceWithValues(i18N[locale][permission], {
          world: <strong>{notification.metadata.world}</strong>,
        })}
      </NotificationItemDescription>
    </NotificationItem>
  )
}
