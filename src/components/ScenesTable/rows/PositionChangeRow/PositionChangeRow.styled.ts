import { Box, styled } from "@mui/material"

const PositionChangeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "fit-content",
  padding: theme.spacing(0.5),
  borderRadius: theme.spacing(1),
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  fontWeight: theme.typography.fontWeightBold,
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shorter,
  }),
  "tr:hover &": {
    opacity: 0,
  },
}))

const PositionContent = styled(Box)<{ isPositive: boolean }>(({
  theme,
  isPositive,
}) => {
  const color = isPositive
    ? theme.palette.success.main
    : theme.palette.error.main

  return {
    display: "flex",
    alignItems: "center",
    color,
    fontWeight: theme.typography.fontWeightBold,
    "& .MuiSvgIcon-root": {
      fill: color,
    },
  }
})

export { PositionChangeContainer, PositionContent }
