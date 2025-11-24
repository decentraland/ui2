import { memo } from "react"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/material"
import { AvatarFace } from "../AvatarFace"
import { SceneCardProps } from "./SceneCard.types"
import { CardContainer } from "./SceneCard.styled"

const SceneCard = memo(
  ({ image, sceneName, creator, avatar }: SceneCardProps) => {
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AvatarFace size="small" avatar={avatar} />
              <Typography variant="body2">by {creator}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </CardContainer>
    )
  }
)

SceneCard.displayName = "SceneCard"

export { SceneCard }
