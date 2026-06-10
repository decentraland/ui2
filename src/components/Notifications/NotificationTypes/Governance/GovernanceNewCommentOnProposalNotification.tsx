import React from 'react'
import { Link } from '@mui/material'
import { governanceNewCommentOnProposalI18n } from './Governance.i18n'
import { NewCommentIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { SpanHighlighted } from '../../NotificationItem/NotificationItem.styled'
import { CommonNotificationProps, GovernanceNewCommentOnProposalNotificationProps } from '../../Notifications.types'

const GovernanceNewCommentOnProposalNotification = React.memo(
  (props: CommonNotificationProps<GovernanceNewCommentOnProposalNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<NewCommentIcon />}
        locale={locale}
        notification={notification}
        title={
          <>
            {governanceNewCommentOnProposalI18n[locale].title} <SpanHighlighted>{notification.metadata.proposalTitle}</SpanHighlighted>
          </>
        }
        description={
          <>
            {governanceNewCommentOnProposalI18n[locale].description.start}{' '}
            <Link href={notification.metadata.link}>{governanceNewCommentOnProposalI18n[locale].description.link_text}</Link>.
          </>
        }
      />
    )
  }
)

export { GovernanceNewCommentOnProposalNotification }
