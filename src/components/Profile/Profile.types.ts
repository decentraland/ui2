import React from "react"
import { Avatar } from "@dcl/schemas/dist/platform/profile/avatar"

type ProfileBaseProps = {
  address: string
  avatar?: Avatar | null
  textOnly?: boolean
  imageOnly?: boolean
  hasPopup?: boolean
  inline?: boolean
  sliceAddressBy?: number
  size?: "normal" | "large" | "huge" | "massive"
  isDecentraland?: boolean
  i18n?: {
    defaultName: string
  }
}

type ProfileLogoProps = Pick<
  ProfileBaseProps,
  "isDecentraland" | "avatar" | "inline"
>

type ProfileProps<T extends React.ElementType> = ProfileBaseProps & {
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, keyof ProfileBaseProps | "as">

export { ProfileProps, ProfileLogoProps }
