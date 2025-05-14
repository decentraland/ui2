import styled from "@emotion/styled"
import { Box, Button, Typography } from "@mui/material"

const ManaBalancesWrapper = styled("div")((props) => {
  const { theme } = props
  return {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    alignItems: "flex-end",
    fontSize: theme!.typography.subtitle2.fontSize,
    "& svg": {
      fontSize: theme!.typography.subtitle2.fontSize,
    },
    "& > div": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
    },
  }
})

const GetCreditsButton = styled(Button)((props) => {
  const { theme } = props
  return {
    "&.MuiButton-root.MuiButton-textPrimary": {
      fontSize: theme!.typography.caption.fontSize,
      padding: 0,
      marginRight: "4px",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  }
})

const ManaBalanceNumber = styled(Typography)({
  lineHeight: "inherit",
})

const CreditsBalanceContainer = styled(Box)((props) => {
  const { theme } = props
  return {
    color: "#A0ABFF",
    fontWeight: 600,
    alignSelf: "flex-end",
    gap: "8px",
    "& svg": {
      marginTop: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      alignSelf: "flex-start",
    },
  }
})

const CreditsBalanceValueContainer = styled(Box)({
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  gap: "2px",
  "& svg": {
    width: "16px",
    height: "16px",
  },
})

const CreditsBalanceTooltipContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  fontFamily: "Inter, Helvetica, Arial, sans-serif",
})

const ExperingSoon = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.caption.fontSize,
  fontWeight: 600,
  lineHeight: "24px",
  textTransform: "uppercase",
  fontFamily: theme.typography.fontFamily,
}))

export {
  CreditsBalanceContainer,
  ManaBalancesWrapper,
  ManaBalanceNumber,
  GetCreditsButton,
  CreditsBalanceTooltipContainer,
  CreditsBalanceValueContainer,
  ExperingSoon,
}
