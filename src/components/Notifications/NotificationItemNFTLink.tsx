import { Rarity } from "@dcl/schemas"
import { Link } from "./NotificationItemNFTLink.styled"

interface NotificationItemNFTLinkProps {
  link: string
  rarity: Rarity
  name: string
}

const NotificationItemNFTLink = (props: NotificationItemNFTLinkProps) => {
  const { link, rarity, name } = props
  return (
    <Link href={link} rarity={rarity}>
      {name}
    </Link>
  )
}

export default NotificationItemNFTLink
