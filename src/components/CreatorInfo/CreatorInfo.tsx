import { memo } from "react"
import { Typography } from "@mui/material"
import { AvatarFace } from "../AvatarFace/AvatarFace"
import { CreatorInfoProps } from "./CreatorInfo.types"
import { CreatorInfoContainer, CreatorLink } from "./CreatorInfo.styled"

const CreatorInfo = memo((props: CreatorInfoProps) => {
  const { avatar } = props

  return (
    <CreatorInfoContainer>
      <AvatarFace avatar={avatar} />
      <Typography variant="body2">
        By{" "}
        <CreatorLink
          href={`https://decentraland.org/profile/accounts/${avatar?.ethAddress}`}
        >
          {avatar.name}
        </CreatorLink>
      </Typography>
    </CreatorInfoContainer>
  )
})

CreatorInfo.displayName = "CreatorInfo"

export { CreatorInfo }
