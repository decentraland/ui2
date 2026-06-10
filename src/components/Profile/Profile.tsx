import React, { memo, useMemo } from 'react'
import Tooltip from '@mui/material/Tooltip'
import { i18n as i18nProfile } from './Profile.i18n'
import { ProfileImage } from './ProfileImage'
import { Address } from '../Address'
import { ProfileProps } from './Profile.types'
import { ProfileContainer, ProfileName, ProfileNameWithAddressContainer } from './Profile.styled'

const Profile = memo(<T extends React.ElementType>(props: ProfileProps<T>) => {
  const {
    address,
    avatar,
    textOnly,
    imageOnly,
    hasPopup,
    size = 'normal',
    inline = true,
    sliceAddressBy = 6,
    shortenAddress = false,
    showBothNameAndAddress = false,
    isDecentraland,
    as = React.Fragment,
    i18n = i18nProfile,
    showCopyButton,
    highlightName = false,
    ...rest
  } = props

  const sliceLimit = Math.max(Math.min(sliceAddressBy, 42), 6)
  const hasAvatarName = avatar && avatar.name
  const shouldUseAddressComponent = !isDecentraland && !hasAvatarName

  const name = useMemo(() => {
    if (isDecentraland) {
      return i18n.decentraland
    }

    if (!hasAvatarName) {
      return shortenAddress ? address : address.slice(0, sliceLimit)
    }

    if (avatar.hasClaimedName) {
      return avatar.name
    }

    const lastPart = address ? `#${address.slice(-4)}` : ''
    return avatar.name.endsWith(lastPart) ? avatar.name : avatar.name + lastPart
  }, [avatar, address, sliceLimit, shortenAddress, isDecentraland])

  const Wrapper = as

  const content = (
    <ProfileContainer {...props} size={size} inline={inline}>
      {textOnly ? null : (
        <Wrapper {...rest}>
          <ProfileImage {...props} />
        </Wrapper>
      )}
      {imageOnly ? null : (
        <Wrapper {...rest}>
          {showBothNameAndAddress && hasAvatarName ? (
            <ProfileNameWithAddressContainer>
              <ProfileName size={size} highlightName={highlightName}>
                {name}
              </ProfileName>
              <Address value={address} shorten={shortenAddress} showCopyButton={showCopyButton} />
            </ProfileNameWithAddressContainer>
          ) : (
            <ProfileName size={size} highlightName={highlightName}>
              {shouldUseAddressComponent ? <Address value={address} shorten={shortenAddress} showCopyButton={showCopyButton} /> : name}
            </ProfileName>
          )}
        </Wrapper>
      )}
    </ProfileContainer>
  )

  return hasPopup ? (
    <Tooltip title={shouldUseAddressComponent ? address : name} placement="top" arrow>
      {content}
    </Tooltip>
  ) : (
    content
  )
})

export { Profile }
