import React from "react"
import { Avatar } from "@dcl/schemas/dist/platform/profile/avatar"

type ProfileI18N = Record<"decentraland", string>

type ProfileSize = "normal" | "large" | "huge" | "massive"

type ProfileBaseProps = {
  address: string
  avatar?: Avatar | null
  textOnly?: boolean
  imageOnly?: boolean
  hasPopup?: boolean
  inline?: boolean
  sliceAddressBy?: number
  shortenAddress?: boolean
  showBothNameAndAddress?: boolean
  rounded?: boolean
  size?: ProfileSize
  isDecentraland?: boolean
  i18n?: ProfileI18N
  showCopyButton?: boolean
  highlightName?: boolean
}

type ProfileLogoProps = Pick<
  ProfileBaseProps,
  "isDecentraland" | "avatar" | "inline"
>

type ProfileProps<T extends React.ElementType> = ProfileBaseProps & {
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, keyof ProfileBaseProps | "as">

export {
  ProfileProps,
  ProfileLogoProps,
  ProfileBaseProps,
  ProfileSize,
  ProfileI18N,
}
