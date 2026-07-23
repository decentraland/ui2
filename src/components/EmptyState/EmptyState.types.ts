import { MouseEvent, ReactNode } from 'react'
import { ButtonProps } from '../Button'

interface EmptyStateActionBase {
  /** CTA label. */
  label: string
  startIcon?: ReactNode
  endIcon?: ReactNode
}

/**
 * The primary CTA is either an external link (`href`, opened in a new tab) or an
 * in-app handler (`onClick`) — never both. The discriminated union enforces that
 * at compile time so the consumer wires routing/analytics on its own side.
 */
type EmptyStateAction = EmptyStateActionBase &
  ({ href: string; onClick?: never } | { href?: never; onClick: (event: MouseEvent<HTMLButtonElement>) => void })

interface EmptyStateProps {
  /** Optional glyph rendered inside the bordered icon box. Omit for a text-only empty state. */
  icon?: ReactNode
  /** Primary heading. */
  title: string
  /** Optional supporting copy under the title. */
  subtitle?: ReactNode
  /** Optional primary CTA. Rendered only when provided. */
  action?: EmptyStateAction
  /** Escape hatch forwarded to the CTA button (e.g. `component={Link}` for client-side routing). */
  buttonProps?: Partial<ButtonProps>
  /** Forwarded to the root element (e.g. layout overrides at the call site). */
  className?: string
}

export type { EmptyStateAction, EmptyStateProps }
