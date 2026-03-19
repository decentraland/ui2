import { memo, useCallback } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
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
  JumpInButtonContainer,
  LeftBadge,
  LocationChip,
  LocationChipContainer,
  SceneInfoContainer,
  SceneTitle
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
    hideLocation = false
  } = props

  const isWorld = coordinates?.includes('.eth.dcl')
  const jumpInUrl = isWorld ? `https://decentraland.org/jump?realm=${coordinates}` : `https://decentraland.org/jump?position=${coordinates}`

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
          <ContentContainer>
            <SceneInfoContainer>
              <SceneTitle>
                <Typography variant="h6" component="div" gutterBottom>
                  {sceneName}
                </Typography>
              </SceneTitle>
              <AvatarAndLocationRow>
                <AvatarContainer>
                  <AvatarFace size="small" avatar={avatar} />
                  <AvatarTextContainer>
                    <Typography variant="body2">
                      by <AvatarLink href={`https://decentraland.org/profile/accounts/${avatar?.ethAddress}`}>{avatar?.name}</AvatarLink>
                    </Typography>
                  </AvatarTextContainer>
                </AvatarContainer>
                {coordinates && !hideLocation && (
                  <LocationChipContainer>
                    <LocationChip
                      label={coordinates}
                      size="small"
                      icon={<LocationIcon />}
                    />
                  </LocationChipContainer>
                )}
              </AvatarAndLocationRow>
            </SceneInfoContainer>
            <JumpInButtonContainer>
              <Button variant="contained" size="small" fullWidth sx={{ borderRadius: 2 }}>
                <span>Jump In</span>
                <JumpInIcon sx={{ marginLeft: 1 }} />
              </Button>
            </JumpInButtonContainer>
          </ContentContainer>
        </EventCardContent>
      </EventCardActionArea>
    </EventCardContainer>
  )
})

EventCard.displayName = 'EventCard'

export { EventCard }
