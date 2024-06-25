import { Avatar } from "@dcl/schemas"

type AvatarFaceProps = {
  avatar?: Avatar
  size?: "tiny" | "small" | "medium" | "large" | "responsive"
  inline?: boolean
}

export type { AvatarFaceProps }
