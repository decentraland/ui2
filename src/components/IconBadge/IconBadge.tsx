import React from "react"
import RepeatOneRoundedIcon from "@mui/icons-material/RepeatOneRounded"
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded"
import {
  BaseFemaleIcon,
  BaseMaleIcon,
  BodyShapeIcon,
  EarringIcon,
  EyebrowsIcon,
  EyesIcon,
  EyewearIcon,
  FacialHairIcon,
  FeetIcon,
  HairIcon,
  HandsWearIcon,
  HatIcon,
  HelmetIcon,
  LowerBodyIcon,
  MaskIcon,
  MouthIcon,
  PlacesIcon,
  PropsIcon,
  SkinIcon,
  SmartWearableIcon,
  SoundIcon,
  SparklesIcon,
  TiaraIcon,
  TopHeadIcon,
  UnisexIcon,
  UpperBodyIcon,
  UtilityIcon,
} from "../Icon"
import { IconBadgeIcon, IconBadgeProps } from "./IconBadge.types"
import {
  IconBadgeButtonContainer,
  ImageContainer,
  TextContainer,
} from "./IconBadge.styled"

const getIcon = (icon: IconBadgeIcon) => {
  const color = "inherit"
  switch (icon) {
    case IconBadgeIcon.BaseFemale:
      return <BaseFemaleIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.BaseMale:
      return <BaseMaleIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Unisex:
      return <UnisexIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.BodyShape:
      return <BodyShapeIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Earring:
      return <EarringIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Eyebrows:
      return <EyebrowsIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Eyes:
      return <EyesIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Eyewear:
      return <EyewearIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.FacialHair:
      return <FacialHairIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Feet:
      return <FeetIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Hair:
      return <HairIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Hat:
      return <HatIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Helmet:
      return <HelmetIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.LowerBody:
      return <LowerBodyIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Mask:
      return <MaskIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Mouth:
      return <MouthIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Tiara:
      return <TiaraIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.TopHead:
      return <TopHeadIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.UpperBody:
      return <UpperBodyIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Skin:
      return <SkinIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.HandsWear:
      return <HandsWearIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.PlayOnce:
      return <RepeatOneRoundedIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.PlayLoop:
      return <RepeatRoundedIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.SmartWearable:
      return <SmartWearableIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Sound:
      return <SoundIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Props:
      return <PropsIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Sparkles:
      return <SparklesIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Places:
      return <PlacesIcon fontSize={"small"} color={color} />
    case IconBadgeIcon.Utility:
      return <UtilityIcon fontSize={"small"} color={color} />
    default:
      return <></>
  }
}

const IconBadge = React.memo((props: IconBadgeProps) => {
  const { icon, text, children, ...rest } = props
  return (
    <IconBadgeButtonContainer {...rest}>
      <ImageContainer>
        {children && icon ? { children } : icon ? getIcon(icon) : null}
      </ImageContainer>
      {text ? <TextContainer>{text}</TextContainer> : null}
    </IconBadgeButtonContainer>
  )
})

export { IconBadge }
