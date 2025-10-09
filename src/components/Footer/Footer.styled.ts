import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(4, 0),
  marginTop: "auto",
}))

const FooterContainer = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  margin: "0 auto",
  padding: theme.spacing(0, 2),
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  minHeight: "60px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(1),
  },
}))

const FooterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(1),
  },
}))

const LanguageSelector = styled(Box)({
  display: "flex",
  alignItems: "center",
})

const LegalLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    gap: theme.spacing(2),
  },
}))

const FooterLink = styled("a")(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  fontSize: theme.typography.body2.fontSize,
  fontFamily: theme.typography.fontFamily,
  transition: "color 0.2s ease",

  "&:hover": {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },
}))

const SocialLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
  },
}))

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  whiteSpace: "nowrap",
  marginLeft: "24px",

  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}))

export {
  StyledFooter,
  FooterContainer,
  FooterContent,
  LanguageSelector,
  LegalLinks,
  FooterLink,
  SocialLinks,
  CopyrightText,
}
