import React from "react"
import { NotificationItemNFTLinkProps } from "./NotificationItemNFTLink.types"
import { Link } from "./NotificationItemNFTLink.styled"

const NotificationItemNFTLink = React.memo(
  (props: NotificationItemNFTLinkProps) => {
    const { link, rarity, name } = props
    return (
      <Link href={link} rarity={rarity}>
        {name}
      </Link>
    )
  }
)

export { NotificationItemNFTLink }
