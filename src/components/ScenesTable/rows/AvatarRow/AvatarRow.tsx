import { memo } from "react"
import { CreatorInfo } from "../../../CreatorInfo"
import { AvatarRowProps } from "./AvatarRow.types"

const AvatarRow = memo((props: AvatarRowProps) => {
  const { avatar } = props

  return <CreatorInfo avatar={avatar} />
})

AvatarRow.displayName = "AvatarRow"

export { AvatarRow }
