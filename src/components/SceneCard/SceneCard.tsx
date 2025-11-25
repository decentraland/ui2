import { memo } from "react"
import Typography from "@mui/material/Typography"
import { Box, Link, useTheme } from "@mui/material"
import { AvatarFace } from "../AvatarFace"
import { LocationIcon } from "../Icon"
import { JumpIn } from "../JumpIn/JumpIn"
import { SceneCardHoverElement, SceneCardProps } from "./SceneCard.types"
import {
  AvatarContainer,
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
    leftBadge,
    rightBadge,
    showOnHover = [],
  }: SceneCardProps) => {
    const theme = useTheme()
    const iconColor = theme.palette.text.primary

    const shouldShowOnHover = (element: SceneCardHoverElement) =>
      showOnHover.includes(element)

    return (
      <CardContainer withShadow={withShadow}>
        <StyledCardActionArea>
          <MediaContainer>
            <StyledCardMedia
              image={image}
              shrinkOnHover={shouldShowOnHover("jumpInButton")}
            />
            {leftBadge !== undefined && (
              <LeftBadge showOnHover={shouldShowOnHover("leftBadge")}>
                {leftBadge}
              </LeftBadge>
            )}
            {rightBadge !== undefined && (
              <RightBadge showOnHover={shouldShowOnHover("rightBadge")}>
                {rightBadge}
              </RightBadge>
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
