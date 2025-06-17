import React from "react"
import { NotificationItemImageProps } from "./NotificationItemImage.types"
import { Badge, ImageContainer } from "./NotificationItemImage.styled"

const NotificationItemImage = React.memo(
  (props: NotificationItemImageProps) => {
    const { image, badgeIcon, imageBackgroundColor } = props
    return (
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        badgeContent={badgeIcon}
        isImage={typeof image === "string"}
      >
        {typeof image === "string" ? (
          <ImageContainer backgroundColor={imageBackgroundColor}>
            <img src={image} alt="Notification Image" />
          </ImageContainer>
        ) : (
          image
        )}
      </Badge>
    )
  }
)

export { NotificationItemImage }
