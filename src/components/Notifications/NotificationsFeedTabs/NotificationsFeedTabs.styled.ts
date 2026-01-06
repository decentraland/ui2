import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"
import { NotificationsFeedTabsProps } from "./NotificationsFeedTabs.types"

const NotificationFeedTabsContainer = styled(Box)(({ theme }) => ({
  width: "384px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}))

const NotificationFeedTabsHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(1, 2),
}))

const NotificationFeedTabsTitle = styled(Typography)(({ theme }) => ({
  margin: 0,
  fontSize: theme.typography.pxToRem(18),
  fontWeight: 600,
}))

const NotificationFeedTabsContent = styled("div")({
  height: "100%",
})

type NotificationFeedTabsListProps = Pick<NotificationsFeedTabsProps, "isModal">

const NotificationFeedTabsListContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "isModal",
})<NotificationFeedTabsListProps>(({ isModal }) => ({
  display: "flex",
  maxHeight: "auto",
  overflowX: "hidden",
  overflowY: "visible",
  overscrollBehaviorY: "auto",
  width: "100vw",
  height: "calc(100vh - 250px)",
  ...(isModal
    ? {}
    : {
        maxHeight: "290px",
        overflowY: "auto",
        overscrollBehaviorY: "contain",
        width: "auto",
        height: "auto",
      }),
}))

const NotificationFeedTabsListWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
})

const NotificationFeedPrevious = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(16),
  fontWeight: 600,
  paddingLeft: theme.spacing(2),
  marginBottom: 0,
  marginTop: theme.spacing(1),
}))

export {
  NotificationFeedPrevious,
  NotificationFeedTabsContainer,
  NotificationFeedTabsContent,
  NotificationFeedTabsHeader,
  NotificationFeedTabsListContainer,
  NotificationFeedTabsListWrapper,
  NotificationFeedTabsTitle,
}
