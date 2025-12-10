import { memo } from "react"
import { UserLabel } from "../../../UserLabel"
import { AvatarRowProps } from "./AvatarRow.types"

const AvatarRow = memo((props: AvatarRowProps) => {
  const { avatar } = props

  return <UserLabel avatar={avatar} />
})

AvatarRow.displayName = "AvatarRow"

export { AvatarRow }
