import { styled } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"

const NumberBadgeWrapper = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: theme.spacing(2),
  background: "linear-gradient(180deg, #FF2D55 0%, #FFBC5B 100%)",
  padding: 3,
  [theme.breakpoints.down("sm")]: {
    width: 38,
    height: 38,
    borderRadius: theme.spacing(1.5),
  },
}))

const NumberBadgeInner = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: theme.spacing(1.5),
  backgroundColor: theme.palette.background.default,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    borderRadius: theme.spacing(1),
    fontSize: theme.typography.body2.fontSize,
  },
}))

const TextBadgeWrapper = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #FF2D55 0%, #C640CD 100%)",
  borderRadius: 12,
  padding: theme.spacing(1, 1.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const TextBadgeLabel = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.caption.fontSize,
  textTransform: "uppercase",
  letterSpacing: theme.typography.overline.letterSpacing,
}))

export {
  NumberBadgeWrapper,
  NumberBadgeInner,
  TextBadgeWrapper,
  TextBadgeLabel,
}
