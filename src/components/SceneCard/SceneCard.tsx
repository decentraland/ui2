import { memo } from "react"
import Typography from "@mui/material/Typography"
import { Box, Link, useTheme } from "@mui/material"
import { AvatarFace } from "../AvatarFace"
import { LocationIcon } from "../Icon"
import { JumpIn } from "../JumpIn/JumpIn"
import { SceneCardHoverElement, SceneCardProps } from "./SceneCard.types"
import {
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
    const iconColor = theme.palette.text.primary

    const shouldShowOnHover = (element: SceneCardHoverElement) =>
      showOnHover.includes(element)

    return (
      <CardContainer withShadow={withShadow} withBorder={withBorder}>
        <StyledCardActionArea>
          <MediaContainer>
            <StyledCardMedia
              image={image}
              shrinkOnHover={shouldShowOnHover("jumpInButton")}
            />
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
          </MediaContainer>
          <StyledCardContent>
            <Box>
              <Typography gutterBottom variant="h6" component="div">
                {sceneName}
              </Typography>
            </Box>
            <ContentContainer>
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
              <LocationChipContainer
                showOnHover={shouldShowOnHover("location")}
              >
                <LocationChip
                  label={coordinates}
                  size="small"
                  icon={<LocationIcon htmlColor={iconColor} />}
                  onClick={() => {
                    window.open(
                      `https://decentraland.org/profile/accounts/${avatar?.ethAddress}`,
                      "_blank"
                    )
                  }}
                />
              </LocationChipContainer>
            </ContentContainer>
            <JumpInButtonContainer
              showOnHover={shouldShowOnHover("jumpInButton")}
            >
              <JumpIn
                position={coordinates}
                variant="button"
                modalProps={{
                  title: "Jump In",
                  description: "Jump In to the scene",
                  buttonLabel: "Jump In",
                }}
              />
            </JumpInButtonContainer>
          </StyledCardContent>
        </StyledCardActionArea>
      </CardContainer>
    )
  }
)

SceneCard.displayName = "SceneCard"

export { SceneCard }
