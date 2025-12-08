import { Box, Typography, styled } from "@mui/material"

const SceneRowContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}))

const SceneThumbnail = styled("img")(({ theme }) => ({
  width: "auto",
  height: theme.spacing(10),
  borderRadius: `${theme.spacing(2)} 0 0 ${theme.spacing(2)}`,
  objectFit: "cover",
}))

const SceneName = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
}))

export { SceneRowContainer, SceneThumbnail, SceneName }
