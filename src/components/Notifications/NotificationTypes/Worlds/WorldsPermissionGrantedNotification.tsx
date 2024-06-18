import { Link } from "@mui/material"
import { config } from "../../../../config"
import AccessRestoredIcon from "../../../Icon/Notifications/AccessRestoredIcon"
import PermissionGrantedIcon from "../../../Icon/Notifications/PermissionGrantedIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  WorldsPermissionGrantedNotificationProps,
} from "../../types"
import { replaceWithValues } from "../../utils"

const WORLDS_COLLABORATOR_URL = `${config.get(
  "BUILDER_URL"
)}/worlds?tab=collaborator`

const WORLD_WITH_REALM_URL = `${config.get("EXPLORER_URL")}?realm=`

export const i18N = {
  en: {
    title: "World Permission Granted",
    accessTitle: "World Access",
    access: "You have been given permission to access World {world}",
    deployment: "You have been granted deployer permission to World {world}",
    streaming: "You have been granted streamer permission to World {world}",
  },
  es: {
    title: "Permiso para mundo otorgado",
    accessTitle: "Acceso a Mundo",
    access: "Te han dado permiso para acceder al mundo {world}",
    deployment: "Te han otorgado permiso de deployar al mundo {world}",
    streaming: "Te han otorgado permiso de trasmitir en el mundo {world}",
  },
  zh: {
    title: "获得世界许可",
    accessTitle: "世界访问",
    access: "您已获得访问世界的许可 {world}",
    deployment: "您已被授予部署者的许可 {world}",
    streaming: "您已获得流媒体的许可 {world}",
  },
}

export default function WorldsPermissionGrantedNotification(
  props: CommonNotificationProps<WorldsPermissionGrantedNotificationProps>
) {
  const { notification, locale } = props
  const permission = notification.metadata.permissions[0] // for now only one permission is allowed per notification
  const isAccessNotification = permission === "access"
  const world = notification.metadata.world
  const Icon = isAccessNotification ? AccessRestoredIcon : PermissionGrantedIcon
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
          world: (
            <Link
              href={
                isAccessNotification
                  ? `${WORLD_WITH_REALM_URL}${world}`
                  : WORLDS_COLLABORATOR_URL
              }
              target="_blank"
              rel="noreferrer"
            >
              {world}
            </Link>
          ),
        })}
      </NotificationItemDescription>
    </NotificationItem>
  )
}
