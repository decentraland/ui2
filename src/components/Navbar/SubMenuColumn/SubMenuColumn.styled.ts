import styled from "@emotion/styled"
import { Box, Typography, useTheme } from "@mui/material"

const SubMenuColumnContainer = styled(Box)(() => {
  const theme = useTheme()
  return {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    height: "100%",
    flexWrap: "nowrap" as const,
    marginRight: "56px",
    flex: 1,
    maxWidth: "350px",
    "&:hover": {
      borderBottomColor: "blue",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%",
    },
  }
})

const SubMenuColumnTitle = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "18px",
  marginBottom: "6px",
  "&:hover": {
    color: "blue",
  },
}))

export { SubMenuColumnContainer, SubMenuColumnTitle }
