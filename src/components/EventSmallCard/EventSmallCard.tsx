import { memo, useCallback, useEffect, useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import type { EventSmallCardProps } from './EventSmallCard.types'
import {
  AvatarFallback,
  AvatarImg,
  BottomPillSlot,
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
  ThumbnailOverlay,
  ThumbnailWrapper,
  TimeLabel,
  TimePill,
  TitleRow
} from './EventSmallCard.styled'

const EventSmallCard = memo(
  ({
    image,
    imageFallbackColor,
    thumbnailOverlay,
    title,
    creatorName,
    creatorAvatarUrl,
    creatorAvatarBackgroundColor,
    byLabel = 'by',
    timeLabel,
    bottomPill,
    onClick,
    disableHover,
    action,
    hoverActions
  }: EventSmallCardProps) => {
    // A cover that 404s would otherwise paint the browser's broken-image icon;
    // dropping the <img> leaves the wrapper's fallback color showing instead.
    const [coverFailed, setCoverFailed] = useState(false)
    useEffect(() => setCoverFailed(false), [image])

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault()
          onClick()
        }
      },
      [onClick]
    )

    const hasThumbnail = Boolean(image) || Boolean(imageFallbackColor) || Boolean(thumbnailOverlay)

    return (
      <EventSmallCardContainer
        onClick={onClick}
        disableHover={disableHover}
        {...(onClick && { role: 'button', tabIndex: 0, onKeyDown: handleKeyDown })}
      >
        {hasThumbnail && (
          <ThumbnailWrapper fallbackColor={imageFallbackColor}>
            {/* Decorative: the title it would repeat is right there in the card,
                and alt={title} put it in the accessible name twice. */}
            {image && !coverFailed && <Thumbnail src={image} alt="" loading="lazy" onError={() => setCoverFailed(true)} />}
            {thumbnailOverlay && <ThumbnailOverlay>{thumbnailOverlay}</ThumbnailOverlay>}
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
                {creatorAvatarUrl ? (
                  <AvatarImg src={creatorAvatarUrl} alt={creatorName} backgroundColor={creatorAvatarBackgroundColor} />
                ) : (
                  <AvatarFallback backgroundColor={creatorAvatarBackgroundColor} />
                )}
                <CreatorName>
                  {byLabel} <CreatorNameHighlight>{creatorName}</CreatorNameHighlight>
                </CreatorName>
              </CreatorRow>
            )}
          </ContentTop>
          {/* Both fade out on hover to make room for hoverActions, so they share
              the data-role the container's hover rule targets. */}
          {bottomPill ? (
            <BottomPillSlot data-role="time-pill">{bottomPill}</BottomPillSlot>
          ) : (
            timeLabel && (
              <TimePill data-role="time-pill">
                <AccessTimeIcon sx={{ fontSize: 20, color: 'inherit' }} />
                <TimeLabel>{timeLabel}</TimeLabel>
              </TimePill>
            )
          )}
          {hoverActions && <HoverActions data-role="hover-actions">{hoverActions}</HoverActions>}
        </TextBlock>
      </EventSmallCardContainer>
    )
  }
)

EventSmallCard.displayName = 'EventSmallCard'

export { EventSmallCard }
