import React from "react"
import { AvatarFaceProps } from "./AvatarFace.types"
import { Avatar, AvatarContainer } from "./AvatarFace.styled"

const AvatarFace = React.memo((props: AvatarFaceProps) => {
  const { avatar, inline, ...avatarProps } = props

  let avatarUrl = avatar?.avatar?.snapshots?.face256

  if (avatarUrl && !avatarUrl.startsWith("https://")) {
    avatarUrl = `https://peer.decentraland.org/content/contents/${avatarUrl}`
  }

  return (
    <AvatarContainer inline={inline}>
      <Avatar src={avatarUrl} {...avatarProps} />
    </AvatarContainer>
  )
})

export { AvatarFace }
