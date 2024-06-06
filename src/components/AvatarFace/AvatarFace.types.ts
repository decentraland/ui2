import { Avatar } from "@dcl/schemas"

export type AvatarFaceProps = {
  avatar?: Avatar
  size?: "tiny" | "small" | "medium" | "large" | "responsive"
  inline?: boolean
}
