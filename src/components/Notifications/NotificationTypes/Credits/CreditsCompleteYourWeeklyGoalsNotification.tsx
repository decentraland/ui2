import React from 'react'
import { creditsCompleteYourWeeklyGoalsI18n } from './Credits.i18n'
import { CreditsCompleteYourGoalsReminderIcon } from '../../../Icon/Notifications/CreditsCompleteYourGoalsReminderIcon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps } from '../../Notifications.types'
import { CreditsCompleteYourWeeklyGoalsNotificationProps } from './Credits.types'

const CreditsCompleteYourWeeklyGoalsNotification = React.memo(
  (props: CommonNotificationProps<CreditsCompleteYourWeeklyGoalsNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<CreditsCompleteYourGoalsReminderIcon width={48} height={48} />}
        locale={locale}
        notification={notification}
        title={creditsCompleteYourWeeklyGoalsI18n[locale].title}
        description={creditsCompleteYourWeeklyGoalsI18n[locale].description}
      />
    )
  }
)

export { CreditsCompleteYourWeeklyGoalsNotification }
