import { memo } from 'react'
import { EmptyStateProps } from './EmptyState.types'
import { EmptyStateBody, EmptyStateBox, EmptyStateButton, EmptyStateIcon, EmptyStateSubtitle, EmptyStateTitle } from './EmptyState.styled'

/**
 * Presentational empty-state / not-found panel: an optional bordered icon, a
 * title, an optional subtitle and an optional primary CTA. Routing, analytics
 * and i18n stay at the call site — the CTA is either an external `href` or an
 * `onClick`, and `buttonProps` forwards escape hatches like `component={Link}`.
 */
const EmptyState = memo(function EmptyState({ icon, title, subtitle, action, buttonProps, className }: EmptyStateProps) {
  return (
    <EmptyStateBox className={className}>
      {icon ? <EmptyStateIcon>{icon}</EmptyStateIcon> : null}
      <EmptyStateBody>
        <EmptyStateTitle>{title}</EmptyStateTitle>
        {subtitle ? <EmptyStateSubtitle>{subtitle}</EmptyStateSubtitle> : null}
        {action ? (
          <EmptyStateButton
            variant="contained"
            color="primary"
            startIcon={action.startIcon}
            endIcon={action.endIcon}
            {...(action.href ? { href: action.href, target: '_blank', rel: 'noopener noreferrer' } : { onClick: action.onClick })}
            {...buttonProps}
          >
            {action.label}
          </EmptyStateButton>
        ) : null}
      </EmptyStateBody>
    </EmptyStateBox>
  )
})

export { EmptyState }
