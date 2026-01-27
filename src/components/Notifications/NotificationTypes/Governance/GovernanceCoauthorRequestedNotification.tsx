import React from 'react'
import { Link } from '@mui/material'
import { governanceCoauthorRequestedI18n } from './Governance.i18n'
import { CoauthorIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { SpanHighlighted } from '../../NotificationItem/NotificationItem.styled'
import { CommonNotificationProps, GovernanceCoauthorRequestedNotificationProps } from '../../Notifications.types'

const GovernanceCoauthorRequestedNotification = React.memo(
  (props: CommonNotificationProps<GovernanceCoauthorRequestedNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<CoauthorIcon />}
        locale={locale}
        notification={notification}
        title={
          <>
            {governanceCoauthorRequestedI18n[locale].title} <SpanHighlighted>{notification.metadata.proposalTitle}</SpanHighlighted>
          </>
        }
        description={
          <>
            {governanceCoauthorRequestedI18n[locale].description.start}{' '}
            <Link href={notification.metadata.link}>{governanceCoauthorRequestedI18n[locale].description.link_text}</Link>
          </>
        }
      />
    )
  }
)

export { GovernanceCoauthorRequestedNotification }
