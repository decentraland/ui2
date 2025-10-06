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

export { ProfileContainer }
