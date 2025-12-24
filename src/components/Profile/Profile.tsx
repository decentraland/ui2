import React, { memo, useMemo } from "react"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import { i18n as i18nProfile } from "./Profile.i18n"
import { ProfileImage } from "./ProfileImage"
import { Address } from "../Address"
import { ProfileProps } from "./Profile.types"
import { ProfileContainer, ProfileName } from "./Profile.styled"

const Profile = memo(<T extends React.ElementType>(props: ProfileProps<T>) => {
  const {
    address,
    avatar,
    textOnly,
    imageOnly,
    hasPopup,
    size = "normal",
    inline = true,
    sliceAddressBy = 6,
    shortenAddress = false,
    showBothNameAndAddress = false,
    isDecentraland,
    as = React.Fragment,
    i18n = i18nProfile,
    ...rest
  } = props

  const sliceLimit = Math.max(Math.min(sliceAddressBy, 42), 6)
  const hasAvatarName = avatar && avatar.name
  const shouldUseAddressComponent = !isDecentraland && !hasAvatarName

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address)
  }

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

    const lastPart = address ? `#${address.slice(-4)}` : ""
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
              }}
            >
              <ProfileName size={size}>{name}</ProfileName>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0.1,
                  fontSize: "0.875em",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                <Address value={address} shorten={shortenAddress} />
                <IconButton
                  size="small"
                  onClick={handleCopyAddress}
                  sx={{
                    padding: 0.25,
                    color: "rgba(255, 255, 255, 0.7)",
                    "&:hover": {
                      color: "rgba(255, 255, 255, 1)",
                    },
                  }}
                >
                  <ContentCopyIcon sx={{ fontSize: "0.875em" }} />
                </IconButton>
              </Box>
            </Box>
          ) : (
            <ProfileName size={size}>
              {shouldUseAddressComponent ? (
                <Address value={name} shorten={shortenAddress} />
              ) : (
                name
              )}
            </ProfileName>
          )}
        </Wrapper>
      )}
    </ProfileContainer>
  )

  return hasPopup ? (
    <Tooltip
      title={shouldUseAddressComponent ? address : name}
      placement="top"
      arrow
    >
      {content}
    </Tooltip>
  ) : (
    content
  )
})

export { Profile }
