import React from "react"

export enum IconBadgeIcon {
  BaseMale = "BaseMale",
  BaseFemale = "BaseFemale",
  Unisex = "Unisex",
  BodyShape = "BodyShape",
  Earring = "Earring",
  Eyebrows = "Eyebrows",
  Eyes = "Eyes",
  Eyewear = "Eyewear",
  FacialHair = "FacialHair",
  Feet = "Feet",
  Hair = "Hair",
  Hat = "Hat",
  Helmet = "Helmet",
  LowerBody = "LowerBody",
  Mask = "Mask",
  Mouth = "Mouth",
  Tiara = "Tiara",
  TopHead = "TopHead",
  UpperBody = "UpperBody",
  Skin = "Skin",
  HandsWear = "HandsWear",
  PlayOnce = "PlayOnce",
  PlayLoop = "PlayLoop",
  SmartWearable = "SmartWearable",
  Sound = "Sound",
  Props = "Props",
  Sparkles = "Sparkles",
  Places = "Places",
  Utility = "Utility",
}

export type IconBadgeProps = {
  icon?: IconBadgeIcon
  text?: string
  inline?: boolean
  onClick?: () => void
  children?: React.ReactNode
}
