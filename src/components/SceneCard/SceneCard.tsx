import { memo } from "react"
import Typography from "@mui/material/Typography"
import { Box, Link, useMediaQuery, useTheme } from "@mui/material"
import { AvatarFace } from "../AvatarFace"
import { LocationIcon } from "../Icon"
import { JumpIn } from "../JumpIn/JumpIn"
import { SceneCardHoverElement, SceneCardProps } from "./SceneCard.types"
import {
  AvatarAndLocationRow,
  AvatarContainer,
  AvatarTextContainer,
  BadgesContainer,
  CardContainer,
  ContentContainer,
  JumpInButtonContainer,
  LeftBadge,
  LocationChip,
  LocationChipContainer,
  MediaContainer,
  RightBadge,
  SceneTitle,
  StyledCardActionArea,
  StyledCardContent,
  StyledCardMedia,
} from "./SceneCard.styled"

const SceneCard = memo(
  ({
    image,
    sceneName,
    avatar,
    coordinates,
    withShadow,
    withBorder,
    leftBadge,
    rightBadge,
    showOnHover = [],
  }: SceneCardProps) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    const iconColor = theme.palette.text.primary
    const isWorld = coordinates?.includes(".eth.dcl")
    const jumpInUrl = isWorld
      ? `https://decentraland.org/jump?realm=${coordinates}`
      : `https://decentraland.org/jump?position=${coordinates}`

    const shouldShowOnHover = (element: SceneCardHoverElement) =>
      showOnHover.includes(element)

    const hasVisibleButton = !shouldShowOnHover("jumpInButton")

    return (
      <CardContainer withShadow={withShadow} withBorder={withBorder}>
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
            <SceneTitle>
              <Typography gutterBottom variant="h6" component="div">
                {sceneName}
              </Typography>
            </SceneTitle>
            <ContentContainer>
              <AvatarAndLocationRow>
                <AvatarContainer showOnHover={shouldShowOnHover("avatar")}>
                  <AvatarFace size="small" avatar={avatar} />
                  <AvatarTextContainer>
                    <Typography variant="body2">
                      by{" "}
                      <Link
                        href={`https://decentraland.org/profile/accounts/${avatar?.ethAddress}`}
                        underline="none"
                        fontWeight={theme.typography.fontWeightBold}
                      >
                        {avatar?.name}
                      </Link>
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
                      icon={<LocationIcon htmlColor={iconColor} />}
                      onClick={() => {
                        window.open(jumpInUrl, "_blank")
                      }}
                    />
                  </LocationChipContainer>
                )}
              </AvatarAndLocationRow>
              <JumpInButtonContainer
                showOnHover={shouldShowOnHover("jumpInButton")}
              >
                <JumpIn
                  position={coordinates}
                  variant="button"
                  buttonProps={
                    isMobile ? { sx: { height: theme.spacing(4) } } : undefined
                  }
                  modalProps={{
                    title: "Jump In",
                    description: "Jump In to the scene",
                    buttonLabel: "Jump In",
                  }}
                />
              </JumpInButtonContainer>
            </ContentContainer>
          </StyledCardContent>
        </StyledCardActionArea>
      </CardContainer>
    )
  }
)

SceneCard.displayName = "SceneCard"

export { SceneCard }
