import { forwardRef } from "react"
import { Close } from "@mui/icons-material"
import { MessageProps } from "./Message.types"
import {
  DismissButton,
  MessageContainer,
  MessageContent,
  MessageHeader,
  MessageText,
} from "./Message.styled"

const Message = forwardRef<HTMLDivElement, MessageProps>(
  (
    {
      variant = "info",
      visible = true,
      content,
      header,
      className,
      dismissible = false,
      onDismiss,
      ...props
    },
    ref
  ) => {
    if (!visible) {
      return null
    }

    return (
      <MessageContainer
        ref={ref}
        variant={variant}
        className={className}
        {...props}
      >
        {dismissible && (
          <DismissButton aria-label="dismiss" onClick={onDismiss} size="small">
            <Close />
          </DismissButton>
        )}
        <MessageContent>
          {header && <MessageHeader>{header}</MessageHeader>}
          {content && <MessageText>{content}</MessageText>}
        </MessageContent>
      </MessageContainer>
    )
  }
)

Message.displayName = "Message"

export { Message }
