import React from 'react'
import { Link } from '@mui/material'
import { governancePitchPassedI18n } from './Governance.i18n'
import { PitchIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { SpanHighlighted } from '../../NotificationItem/NotificationItem.styled'
import { CommonNotificationProps, GovernancePitchPassedNotificationProps } from '../../Notifications.types'

const GovernancePitchPassedNotification = React.memo((props: CommonNotificationProps<GovernancePitchPassedNotificationProps>) => {
  const { notification, locale } = props
  return (
    <NotificationItemText
      image={<PitchIcon />}
      locale={locale}
      notification={notification}
      title={
        <>
          {governancePitchPassedI18n[locale].title.start} <SpanHighlighted>{notification.metadata.proposalTitle}</SpanHighlighted>{' '}
          {governancePitchPassedI18n[locale].title.end}
        </>
      }
      description={
        <>
          {governancePitchPassedI18n[locale].description.start}{' '}
          <Link href={notification.metadata.link}>{governancePitchPassedI18n[locale].description.link_text}</Link>
        </>
      }
    />
  )
})

export { GovernancePitchPassedNotification }
