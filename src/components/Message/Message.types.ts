import { ReactNode } from "react"

export type MessageVariant = "error" | "warning" | "success" | "info"

export interface MessageProps {
  /**
   * The variant of the message
   */
  variant?: MessageVariant
  /**
   * Whether the message is visible
   */
  visible?: boolean
  /**
   * The main content of the message
   */
  content?: ReactNode
  /**
   * The header text of the message
   */
  header?: ReactNode
  /**
   * Additional CSS class name
   */
  className?: string
  /**
   * Whether the message can be dismissed
   */
  dismissible?: boolean
  /**
   * Callback when the message is dismissed
   */
  onDismiss?: () => void
  /**
   * Additional props to pass to the root element
   */
  [key: string]: any
}
