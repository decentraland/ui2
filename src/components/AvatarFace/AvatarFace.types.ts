import { Avatar } from "@dcl/schemas"

type AvatarFaceSize =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "massive"
  | "responsive"

type AvatarFaceProps = {
  avatar?: Avatar
  size?: AvatarFaceSize
  inline?: boolean
}

export type { AvatarFaceProps, AvatarFaceSize }
