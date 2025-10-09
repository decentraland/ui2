import React, { memo, useMemo } from "react"
import { AvatarFaceSize } from "components/AvatarFace/AvatarFace.types"
import { AvatarFace } from "../AvatarFace/AvatarFace"
import { Blockie } from "../Blockie/Blockie"
import { Logo } from "../Logo/Logo"
import { ProfileProps, ProfileSize } from "./Profile.types"

const avatarFaceSizeTranslator: Record<ProfileSize, AvatarFaceSize> = {
  normal: "tiny",
  large: "small",
  huge: "medium",
  massive: "massive",
}

const blockieSizeTranslator: Record<ProfileSize, number> = {
  normal: 3,
  large: 5,
  huge: 8,
  massive: 30,
}

const ProfileImage = memo(
  <T extends React.ElementType>(props: ProfileProps<T>) => {
    // It's not a good practice to default inline to true, but maybe we should keep it for backwards compatibility
    const {
      isDecentraland,
      avatar,
      inline = true,
      address,
      size = "normal",
      rounded = false,
      as,
      ...rest
    } = props

    const avatarFaceSize = useMemo(() => avatarFaceSizeTranslator[size], [size])
    const blockieSize = useMemo(() => blockieSizeTranslator[size], [size])

    if (isDecentraland) {
      return <Logo size={size} />
    }

    if (avatar) {
      return (
        <AvatarFace size={avatarFaceSize} inline={inline} avatar={avatar} />
      )
    }

    return <Blockie seed={address} scale={blockieSize} rounded={rounded} as={as} {...rest} />
  }
)

export { ProfileImage }
