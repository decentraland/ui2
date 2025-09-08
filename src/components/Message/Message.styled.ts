import styled from "@emotion/styled"
import { Box, IconButton, Typography } from "@mui/material"

const MessageContainer = styled(Box)<{ variant: string }>(({
  theme,
  variant,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "error":
        return {
          backgroundColor: theme.palette.error.light,
          borderColor: theme.palette.error.main,
          color: theme.palette.error.main,
        }
      case "warning":
        return {
          backgroundColor: theme.palette.warning.light,
          borderColor: theme.palette.warning.main,
          color: theme.palette.warning.main,
        }
      case "success":
        return {
          backgroundColor: theme.palette.success.light,
          borderColor: theme.palette.success.main,
          color: theme.palette.success.main,
        }
      case "info":
      default:
        return {
          backgroundColor: theme.palette.info.light,
          borderColor: theme.palette.info.main,
          color: theme.palette.info.main,
        }
    }
  }

  return {
    borderRadius: theme.shape.borderRadius,
    border: "1px solid",
    boxShadow: "none",
    fontFamily: theme.typography.fontFamily,
    fontWeight: 400,
    padding: theme.spacing(2),
    position: "relative",
    ...getVariantStyles(),
  }
})

const MessageContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  flex: 1,
}))

const MessageHeader = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.text.primary,
  margin: 0,
}))

const MessageText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: 0,
}))

const DismissButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  padding: theme.spacing(0.5),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}))

export {
  DismissButton,
  MessageContainer,
  MessageContent,
  MessageHeader,
  MessageText,
}
