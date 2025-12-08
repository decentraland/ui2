import { memo } from "react"
import { Typography } from "@mui/material"
import { AvatarFace } from "../../../AvatarFace/AvatarFace"
import { AvatarRowProps } from "./AvatarRow.types"
import { AvatarLink, AvatarRowContainer } from "./AvatarRow.styled"

const AvatarRow = memo((props: AvatarRowProps) => {
  const { avatar } = props

  return (
    <AvatarRowContainer>
      <AvatarFace avatar={avatar} />
      <Typography variant="body2">
        By{" "}
        <AvatarLink
          href={`https://decentraland.org/profile/accounts/${avatar?.ethAddress}`}
        >
          {avatar.name}
        </AvatarLink>
      </Typography>
    </AvatarRowContainer>
  )
})

AvatarRow.displayName = "AvatarRow"

export { AvatarRow }
