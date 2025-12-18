import { memo } from "react"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/material"
import { AvatarFace } from "../AvatarFace"
import { LocationIcon } from "../Icon"
import { JumpIn } from "../JumpIn/JumpIn"
import { SceneCardHoverElement, SceneCardProps } from "./SceneCard.types"
import {
  AvatarAndLocationRow,
  AvatarContainer,
  AvatarLink,
  AvatarTextContainer,
  BadgesContainer,
  CardContainer,
  ContentContainer,
  CornerBadge,
  CornerBadgeImage,
  JumpInButtonContainer,
  LeftBadge,
  LocationChip,
  LocationChipContainer,
  MediaContainer,
  RightBadge,
  SceneInfoContainer,
  SceneTitle,
  StyledCardActionArea,
  StyledCardContent,
  StyledCardMedia,
} from "./SceneCard.styled"

const SceneCard = memo((props: SceneCardProps) => {
  const {
    image,
    sceneName,
    avatar,
    coordinates,
    withShadow,
    borderColor,
    cornerBadge,
    cornerBadgeImage,
    leftBadge,
    rightBadge,
    showOnHover = [],
  } = props

  const isWorld = coordinates?.includes(".eth.dcl")
  const jumpInUrl = isWorld
    ? `https://decentraland.org/jump?realm=${coordinates}`
    : `https://decentraland.org/jump?position=${coordinates}`

  const shouldShowOnHover = (element: SceneCardHoverElement) =>
    showOnHover.includes(element)

  const hasVisibleButton = !shouldShowOnHover("jumpInButton")

  return (
    <CardContainer withShadow={withShadow} borderColor={borderColor}>
      {(cornerBadge !== undefined || cornerBadgeImage) && (
        <CornerBadge isImage={!!cornerBadgeImage}>
          {cornerBadgeImage ? (
            <CornerBadgeImage src={cornerBadgeImage} alt="corner badge" />
          ) : (
            cornerBadge
          )}
        </CornerBadge>
      )}
      <StyledCardActionArea hasVisibleButton={hasVisibleButton}>
        {(leftBadge !== undefined || rightBadge !== undefined) && (
          <BadgesContainer>
            {leftBadge !== undefined && (
              <LeftBadge showOnHover={shouldShowOnHover("leftBadge")}>
                <Box component="span">{leftBadge}</Box>
              </LeftBadge>
            )}
            {rightBadge !== undefined && (
              <RightBadge showOnHover={shouldShowOnHover("rightBadge")}>
                <Box component="span">{rightBadge}</Box>
              </RightBadge>
            )}
          </BadgesContainer>
        )}
        <MediaContainer>
          <StyledCardMedia
            image={image}
            shrinkOnHover={shouldShowOnHover("jumpInButton")}
          />
        </MediaContainer>
        <StyledCardContent>
          <ContentContainer>
            <SceneInfoContainer>
              <SceneTitle>
                <Typography variant="h6" component="div" gutterBottom>
                  {sceneName}
                </Typography>
              </SceneTitle>
              <AvatarAndLocationRow>
                <AvatarContainer showOnHover={shouldShowOnHover("avatar")}>
                  <AvatarFace size="small" avatar={avatar} />
                  <AvatarTextContainer>
                    <Typography variant="body2">
                      by{" "}
                      <AvatarLink
                        href={`https://decentraland.org/profile/accounts/${avatar?.ethAddress}`}
                      >
                        {avatar?.name}
                      </AvatarLink>
                    </Typography>
                  </AvatarTextContainer>
                </AvatarContainer>
                {coordinates && (
                  <LocationChipContainer
                    showOnHover={shouldShowOnHover("location")}
                  >
                    <LocationChip
                      label={coordinates}
                      size="small"
                      icon={<LocationIcon />}
                      onClick={() => {
                        window.open(jumpInUrl, "_blank")
                      }}
                    />
                  </LocationChipContainer>
                )}
              </AvatarAndLocationRow>
            </SceneInfoContainer>
            <JumpInButtonContainer
              showOnHover={shouldShowOnHover("jumpInButton")}
            >
              <JumpIn
                position={coordinates}
                variant="button"
                modalProps={{
                  title: "Jump In",
                  description: "Jump in to the scene",
                  buttonLabel: "Jump in",
                }}
              />
            </JumpInButtonContainer>
          </ContentContainer>
        </StyledCardContent>
      </StyledCardActionArea>
    </CardContainer>
  )
})

SceneCard.displayName = "SceneCard"

export { SceneCard }
