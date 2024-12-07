import styled from "@emotion/styled"
import { Box, Menu, Typography, useTheme } from "@mui/material"
import { Modal } from "../Modal"

const FeedContainer = styled("div")(() => {
  const theme = useTheme()
  return {
    width: "384px",
    [theme.breakpoints.down("sm")]: {
      height: "90vh",
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
  }
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
})

const EmptyViewDescription = styled(Typography)({
  fontSize: "16px",
  color: "#a09ba8",
})

const OnboardingWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "center",
  textAlign: "center",
  padding: "30px",
})

const LoadingContainer = styled("div")({
  height: "290px",
  width: "384px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const NotificationFeedModal = styled(Modal)(() => {
  return {
    alignItems: "flex-end",
    "& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded": {
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
    },
  }
})

const NotificationFeedModalContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
})

const NotificationFeedContainer = styled(Menu)({
  width: "484px",
  pointerEvents: "visible",
  "& .MuiPaper-root": {
    borderRadius: "8px",
  },
})

export {
  FeedContainer,
  EmptyViewContainer,
  EmptyViewTitle,
  EmptyViewDescription,
  OnboardingWrapper,
  LoadingContainer,
  NotificationFeedModal,
  NotificationFeedModalContainer,
  NotificationFeedContainer,
}
