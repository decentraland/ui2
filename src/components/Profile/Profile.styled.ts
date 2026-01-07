import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import styled from "@emotion/styled"
import { ProfileBaseProps } from "./Profile.types"

const ProfileContainer = styled("span")<ProfileBaseProps>(
  ({ theme, inline = true, size = "normal" }) => ({
    display: inline ? "inline-flex" : "flex",
    gap: size !== "normal" ? theme.spacing(1) : theme.spacing(0.5),
    alignItems: "center",
    verticalAlign: "top",
  })
)

const ProfileName = styled("span")<Pick<ProfileBaseProps, "size">>(({
  theme,
  size = "normal",
}) => {
  const font = size !== "normal" ? theme.typography.h6 : theme.typography.body1
  return {
    fontSize: font.fontSize,
    fontWeight: font.fontWeight,
    lineHeight: font.lineHeight,
  }
})

const ProfileNameWithAddressContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(0.5),
}))

const ProfileAddressContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(0.1),
  fontSize: "0.875em",
  color: theme.palette.text.secondary,
}))

const ProfileCopyButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.25),
  color: theme.palette.text.secondary,

  "&:hover": {
    color: theme.palette.text.primary,
  },
}))

const ProfileCopyIcon = styled(ContentCopyIcon)({
  fontSize: "0.875em",
})

export {
  ProfileContainer,
  ProfileName,
  ProfileNameWithAddressContainer,
  ProfileAddressContainer,
  ProfileCopyButton,
  ProfileCopyIcon,
}
