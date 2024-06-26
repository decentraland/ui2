import styled from "@emotion/styled"
import { Link, Typography, useTheme } from "@mui/material"

const NotificationItemContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "8px 16px",
  justifyContent: "space-between",
  gap: "16px",
  "&:last-of-type": {
    padding: "8px 16px 16px",
  },
})

const NotificationItemImageContainer = styled("div")({
  marginLeft: "16px",
  fontSize: "48px",
})

const NotificationItemContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
})

const NotificationItemTimestamp = styled(Typography)({
  fontWeight: 600,
  fontSize: "12px",
})

const NotificationItemTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: "14px",
  marginBottom: 0,
})

const NotificationItemDescription = styled(Link)({
  display: "inline",
  color: "#a09ba8",
  margin: "4px 0",
  gap: "5px",
  flexWrap: "wrap",
  alignItems: "center",
  fontSize: "14px",
})

const NotificationItemCountdown = styled("div")({
  padding: "0 10px",
  backgroundColor: "#37333d",
  width: "fit-content",
  color: "#fff",
  borderRadius: "20px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "-2px",
  transform: "translateY(2px)",
  "& svg": {
    marginRight: "5px",
  },
})

const SpanHighlighted = styled("span")(() => {
  const theme = useTheme()
  return {
    color: theme.palette.primary.main,
  }
})

export {
  NotificationItemContainer,
  NotificationItemImageContainer,
  NotificationItemContent,
  NotificationItemTimestamp,
  NotificationItemTitle,
  NotificationItemDescription,
  NotificationItemCountdown,
  SpanHighlighted,
}
