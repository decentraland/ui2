import styled from "@emotion/styled"
import { Box, Menu, Typography } from "@mui/material"
import { Modal } from "../Modal"

const FeedContainer = styled("div")(({ theme }) => ({
  width: "384px",
  [theme.breakpoints.down("sm")]: {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
}))

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

const NotificationFeedModal = styled(Modal)(({ theme }) => {
  return {
    alignItems: "flex-end",
    "& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded": {
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      [theme.breakpoints.down("xs")]: {
        minHeight: "calc(100vh - 70px)",
        height: "calc(100vh - 70px)",
      },
      "& > *:nth-of-type(1)": {
        padding: "24px 24px 0",
      },
      "& > *:nth-of-type(2)": {
        padding: "0px",
      },
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
