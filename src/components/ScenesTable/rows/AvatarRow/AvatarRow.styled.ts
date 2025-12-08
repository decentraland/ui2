import { Box, styled } from "@mui/material"

const AvatarRowContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}))

export { AvatarRowContainer }
