import React, { memo, useMemo } from "react"
import { ProfileProps } from "./Profile.types"
import { Logo } from "../Logo/Logo"
import { AvatarFace } from "../AvatarFace/AvatarFace"
import { Blockie } from "../Blockie/Blockie"

const ProfileImage = memo(
  <T extends React.ElementType>(props: ProfileProps<T>) => {
    const { isDecentraland, avatar, inline, address, size, as, ...rest } = props

    const blockieSize = useMemo(() => {
      switch (size) {
        case "large":
          return 5
        case "huge":
          return 7
        case "massive":
          return 21
        case "normal":
        default:
          return 3
      }
    }, [size])

    if (isDecentraland) {
      return <Logo />
    }

    if (avatar) {
      return <AvatarFace size="tiny" inline={inline} avatar={avatar} />
    }

    return <Blockie seed={address} scale={blockieSize} as={as} {...rest} />
  }
)

export { ProfileImage }
