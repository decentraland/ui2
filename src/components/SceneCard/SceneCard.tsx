import { memo } from "react"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Box, Chip, Link, useTheme } from "@mui/material"
import { AvatarFace } from "../AvatarFace"
import { LocationIcon } from "../Icon"
import { SceneCardProps } from "./SceneCard.types"
import {
  AvatarContainer,
  CardContainer,
  ContentContainer,
} from "./SceneCard.styled"

const SceneCard = memo(
  ({ image, sceneName, avatar, coordinates }: SceneCardProps) => {
    const theme = useTheme()
    const iconColor = theme.palette.text.primary

    return (
      <CardContainer>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={image}
            alt="scene thumbnail"
          />
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
              <Chip
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
            </ContentContainer>
          </CardContent>
        </CardActionArea>
      </CardContainer>
    )
  }
)

SceneCard.displayName = "SceneCard"

export { SceneCard }
