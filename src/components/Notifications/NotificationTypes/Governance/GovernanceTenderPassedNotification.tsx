import React from 'react'
import { Link } from '@mui/material'
import { governanceTenderPassedI18n } from './Governance.i18n'
import { TenderIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { SpanHighlighted } from '../../NotificationItem/NotificationItem.styled'
import { CommonNotificationProps, GovernanceTenderPassedNotificationProps } from '../../Notifications.types'

const GovernanceTenderPassedNotification = React.memo((props: CommonNotificationProps<GovernanceTenderPassedNotificationProps>) => {
  const { notification, locale } = props
  return (
    <NotificationItemText
      image={<TenderIcon />}
      locale={locale}
      notification={notification}
      title={
        <>
          {governanceTenderPassedI18n[locale].title.start} <SpanHighlighted>{notification.metadata.proposalTitle}</SpanHighlighted>{' '}
          {governanceTenderPassedI18n[locale].title.end}
        </>
      }
      description={
        <>
          {governanceTenderPassedI18n[locale].description.start}{' '}
          <Link href={notification.metadata.link}>{governanceTenderPassedI18n[locale].description.link_text}</Link>
        </>
      }
    />
  )
})

export { GovernanceTenderPassedNotification }
