import React from 'react'
import RepeatOneRoundedIcon from '@mui/icons-material/RepeatOneRounded'
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded'
import { SvgIconOwnProps } from '@mui/material'
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
  UtilityIcon
} from '../Icon'
import { IconBadgeIcon, IconBadgeProps } from './IconBadge.types'
import { IconBadgeButtonContainer, ImageContainer, TextContainer } from './IconBadge.styled'

const getIcon = (icon: IconBadgeIcon) => {
  const commonProps: Pick<SvgIconOwnProps, 'fontSize' | 'color'> = {
    fontSize: 'small',
    color: 'inherit'
  }
  switch (icon) {
    case IconBadgeIcon.BaseFemale:
      return <BaseFemaleIcon {...commonProps} />
    case IconBadgeIcon.BaseMale:
      return <BaseMaleIcon {...commonProps} />
    case IconBadgeIcon.Unisex:
      return <UnisexIcon {...commonProps} />
    case IconBadgeIcon.BodyShape:
      return <BodyShapeIcon {...commonProps} />
    case IconBadgeIcon.Earring:
      return <EarringIcon {...commonProps} />
    case IconBadgeIcon.Eyebrows:
      return <EyebrowsIcon {...commonProps} />
    case IconBadgeIcon.Eyes:
      return <EyesIcon {...commonProps} />
    case IconBadgeIcon.Eyewear:
      return <EyewearIcon {...commonProps} />
    case IconBadgeIcon.FacialHair:
      return <FacialHairIcon {...commonProps} />
    case IconBadgeIcon.Feet:
      return <FeetIcon {...commonProps} />
    case IconBadgeIcon.Hair:
      return <HairIcon {...commonProps} />
    case IconBadgeIcon.Hat:
      return <HatIcon {...commonProps} />
    case IconBadgeIcon.Helmet:
      return <HelmetIcon {...commonProps} />
    case IconBadgeIcon.LowerBody:
      return <LowerBodyIcon {...commonProps} />
    case IconBadgeIcon.Mask:
      return <MaskIcon {...commonProps} />
    case IconBadgeIcon.Mouth:
      return <MouthIcon {...commonProps} />
    case IconBadgeIcon.Tiara:
      return <TiaraIcon {...commonProps} />
    case IconBadgeIcon.TopHead:
      return <TopHeadIcon {...commonProps} />
    case IconBadgeIcon.UpperBody:
      return <UpperBodyIcon {...commonProps} />
    case IconBadgeIcon.Skin:
      return <SkinIcon {...commonProps} />
    case IconBadgeIcon.HandsWear:
      return <HandsWearIcon {...commonProps} />
    case IconBadgeIcon.PlayOnce:
      return <RepeatOneRoundedIcon {...commonProps} />
    case IconBadgeIcon.PlayLoop:
      return <RepeatRoundedIcon {...commonProps} />
    case IconBadgeIcon.SmartWearable:
      return <SmartWearableIcon {...commonProps} />
    case IconBadgeIcon.Sound:
      return <SoundIcon {...commonProps} />
    case IconBadgeIcon.Props:
      return <PropsIcon {...commonProps} />
    case IconBadgeIcon.Sparkles:
      return <SparklesIcon {...commonProps} />
    case IconBadgeIcon.Places:
      return <PlacesIcon {...commonProps} />
    case IconBadgeIcon.Utility:
      return <UtilityIcon {...commonProps} />
    default:
      return <></>
  }
}

const IconBadge = React.memo((props: IconBadgeProps) => {
  const { icon, text, children, ...rest } = props
  return (
    <IconBadgeButtonContainer {...rest}>
      {icon && <ImageContainer>{children ?? getIcon(icon)}</ImageContainer>}
      {text ? <TextContainer>{text}</TextContainer> : null}
    </IconBadgeButtonContainer>
  )
})

export { IconBadge }
