import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import { NotificationsFeedTabsProps } from "./NotificationsFeedTabs.types"

export const NotificationFeedTabsHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 16px",
})

export const NotificationFeedTabsTitle = styled(Typography)({
  margin: 0,
  fontSize: "18px",
  fontWeight: 600,
})

export const NotificationFeedTabsContent = styled("div")({
  height: "100%",
})

export const NotificationFeedTabsListContainer = styled("div")((
  props: Pick<NotificationsFeedTabsProps, "isModal">
) => {
  let defaultStyles = {
    display: "flex",
    height: "100%",
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
  }

  if (!props.isModal) {
    defaultStyles = {
      ...defaultStyles,
      maxHeight: "290px",
      overflowY: "auto",
      overscrollBehaviorY: "contain",
    }
  }

  return defaultStyles
})

export const NotificationFeedTabsListWrapper = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  }
})

export const NotificationFeedPrevious = styled(Typography)(() => {
  return {
    fontSize: "16px",
    fontWeight: 600,
    paddingLeft: "16px",
    marginBottom: 0,
    marginTop: "8px",
  }
})
