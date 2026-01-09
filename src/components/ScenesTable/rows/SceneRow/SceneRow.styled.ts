import { Box, Link, Typography, styled } from "@mui/material"

const SceneRowContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  minWidth: 0,
  overflow: "hidden",
}))

const SceneThumbnail = styled("img")(({ theme }) => ({
  width: "auto",
  height: theme.spacing(8.75),
  borderRadius: `${theme.spacing(2)} 0 0 ${theme.spacing(2)}`,
  objectFit: "cover",
  flexShrink: 0,
  [theme.breakpoints.down("xs")]: {
    height: theme.spacing(7.5),
    width: "auto",
  },
}))

const SceneContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  flex: 1,
  minWidth: 0,
  overflow: "hidden",
  [theme.breakpoints.down("xs")]: {
    paddingRight: theme.spacing(2),
  },
}))

const SceneName = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  [theme.breakpoints.down("xs")]: {
    fontSize: "14px",
  },
}))

const MobileInfoRow = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("xs")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(0.5),
    fontSize: "12px",
    minWidth: 0,
    overflow: "hidden",
  },
}))

const MobileAvatarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  minWidth: 0,
  overflow: "hidden",
  flexShrink: 1,
}))

const MobileAvatarName = styled(Link)(({ theme }) => ({
  fontSize: "12px",
  textDecoration: "none",
  fontWeight: theme.typography.fontWeightBold,
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
  gap: 0,
  fontSize: "12px",
  color: theme.palette.text.secondary,
  minWidth: 0,
  overflow: "hidden",
  flexShrink: 1,
  "& path:last-child": {
    fill: theme.palette.text.primary,
  },
}))

const MobileLocationText = styled(Typography)({
  fontSize: "12px",
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
