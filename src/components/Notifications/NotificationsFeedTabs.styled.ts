import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"
import { NotificationsFeedTabsProps } from "./NotificationsFeedTabs.types"

const NotificationFeedTabsContainer = styled(Box)((props) => {
  const { theme } = props
  return {
    width: "384px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }
})

const NotificationFeedTabsHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 16px",
})

const NotificationFeedTabsTitle = styled(Typography)({
  margin: 0,
  fontSize: "18px",
  fontWeight: 600,
})

const NotificationFeedTabsContent = styled("div")({
  height: "100%",
})

type NotificationFeedTabsListProps = Pick<NotificationsFeedTabsProps, "isModal">

const NotificationFeedTabsListContainer = styled(
  "div"
)<NotificationFeedTabsListProps>(
  {
    display: "flex",
    maxHeight: "auto",
    overflowX: "hidden",
    overflowY: "default",
    overscrollBehaviorY: "default",
    width: "100vw",
    height: "calc(100vh - 250px)",
  },
  (props) =>
    !props.isModal
      ? {
          maxHeight: "290px",
          overflowY: "auto",
          overscrollBehaviorY: "contain",
          width: "auto",
          height: "auto",
        }
      : {}
)

const NotificationFeedTabsListWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
})

const NotificationFeedPrevious = styled(Typography)(() => {
  return {
    fontSize: "16px",
    fontWeight: 600,
    paddingLeft: "16px",
    marginBottom: 0,
    marginTop: "8px",
  }
})

export {
  NotificationFeedTabsContainer,
  NotificationFeedTabsHeader,
  NotificationFeedTabsTitle,
  NotificationFeedTabsContent,
  NotificationFeedTabsListContainer,
  NotificationFeedTabsListWrapper,
  NotificationFeedPrevious,
}
