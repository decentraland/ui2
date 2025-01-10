import styled from "@emotion/styled"
import { Box, Button as MuiButton, Typography } from "@mui/material"
import type { Property } from "csstype"

const convertAlignmentToFlex = (alignment: Property.TextAlign) => {
  switch (alignment) {
    case "left":
      return "flex-start"
    case "center":
      return "center"
    case "right":
      return "flex-end"
    default:
      return "flex-start"
  }
}

const LoadingContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
})

const BannerContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "mobileBackground" && prop !== "fullSizeBackground",
})<{
  mobileBackground: string
  fullSizeBackground: string
}>((props) => {
  const { theme, mobileBackground, fullSizeBackground } = props

  return {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    padding: "2rem",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundImage: `url(${fullSizeBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${mobileBackground})`,
      flexDirection: "column-reverse",
    },
  }
})

const ContentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  marginRight: "20px",
})

const Content = styled(Box)((props) => {
  const { theme } = props

  return {
    display: "flex",
    flexDirection: "column",
    gap: "0.1rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  }
})

const Logo = styled("img")((props) => {
  const { theme } = props

  return {
    flexShrink: 0,
    maxWidth: "400px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      marginBottom: "1rem",
    },
  }
})

const Title = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "mobileTitleAlignment" && prop !== "desktopTitleAlignment",
})<{
  mobileTitleAlignment?: Property.TextAlign
  desktopTitleAlignment?: Property.TextAlign
}>((props) => {
  const { theme, mobileTitleAlignment, desktopTitleAlignment } = props

  return {
    margin: 0,
    color: "#fff",
    textAlign: desktopTitleAlignment || "left",
    fontSize: "28px",
    textTransform: "uppercase",
    fontWeight: 800,
    [theme.breakpoints.down("sm")]: {
      textAlign: mobileTitleAlignment || "left",
      fontSize: "24px",
    },
  }
})

const Text = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "mobileTextAlignment" && prop !== "desktopTextAlignment",
})<{
  mobileTextAlignment?: Property.TextAlign
  desktopTextAlignment?: Property.TextAlign
}>((props) => {
  const { theme, mobileTextAlignment, desktopTextAlignment } = props

  return {
    color: "#fff",
    textAlign: desktopTextAlignment || "left",
    fontSize: "19px",
    "& p": {
      margin: 0,
      padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: mobileTextAlignment || "left",
      fontSize: "16px",
    },
  }
})

const ButtonContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "mobileAlignment" && prop !== "desktopAlignment",
})<{
  mobileAlignment?: Property.TextAlign
  desktopAlignment?: Property.TextAlign
}>((props) => {
  const { theme, mobileAlignment, desktopAlignment } = props

  return {
    display: "flex",
    marginTop: "1rem",
    alignItems: convertAlignmentToFlex(desktopAlignment || "left"),
    [theme.breakpoints.down("sm")]: {
      alignItems: convertAlignmentToFlex(mobileAlignment || "left"),
    },
  }
})

const Button = styled(MuiButton)({
  textTransform: "uppercase",
  minWidth: "300px",
})

export {
  LoadingContainer,
  BannerContainer,
  Content,
  ContentWrapper,
  Logo,
  Title,
  Text,
  ButtonContainer,
  Button,
}
