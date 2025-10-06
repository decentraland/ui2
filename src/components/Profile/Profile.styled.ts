import styled from "@emotion/styled"
import { ProfileProps } from "./Profile.types"

const ProfileContainer = styled("div")<ProfileProps<React.ElementType>>(
  ({ theme, inline }) => ({
    display: inline ? "inline" : "inline-block",
  })
)

export { ProfileContainer }
