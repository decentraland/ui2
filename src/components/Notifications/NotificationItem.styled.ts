import styled from "@emotion/styled"
import { Link, Typography, useTheme } from "@mui/material"

export const NotificationItemContainer = styled("div")({
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

export const NotificationItemImageContainer = styled("div")({
  marginLeft: "16px",
  fontSize: "48px",
})

export const NotificationItemContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
})

export const NotificationItemTimestamp = styled(Typography)({
  fontWeight: 600,
  fontSize: "12px",
})

export const NotificationItemTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: "14px",
  marginBottom: 0,
})

export const NotificationItemDescription = styled(Link)({
  display: "inline",
  color: "#a09ba8",
  margin: "4px 0",
  gap: "5px",
  flexWrap: "wrap",
  alignItems: "center",
  fontSize: "14px",
})

export const NotificationItemCountdown = styled("div")({
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

export const SpanHighlighted = styled("span")(() => {
  const theme = useTheme()
  return {
    color: theme.palette.primary.main,
  }
})
