import React from 'react'
import { Link } from '@mui/material'
import { governanceAuthoredProposalFinishedI18n } from './Governance.i18n'
import { ProposalFinishedIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { SpanHighlighted } from '../../NotificationItem/NotificationItem.styled'
import { CommonNotificationProps, GovernanceAuthoredProposalFinishedNotificationProps } from '../../Notifications.types'

const GovernanceAuthoredProposalFinishedNotification = React.memo(
  (props: CommonNotificationProps<GovernanceAuthoredProposalFinishedNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<ProposalFinishedIcon />}
        locale={locale}
        notification={notification}
        title={
          <>
            {governanceAuthoredProposalFinishedI18n[locale].title} <SpanHighlighted>{notification.metadata.proposalTitle}</SpanHighlighted>
          </>
        }
        description={
          <>
            {governanceAuthoredProposalFinishedI18n[locale].description.start}{' '}
            <Link href={notification.metadata.link}>{governanceAuthoredProposalFinishedI18n[locale].description.link_text}</Link>
          </>
        }
      />
    )
  }
)

export { GovernanceAuthoredProposalFinishedNotification }
