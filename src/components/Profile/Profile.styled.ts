import styled from "@emotion/styled"
import { ProfileBaseProps } from "./Profile.types"

const ProfileContainer = styled("span")<ProfileBaseProps>(
  ({ theme, inline = true }) => ({
    display: inline ? "inline" : "inline-block",
    marginRight: inline ? theme.spacing(0.75) : 0,
  })
)

const Name = styled("span")<Pick<ProfileBaseProps, "textOnly">>(
  ({ theme, textOnly }) => ({
    marginLeft: textOnly ? 0 : theme.spacing(0.75),
  })
)

export { ProfileContainer, Name }
