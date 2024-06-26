import styled from "@emotion/styled"
import { Box, Paper, Typography } from "@mui/material"

const FeedContainer = styled("div")({
  height: "100%",
})

const EmptyViewContainer = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "16px",
  padding: "40px 80px",
  alignItems: "center",
  textAlign: "center",
})

const EmptyViewTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: 0,
  width: "345px",
})

const EmptyViewDescription = styled(Typography)({
  fontSize: "16px",
  color: "#a09ba8",
})

const OnboardingWrapper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "center",
  textAlign: "center",
  padding: "30px",
})

const LoadingContainer = styled("div")({
  height: "290px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const NotificationFeedModalContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
})

const NotificationFeedContainer = styled(Paper)({
  width: "384px",
  pointerEvents: "visible",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "40px",
  zIndex: 100,
  borderRadius: "8px",
  transition: "opacity 0.3s ease",
  "&::before": {
    position: "absolute",
    content: "''",
    width: "28px",
    height: "28px",
    transform: "rotate(-45deg)",
    top: "-2px",
    left: "calc(50% - 14px)",
  },
})

export {
  FeedContainer,
  EmptyViewContainer,
  EmptyViewTitle,
  EmptyViewDescription,
  OnboardingWrapper,
  LoadingContainer,
  NotificationFeedModalContainer,
  NotificationFeedContainer,
}
