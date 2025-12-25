import { styled } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"

const NumberBadgeWrapper = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: 16,
  background: "linear-gradient(180deg, #FF2D55 0%, #FFBC5B 100%)",
  padding: 3,
  [theme.breakpoints.down("sm")]: {
    width: 38,
    height: 38,
    borderRadius: 12,
  },
}))

const NumberBadgeInner = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 13,
  backgroundColor: theme.palette.background.default,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 20,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    borderRadius: 9,
    fontSize: 16,
  },
}))

const TextBadgeWrapper = styled(Box)(() => ({
  background: "linear-gradient(135deg, #FF2D55 0%, #C640CD 100%)",
  borderRadius: 12,
  padding: "8px 12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const TextBadgeLabel = styled(Typography)(() => ({
  color: "#fff",
  fontWeight: 700,
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
}))

export {
  NumberBadgeWrapper,
  NumberBadgeInner,
  TextBadgeWrapper,
  TextBadgeLabel,
}
