import styled from "@emotion/styled"
import { Box, Button } from "@mui/material"

const DownloadButtonStyled = styled(Button)((props) => {
  const { theme } = props
  return {
    "&.MuiButton-sizeMedium.MuiButton-containedPrimary": {
      height: "48px",
      fontSize: "14px",
      fontWeight: 600,
      borderRadius: "6px",
      boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 8px",
      marginLeft: "16px",
      "& .MuiButton-icon.MuiButton-endIcon": {
        marginLeft: "8px",
      },
    },
    "&.MuiButton-sizeMedium.MuiButton-containedPrimary:not(.Mui-disabled):not(.Mui-focusVisible):hover":
      {
        backgroundColor: theme.palette.primary.main,
        color: "white",
      },
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      border: `4px solid #FCFCFC`,
      borderRadius: "14px",
      opacity: 0,
      transition: `${theme.transitions.create(
        ["top", "right", "bottom", "left", "opacity"],
        {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeInOut,
        }
      )}`,
    },
    "&:hover": {
      "&::before": {
        opacity: 1,
        top: "-7.5px",
        right: "-7.5px",
        bottom: "-7.5px",
        left: "-7.5px",
      },
    },
  }
})

const DownloadButtonLabelContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  lineHeight: "20px",
  "& span": {
    display: "block",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
  },
})

export { DownloadButtonStyled, DownloadButtonLabelContainer }
