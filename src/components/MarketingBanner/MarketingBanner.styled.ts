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
}>(({ mobileBackground, fullSizeBackground }) => ({
  width: "100%",
  overflow: "hidden",
  display: "flex",
  padding: "2rem",
  flexDirection: "column-reverse",
  justifyContent: "space-between",
  backgroundImage: `url(${mobileBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  alignItems: "center",
  "@media (min-width: 768px)": {
    flexDirection: "row",
    backgroundImage: `url(${fullSizeBackground})`,
  },
}))

const ContentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  marginRight: "20px",
})

const Content = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.1rem",
  "@media (max-width: 767px)": {
    padding: "1rem",
  },
})

const Logo = styled("img")({
  flexShrink: 0,
  maxWidth: "400px",
  "@media (max-width: 767px)": {
    maxWidth: "300px",
    marginBottom: "1rem",
  },
})

const Title = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "mobileTitleAlignment" && prop !== "desktopTitleAlignment",
})<{
  mobileTitleAlignment?: Property.TextAlign
  desktopTitleAlignment?: Property.TextAlign
}>(({ mobileTitleAlignment, desktopTitleAlignment }) => ({
  margin: 0,
  color: "#fff",
  textAlign: desktopTitleAlignment || "left",
  fontSize: "28px",
  textTransform: "uppercase",
  fontWeight: 800,
  "@media (max-width: 767px)": {
    textAlign: mobileTitleAlignment || "left",
    fontSize: "24px",
  },
}))

const Text = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "mobileTextAlignment" && prop !== "desktopTextAlignment",
})<{
  mobileTextAlignment?: Property.TextAlign
  desktopTextAlignment?: Property.TextAlign
}>(({ mobileTextAlignment, desktopTextAlignment }) => ({
  color: "#fff",
  textAlign: desktopTextAlignment || "left",
  fontSize: "19px",
  "& p": {
    margin: 0,
    padding: 0,
  },
  "@media (max-width: 767px)": {
    textAlign: mobileTextAlignment || "left",
    fontSize: "16px",
  },
}))

const ButtonContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "mobileAlignment" && prop !== "desktopAlignment",
})<{
  mobileAlignment?: Property.TextAlign
  desktopAlignment?: Property.TextAlign
}>(({ mobileAlignment, desktopAlignment }) => ({
  display: "flex",
  marginTop: "1rem",
  alignItems: convertAlignmentToFlex(desktopAlignment || "left"),
  "@media (max-width: 767px)": {
    alignItems: convertAlignmentToFlex(mobileAlignment || "left"),
  },
}))

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
