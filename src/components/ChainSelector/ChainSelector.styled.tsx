import styled from "@emotion/styled"
import {
  Box,
  Button,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material"
import { neutral, rarity, textOnNeutral } from "../../theme/colors"
import { Modal } from "../Modal/Modal"

const CommonButtonStyle = styled(Button)(() => {
  return {
    display: "flex",
    alignItems: "center",
    borderRadius: "14px",
    padding: "8px 10px",
    color: "green",
    "&.MuiButton-sizeMedium.MuiButton-containedSecondary": {
      opacity: "1",
      "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
        color: textOnNeutral.gray1,
        background: neutral.gray1,
        boxShadow: "none",
      },
      "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
        color: textOnNeutral.gray0,
        background: neutral.gray0,
      },
    },
    "& span.MuiButton-icon.MuiButton-startIcon.MuiButton-iconSizeMedium": {
      "& svg": {
        fontSize: "28px",
      },
    },
  }
})

const SelectorButton = styled(CommonButtonStyle)(() => {
  const theme = useTheme()
  return {
    [theme.breakpoints.down("sm")]: {
      "&.MuiButton-sizeMedium.MuiButton-containedSecondary": {
        paddingLeft: "0",
        paddingRight: "0",
        minWidth: "50px",
      },
      "& span": {
        marginLeft: "0",
        marginRight: "0",
      },
    },
  }
})

const ChainButton = styled(CommonButtonStyle)((props: {
  isSelected: boolean
}) => {
  const { isSelected } = props
  const theme = useTheme()

  let background = "transparent"

  if (isSelected) {
    background = theme.palette.action.hover
  }

  return {
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "8px",
    "&.MuiButton-sizeMedium.MuiButton-textSecondary:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)":
      {
        color: theme.palette.text.primary,
        fontSize: "17px",
        textTransform: "capitalize" as const,
        backgroundColor: background,
      },
    "&.MuiButton-sizeMedium.MuiButton-textSecondary:not(.Mui-disabled):not(.Mui-focusVisible):hover":
      {
        color: theme.palette.text.primary,
        fontSize: "17px",
        textTransform: "capitalize" as const,
      },
  }
})

const ConnectedLabel = styled(Typography)(() => {
  const theme = useTheme()

  return {
    position: "absolute" as const,
    right: "8px",
    paddingRight: "16px",
    fontSize: "14px",
    color: theme.palette.text.primary,
    "&:after": {
      content: '""',
      width: "8px",
      height: "8px",
      position: "absolute" as const,
      right: "0",
      top: "calc(50% - 4px)",
      borderRadius: "50%",
      backgroundColor: rarity.rare,
    },
  }
})

const ConfirmLabel = styled(ConnectedLabel)({
  "&:after": {
    backgroundColor: rarity.unique,
  },
})

const ChainSelectorModal = styled(Modal)({
  "&.MuiModal-root .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24":
    {
      width: "100px",
    },
  " .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24": {
    width: "150px",
  },
  "& .MuiPaper-root": {
    width: "170px",
  },
  MuiPaper: {
    root: {
      width: "180px",
    },
  },
})

const ChainSelectorContainer = styled(Paper)(() => {
  const theme = useTheme()
  return {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "360px",
    borderRadius: "12px",
    [theme.breakpoints.down("xs")]: {
      minWidth: "100vw",
      maxWidth: "100vw",
      minHeight: "100vh",
      borderRadius: "0px",
      margin: "0",
      padding: "0",
      top: "0",
      left: "0",
      transform: "translate(0, 0)",
    },
  }
})

const ChainSelectorWrapper = styled(Box)(() => {
  const theme = useTheme()
  return {
    display: "flex",
    flexDirection: "column",
    margin: "16px",
    [theme.breakpoints.down("sm")]: {
      padding: "5px",
    },
  }
})

const ChainSelectorModalTitleContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  paddingTop: "24px",
})

const ChainSelectorCloseButton = styled(IconButton)({
  marginTop: "-12px",
  position: "absolute",
  right: 12,
})

export {
  SelectorButton,
  ChainButton,
  ConnectedLabel,
  ConfirmLabel,
  ChainSelectorModal,
  ChainSelectorContainer,
  ChainSelectorWrapper,
  ChainSelectorModalTitleContainer,
  ChainSelectorCloseButton,
}
