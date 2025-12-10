import { Box, Link, styled } from "@mui/material"

const CreatorInfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}))

const CreatorLink = styled(Link)({
  textDecoration: "none",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
  },
})

export { CreatorInfoContainer, CreatorLink }
