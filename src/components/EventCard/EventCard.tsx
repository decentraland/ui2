import { memo, useCallback } from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { AvatarFace } from '../AvatarFace'
import { JumpInIcon, LocationIcon } from '../Icon'
import { EventCardProps } from './EventCard.types'
import {
  AvatarAndLocationRow,
  AvatarContainer,
  AvatarLink,
  AvatarTextContainer,
  BadgesContainer,
  ContentContainer,
  EventCardActionArea,
  EventCardContainer,
  EventCardContent,
  EventCardMedia,
  EventMediaContainer,
  JumpInButton,
  JumpInButtonContainer,
  LeftBadge,
  LocationChip,
  LocationChipContainer,
  SceneInfoContainer,
  SceneTitle,
  SkeletonAvatar,
  SkeletonImage,
  SkeletonText,
  SkeletonTitle
} from './EventCard.styled'

const EventCard = memo((props: EventCardProps) => {
  const {
    image,
    sceneName,
    avatar,
    coordinates,
    withShadow,
    leftBadge,
    leftBadgeTransparent = false,
    onClick,
    redirectToAuth = false,
    hideLocation = false,
    loading = false
  } = props

  const isWorld = coordinates?.includes('.dcl.eth')
  const jumpInUrl = isWorld ? `https://decentraland.org/jump?realm=${coordinates}` : `https://decentraland.org/jump?position=${coordinates}`

  if (loading) {
    return (
      <EventCardContainer>
        <EventCardActionArea disabled>
          <EventMediaContainer>
            <SkeletonImage variant="rectangular" />
          </EventMediaContainer>
          <EventCardContent>
            <ContentContainer>
              <SkeletonTitle variant="rectangular" />
              <AvatarAndLocationRow>
                <AvatarContainer>
                  <SkeletonAvatar variant="circular" />
                  <SkeletonText variant="rectangular" />
                </AvatarContainer>
              </AvatarAndLocationRow>
            </ContentContainer>
          </EventCardContent>
        </EventCardActionArea>
      </EventCardContainer>
    )
  }

  const handleCardClick = useCallback(() => {
    if (onClick) {
      onClick()
      return
    }
    if (redirectToAuth) {
      window.location.href = '/auth'
      return
    }
    if (coordinates) {
      window.open(jumpInUrl, '_blank')
    }
  }, [onClick, redirectToAuth, coordinates, jumpInUrl])

  return (
    <EventCardContainer withShadow={withShadow}>
      <EventCardActionArea onClick={handleCardClick}>
        {leftBadge !== undefined && (
          <BadgesContainer>
            <LeftBadge transparent={leftBadgeTransparent}>
              <Box component="span">{leftBadge}</Box>
            </LeftBadge>
          </BadgesContainer>
        )}
        <EventMediaContainer>
          <EventCardMedia image={image} />
        </EventMediaContainer>
        <EventCardContent>
          <SceneInfoContainer>
            <SceneTitle>
              <Typography variant="h6" component="div" gutterBottom>
                {sceneName}
              </Typography>
            </SceneTitle>
            {(avatar || (coordinates && !hideLocation)) && (
              <AvatarAndLocationRow>
                {avatar && (
                  <AvatarContainer>
                    <AvatarFace size="small" avatar={avatar} />
                    <AvatarTextContainer>
                      <Typography variant="body2">
                        by <AvatarLink href={`https://decentraland.org/profile/accounts/${avatar.ethAddress}`}>{avatar.name}</AvatarLink>
                      </Typography>
                    </AvatarTextContainer>
                  </AvatarContainer>
                )}
                {coordinates && !hideLocation && (
                  <LocationChipContainer>
                    <LocationChip label={coordinates} size="small" icon={<LocationIcon />} />
                  </LocationChipContainer>
                )}
              </AvatarAndLocationRow>
            )}
          </SceneInfoContainer>
          <JumpInButtonContainer>
            <JumpInButton>
              <span>JUMP IN</span>
              <JumpInIcon />
            </JumpInButton>
          </JumpInButtonContainer>
        </EventCardContent>
      </EventCardActionArea>
    </EventCardContainer>
  )
})

EventCard.displayName = 'EventCard'

export { EventCard }
