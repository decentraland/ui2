import styled from "@emotion/styled"
import { Box, Card, CardContent, Typography } from "@mui/material"
import { Address } from "../../components/Address"
import { hexToRgba } from "../../utils/colors"
import { AssetImage } from "../AssetImage"

const CatalogCardContainer = styled(Card)(({ theme }) => ({
  height: theme.spacing(45),
  transition: "transform 0.1s ease-in-out, box-shadow 0.3s ease-in-out",
  borderRadius: theme.spacing(1),
  width: theme.spacing(36),
  maxWidth: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: 0,
  overflow: "hidden",
  "&:hover": {
    padding: theme.spacing(0),
    borderRadius: theme.spacing(1),
    boxShadow: `0px 0px 20px 6px ${hexToRgba(theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.common.black, 0.37)}`,
    "& .ExtraInformationContainer, & .CatalogItemInformationContainer": {
      height: "auto",
      opacity: 1,
      transition: "height 0.3s ease-in-out, opacity 0.6s ease-in-out",
    },
    "& .AssetImageContainer": {
      height: theme.spacing(20),
      transition: "height 0.1s ease-in-out",
    },
  },
}))

const AssetImageContainer = styled(AssetImage)(({ theme }) => ({
  borderRadius: `${theme.spacing(1)} ${theme.spacing(1)} 0 0`,
  height: theme.spacing(26),
  transition: "height 0.3s ease-in-out",
}))

const CardContentContainer = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  flexFlow: "column nowrap",
  alignItems: "flex-start",
  gap: theme.spacing(0.25),
  minHeight: theme.spacing(20),
}))

const AssetHeaderContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
})

const AssetTitle = styled(Typography)({
  fontWeight: 600,
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  maxWidth: "100%",
})

const AssetAddress = styled(Address)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  lineHeight: theme.typography.body2.lineHeight,
  color: theme.palette.text.secondary,
}))

const CatalogItemInformationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  height: "0px",
  opacity: 0,
  overflow: "hidden",
  transition: "height 0.1s ease-in-out, opacity 0.6s ease-in-out",
}))

const CatalogCardPriceContainer = styled(Box)({
  flex: 1,
  display: "flex",
  alignItems: "center",
})

const ExtraInformationContainer = styled(Box)({
  height: "0px",
  opacity: 0,
  overflow: "hidden",
  transition: "height 0.1s ease-in-out, opacity 0.6s ease-in-out",
})

export {
  CatalogCardContainer,
  AssetImageContainer,
  CatalogCardPriceContainer,
  AssetHeaderContainer,
  CardContentContainer,
  AssetAddress,
  AssetTitle,
  ExtraInformationContainer,
  CatalogItemInformationContainer,
}
