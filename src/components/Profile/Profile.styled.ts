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

export { ProfileContainer, ProfileName }
