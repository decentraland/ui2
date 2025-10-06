import React, { memo, useMemo } from "react"
import { ProfileContainer, ProfileName } from "./Profile.styled"
import { ProfileProps } from "./Profile.types"
import { ProfileImage } from "./ProfileImage"
import { i18n as i18nProfile } from "./Profile.i18n"

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
    i18n = i18nProfile,
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
          <ProfileName size={size}>
            {isDecentraland ? i18n.decentraland : name}
          </ProfileName>
        </Wrapper>
      )}
    </ProfileContainer>
  )
})

export { Profile }
