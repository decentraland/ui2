import React from "react"
import { Badge, ImageContainer } from "./NotificationItemImage.styled"

export interface NotificationItemImageProps {
  backgroundColor?: string
  image: string | React.ReactNode
  icon?: React.ReactNode
}

export default function NotificationItemImage({
  image,
  backgroundColor,
  icon,
}: NotificationItemImageProps) {
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
