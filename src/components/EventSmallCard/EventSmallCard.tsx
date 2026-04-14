import { memo } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import type { EventSmallCardProps } from './EventSmallCard.types'
import {
  ActionSlot,
  AvatarFallback,
  AvatarImg,
  CardContainer,
  ContentTop,
  CreatorName,
  CreatorNameHighlight,
  CreatorRow,
  EventTitle,
  HoverActions,
  TextBlock,
  Thumbnail,
  ThumbnailWrapper,
  TimeLabel,
  TimePill
} from './EventSmallCard.styled'

const EventSmallCard = memo(
  ({ image, title, creatorName, creatorAvatarUrl, timeLabel, onClick, action, hoverActions }: EventSmallCardProps) => {
    return (
      <CardContainer onClick={onClick}>
        {image && (
          <ThumbnailWrapper>
            <Thumbnail src={image} alt={title} loading="lazy" />
          </ThumbnailWrapper>
        )}
        <TextBlock>
          <ContentTop>
            <EventTitle>{title}</EventTitle>
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
            <TimePill data-role="time-pill">
              <AccessTimeIcon sx={{ fontSize: 20, color: 'inherit' }} />
              <TimeLabel>{timeLabel}</TimeLabel>
            </TimePill>
          )}
          {action && <ActionSlot>{action}</ActionSlot>}
          {hoverActions && <HoverActions data-role="hover-actions">{hoverActions}</HoverActions>}
        </TextBlock>
      </CardContainer>
    )
  }
)

EventSmallCard.displayName = 'EventSmallCard'

export { EventSmallCard }
