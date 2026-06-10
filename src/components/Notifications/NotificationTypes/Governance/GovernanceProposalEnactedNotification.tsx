import React from 'react'
import { Link } from '@mui/material'
import { governanceProposalEnactedI18n } from './Governance.i18n'
import { ProjectEnactedIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps, GovernanceProposalEnactedNotificationProps } from '../../Notifications.types'

const GovernanceProposalEnactedNotification = React.memo((props: CommonNotificationProps<GovernanceProposalEnactedNotificationProps>) => {
  const { notification, locale } = props
  return (
    <NotificationItemText
      image={<ProjectEnactedIcon />}
      locale={locale}
      notification={notification}
      title={governanceProposalEnactedI18n[locale].title}
      description={
        <>
          {governanceProposalEnactedI18n[locale].description.start}{' '}
          <Link href={notification.metadata.link}>{notification.metadata.link}</Link>{' '}
          {governanceProposalEnactedI18n[locale].description.end}
        </>
      }
    />
  )
})

export { GovernanceProposalEnactedNotification }
