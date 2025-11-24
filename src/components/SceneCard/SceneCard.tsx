import { memo } from "react"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Box, Link, useTheme } from "@mui/material"
import { AvatarFace } from "../AvatarFace"
import { LocationIcon } from "../Icon"
import { JumpIn } from "../JumpIn/JumpIn"
import { SceneCardProps } from "./SceneCard.types"
import {
  AvatarContainer,
  CardContainer,
  ContentContainer,
  JumpInButtonContainer,
  LocationChip,
  LocationChipContainer,
  StyledCardActionArea,
  StyledCardMedia,
} from "./SceneCard.styled"

const SceneCard = memo(
  ({ image, sceneName, avatar, coordinates, withShadow }: SceneCardProps) => {
    const theme = useTheme()
    const iconColor = theme.palette.text.primary

    return (
      <CardContainer withShadow={withShadow}>
        <StyledCardActionArea>
          <StyledCardMedia image={image} />
          <CardContent>
            <Box>
              <Typography gutterBottom variant="h6" component="div">
                {sceneName}
              </Typography>
            </Box>
            <ContentContainer>
              <AvatarContainer>
                <AvatarFace size="small" avatar={avatar} />
                <Typography variant="body2">
                  by{" "}
                  <Link
                    href={`https://decentraland.org/profile/accounts/${avatar?.ethAddress}`}
                    underline="none"
                  >
                    {avatar?.name}
                  </Link>
                </Typography>
              </AvatarContainer>
              <LocationChipContainer>
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
            <JumpInButtonContainer>
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
          </CardContent>
        </StyledCardActionArea>
      </CardContainer>
    )
  }
)

SceneCard.displayName = "SceneCard"

export { SceneCard }
