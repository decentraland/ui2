import React from "react"
import { Link } from "@mui/material"
import { worldsMissingResourcesI18n } from "./Worlds.i18n"
import { MissingResourcesIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import {
  CommonNotificationProps,
  WorldsMissingResourcesNotificationProps,
} from "../../Notifications.types"

const WorldsMissingResourcesNotification = React.memo(
  (props: CommonNotificationProps<WorldsMissingResourcesNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<MissingResourcesIcon />}
        locale={locale}
        notification={notification}
        title={worldsMissingResourcesI18n[locale].title}
        description={
          <>
            {worldsMissingResourcesI18n[locale].description.start}{" "}
            <Link href={notification.metadata.url}>
              {worldsMissingResourcesI18n[locale].description.link_text}
            </Link>{" "}
            {worldsMissingResourcesI18n[locale].description.end}
          </>
        }
      />
    )
  }
)

export { WorldsMissingResourcesNotification }
