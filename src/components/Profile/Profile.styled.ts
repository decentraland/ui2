import styled, { CSSObject } from "@emotion/styled"
import { ProfileBaseProps } from "./Profile.types"

const ProfileContainer = styled("span")<ProfileBaseProps>(
  ({ theme, inline = true }) => ({
    display: inline ? "inline-flex" : "flex",
    gap: theme.spacing(0.5),
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
    ...font,
  } as CSSObject
})

export { ProfileContainer, ProfileName }
