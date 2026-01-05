import React from "react"
import { Link } from "@mui/material"
import { worldsAccessRestrictedI18n } from "./Worlds.i18n"
import { AccessRestrictedIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import {
  CommonNotificationProps,
  WorldsAccessRestrictedNotificationProps,
} from "../../Notifications.types"

const WorldsAccessRestrictedNotification = React.memo(
  (props: CommonNotificationProps<WorldsAccessRestrictedNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<AccessRestrictedIcon />}
        locale={locale}
        notification={notification}
        title={worldsAccessRestrictedI18n[locale].title}
        description={
          <>
            {worldsAccessRestrictedI18n[locale].description.start}{" "}
            <Link href={notification.metadata.url}>
              {worldsAccessRestrictedI18n[locale].description.link_text}
            </Link>
            .
          </>
        }
      />
    )
  }
)

export { WorldsAccessRestrictedNotification }
