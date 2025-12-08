import { Box, Link, styled } from "@mui/material"

const AvatarRowContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}))

const AvatarLink = styled(Link)({
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },
})

export { AvatarRowContainer, AvatarLink }
