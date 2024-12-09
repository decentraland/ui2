import styled from "@emotion/styled"
import { Box, Typography, useTheme } from "@mui/material"
import { NotificationsFeedTabsProps } from "./NotificationsFeedTabs.types"

const NotificationFeedTabsContainer = styled(Box)(() => {
  const theme = useTheme()

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

const NotificationFeedTabsListContainer = styled("div")((
  props: Pick<NotificationsFeedTabsProps, "isModal">
) => {
  let defaultStyles = {
    display: "flex",
    maxHeight: "auto",
    overflowX: "hidden" as const,
    overflowY: "default" as
      | "hidden"
      | "scroll"
      | "visible"
      | "auto"
      | "inherit"
      | "initial"
      | "unset",
    overscrollBehaviorY: "default" as
      | "auto"
      | "contain"
      | "none"
      | "initial"
      | "unset",
    width: "90vw",
    height: "70vh",
  }

  if (!props.isModal) {
    defaultStyles = {
      ...defaultStyles,
      maxHeight: "290px",
      overflowY: "auto",
      overscrollBehaviorY: "contain",
    }
  }

  return { ...defaultStyles }
})

const NotificationFeedTabsListWrapper = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column" as const,
    width: "100%",
  }
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
