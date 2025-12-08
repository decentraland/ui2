import { Box, styled } from "@mui/material"

const ActionCellContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  position: "relative",
  width: "100%",
  minWidth: theme.spacing(16),
  "& .jump-in-button": {
    opacity: 0,
    visibility: "hidden",
    position: "absolute",
    right: 0,
    height: 40,
    transition: theme.transitions.create(["opacity", "visibility"], {
      duration: theme.transitions.duration.shortest,
    }),
  },
  "tr:hover & .jump-in-button": {
    opacity: 1,
    visibility: "visible",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "auto",
    justifyContent: "center",
    "& .jump-in-button": {
      display: "none",
    },
  },
}))

export { ActionCellContainer }
