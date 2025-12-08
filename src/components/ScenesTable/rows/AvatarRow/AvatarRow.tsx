import { memo } from "react"
import { Typography } from "@mui/material"
import { AvatarFace } from "../../../AvatarFace/AvatarFace"
import { AvatarRowProps } from "./AvatarRow.types"
import { AvatarRowContainer } from "./AvatarRow.styled"

const AvatarRow = memo((props: AvatarRowProps) => {
  const { avatar } = props

  return (
    <AvatarRowContainer>
      <AvatarFace avatar={avatar} />
      <Typography variant="body2">By {avatar.name}</Typography>
    </AvatarRowContainer>
  )
})

AvatarRow.displayName = "AvatarRow"

export { AvatarRow }
