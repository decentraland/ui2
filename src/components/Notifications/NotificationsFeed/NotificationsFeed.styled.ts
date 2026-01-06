import styled from "@emotion/styled"
import { Box, Menu, Typography } from "@mui/material"
import { neutral } from "../../../theme/colors"
import { Modal } from "../../Modal"

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

const EmptyViewContainer = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "16px",
  padding: theme.spacing(5, 10),
  alignItems: "center",
  textAlign: "center",
}))

const EmptyViewTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(18),
  fontWeight: 600,
  marginBottom: 0,
}))

const EmptyViewDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(16),
  color: neutral.gray3,
}))

const OnboardingWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(3.75),
}))

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
        padding: theme.spacing(3, 3, 0),
      },
      "& > *:nth-of-type(2)": {
        padding: 0,
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
  EmptyViewContainer,
  EmptyViewDescription,
  EmptyViewTitle,
  FeedContainer,
  LoadingContainer,
  NotificationFeedContainer,
  NotificationFeedModal,
  NotificationFeedModalContainer,
  OnboardingWrapper,
}
