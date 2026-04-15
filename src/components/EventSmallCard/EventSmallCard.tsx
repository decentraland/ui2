import { memo, useCallback } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import type { EventSmallCardProps } from './EventSmallCard.types'
import {
  AvatarFallback,
  AvatarImg,
  ContentTop,
  CreatorName,
  CreatorNameHighlight,
  CreatorRow,
  EventSmallCardContainer,
  EventTitle,
  HoverActions,
  MobileAction,
  TextBlock,
  Thumbnail,
  ThumbnailWrapper,
  TimeLabel,
  TimePill,
  TitleRow
} from './EventSmallCard.styled'

const EventSmallCard = memo(
  ({ image, title, creatorName, creatorAvatarUrl, timeLabel, onClick, disableHover, action, hoverActions }: EventSmallCardProps) => {
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault()
          onClick()
        }
      },
      [onClick]
    )

    return (
      <EventSmallCardContainer
        onClick={onClick}
        disableHover={disableHover}
        {...(onClick && { role: 'button', tabIndex: 0, onKeyDown: handleKeyDown })}
      >
        {image && (
          <ThumbnailWrapper>
            <Thumbnail src={image} alt={title} loading="lazy" />
          </ThumbnailWrapper>
        )}
        <TextBlock>
          <ContentTop>
            <TitleRow>
              <EventTitle>{title}</EventTitle>
              {action && <MobileAction>{action}</MobileAction>}
            </TitleRow>
            {creatorName && (
              <CreatorRow>
                {creatorAvatarUrl ? <AvatarImg src={creatorAvatarUrl} alt={creatorName} /> : <AvatarFallback />}
                <CreatorName>
                  by <CreatorNameHighlight>{creatorName}</CreatorNameHighlight>
                </CreatorName>
              </CreatorRow>
            )}
          </ContentTop>
          {timeLabel && (
            <TimePill>
              <AccessTimeIcon sx={{ fontSize: 20, color: 'inherit' }} />
              <TimeLabel>{timeLabel}</TimeLabel>
            </TimePill>
          )}
          {hoverActions && <HoverActions>{hoverActions}</HoverActions>}
        </TextBlock>
      </EventSmallCardContainer>
    )
  }
)

EventSmallCard.displayName = 'EventSmallCard'

export { EventSmallCard }
