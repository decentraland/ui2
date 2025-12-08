import { Box, Link, Typography, styled } from "@mui/material"

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
  [theme.breakpoints.down("sm")]: {
    height: 60,
  },
}))

const SceneContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}))

const SceneName = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}))

const MobileInfoRow = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(1),
    fontSize: "12px",
  },
}))

const MobileAvatarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
}))

const MobileAvatarName = styled(Link)(({ theme }) => ({
  fontSize: "12px",
  textDecoration: "none",
  fontWeight: theme.typography.fontWeightBold,
  maxWidth: "12ch",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
  },
}))

const MobileLocation = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  fontSize: "12px",
  color: theme.palette.text.secondary,
  "& path:last-child": {
    fill: theme.palette.text.primary,
  },
}))

const MobileLocationText = styled(Typography)({
  fontSize: "12px",
  maxWidth: "10ch",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
})

export {
  MobileAvatarContainer,
  MobileAvatarName,
  MobileInfoRow,
  MobileLocation,
  MobileLocationText,
  SceneContentContainer,
  SceneName,
  SceneRowContainer,
  SceneThumbnail,
}
