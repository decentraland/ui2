import React from "react"
import { NotificationItemImageProps } from "./NotificationItemImage.types"
import { Badge, ImageContainer } from "./NotificationItemImage.styled"

const NotificationItemImage = React.memo(
  ({ image, backgroundColor, icon }: NotificationItemImageProps) => {
    return (
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        badgeContent={icon}
      >
        {typeof image === "string" ? (
          <ImageContainer backgroundColor={backgroundColor}>
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
