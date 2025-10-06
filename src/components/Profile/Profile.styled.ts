import styled from "@emotion/styled"
import { ProfileBaseProps } from "./Profile.types"

const ProfileContainer = styled("span")<ProfileBaseProps>(
  ({ theme, inline = true }) => ({
    display: inline ? "inline-flex" : "flex",
    gap: theme.spacing(0.5),
    alignItems: "center",
    verticalAlign: "top",
  })
)

const ProfileName = styled("span")<Pick<ProfileBaseProps, "size">>(
  ({ theme, size = "normal" }) => ({
    // TODO: perhaps this should be in typography
    fontSize: size !== "normal" ? theme.spacing(2.5) : "inherit",
    lineHeight: size !== "normal" ? theme.spacing(2.75) : "inherit",
  })
)

export { ProfileContainer, ProfileName }
