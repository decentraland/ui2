import RepeatOneRoundedIcon from "@mui/icons-material/RepeatOneRounded"
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded"
import PropsIcon from "../Icon/Emotes/PropsIcon"
import SoundIcon from "../Icon/Emotes/SoundIcon"
import PlacesIcon from "../Icon/PlacesIcon"
import SparklesIcon from "../Icon/SparklesIcon"
import UtilityIcon from "../Icon/UtilityIcon"
import BaseFemaleIcon from "../Icon/Wearables/BaseFemaleIcon"
import BaseMaleIcon from "../Icon/Wearables/BaseMaleIcon"
import BodyShapeIcon from "../Icon/Wearables/BodyShapeIcon"
import EarringIcon from "../Icon/Wearables/EarringIcon"
import EyebrowsIcon from "../Icon/Wearables/EyebrowsIcon"
import EyesIcon from "../Icon/Wearables/EyesIcon"
import EyewearIcon from "../Icon/Wearables/EyewearIcon"
import FacialHairIcon from "../Icon/Wearables/FacialHairIcon"
import FeetIcon from "../Icon/Wearables/FeetIcon"
import HairIcon from "../Icon/Wearables/HairIcon"
import HandsWearIcon from "../Icon/Wearables/HandsWearIcon"
import HatIcon from "../Icon/Wearables/HatIcon"
import HelmetIcon from "../Icon/Wearables/HelmetIcon"
import LowerBodyIcon from "../Icon/Wearables/LowerBodyIcon"
import MaskIcon from "../Icon/Wearables/MaskIcon"
import MouthIcon from "../Icon/Wearables/MouthIcon"
import SkinIcon from "../Icon/Wearables/SkinIcon"
import SmartWearableIcon from "../Icon/Wearables/SmartWearableIcon"
import TiaraIcon from "../Icon/Wearables/TiaraIcon"
import TopHeadIcon from "../Icon/Wearables/TopHeadIcon"
import UnisexIcon from "../Icon/Wearables/UnisexIcon"
import UpperBodyIcon from "../Icon/Wearables/UpperBodyIcon"
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

export default function IconBadge(props: IconBadgeProps) {
  const { icon, text, children, ...rest } = props
  return (
    <IconBadgeButtonContainer {...rest}>
      <ImageContainer>
        {children && icon ? { children } : icon ? getIcon(icon) : null}
      </ImageContainer>
      {text ? <TextContainer>{text}</TextContainer> : null}
    </IconBadgeButtonContainer>
  )
}
