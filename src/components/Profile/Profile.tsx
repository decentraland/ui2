import React, { memo, useMemo } from "react"
import { ProfileContainer } from "./Profile.styled"
import { ProfileProps } from "./Profile.types"
import { ProfileImage } from "./ProfileImage"

const Profile = memo(<T extends React.ElementType>(props: ProfileProps<T>) => {
  const {
    address,
    avatar,
    textOnly,
    imageOnly,
    size = "normal",
    inline = true,
    sliceAddressBy = 6,
    isDecentraland,
    as = React.Fragment,
    ...rest
  } = props

  const sliceLimit = Math.max(Math.min(sliceAddressBy, 42), 6)
  const name = useMemo(() => {
    if (!avatar || !avatar.name) {
      return address.slice(0, sliceLimit)
    }

    if (avatar.hasClaimedName) {
      return avatar.name
    }

    const lastPart = address ? `#${address.slice(-4)}` : ""
    return avatar.name.endsWith(lastPart) ? avatar.name : avatar.name + lastPart
  }, [avatar, address, sliceLimit])

  const Wrapper = as

  return (
    <ProfileContainer {...props} size={size} inline={inline}>
      {textOnly ? null : (
        <Wrapper {...rest}>
          <ProfileImage {...props} />
        </Wrapper>
      )}
      {imageOnly ? null : (
        <Wrapper {...rest}>
          <span>{isDecentraland ? "Decentraland" : name}</span>
        </Wrapper>
      )}
    </ProfileContainer>
  )
})

export { Profile }
