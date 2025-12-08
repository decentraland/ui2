import { Box, Link, styled } from "@mui/material"

const LocationRowContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  "& path:last-child": {
    fill: theme.palette.text.primary,
  },
}))

const LocationLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  fontWeight: theme.typography.fontWeightBold,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
  },
}))

export { LocationRowContainer, LocationLink }
