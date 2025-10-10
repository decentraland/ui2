import { BaseFemaleIcon } from "./BaseFemaleIcon"
import { BaseMaleIcon } from "./BaseMaleIcon"
import { BodyShapeIcon } from "./BodyShapeIcon"
import { EarringIcon } from "./EarringIcon"
import { EyebrowsIcon } from "./EyebrowsIcon"
import { EyesIcon } from "./EyesIcon"
import { EyewearIcon } from "./EyewearIcon"
import { FacialHairIcon } from "./FacialHairIcon"
import { FeetIcon } from "./FeetIcon"
import { HairIcon } from "./HairIcon"
import { HandsWearIcon } from "./HandsWearIcon"
import { HatIcon } from "./HatIcon"
import { HelmetIcon } from "./HelmetIcon"
import { LowerBodyIcon } from "./LowerBodyIcon"
import { MaskIcon } from "./MaskIcon"
import { MouthIcon } from "./MouthIcon"
import { SkinIcon } from "./SkinIcon"
import { SmartWearableIcon } from "./SmartWearableIcon"
import { TiaraIcon } from "./TiaraIcon"
import { TopHeadIcon } from "./TopHeadIcon"
import { UnisexIcon } from "./UnisexIcon"
import { UpperBodyIcon } from "./UpperBodyIcon"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof BaseFemaleIcon> = {
  title: "Decentraland UI/Icons/Wearables",
  component: BaseFemaleIcon,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
}

type Story = StoryObj<typeof BaseFemaleIcon>

const BaseFemale: Story = {}

const BaseMale: Story = {
  render: () => <BaseMaleIcon />,
}

const BodyShape: Story = {
  render: () => <BodyShapeIcon />,
}

const Earring: Story = {
  render: () => <EarringIcon />,
}

const Eyebrows: Story = {
  render: () => <EyebrowsIcon />,
}

const Eyes: Story = {
  render: () => <EyesIcon />,
}

const Eyewear: Story = {
  render: () => <EyewearIcon />,
}

const FacialHair: Story = {
  render: () => <FacialHairIcon />,
}

const Feet: Story = {
  render: () => <FeetIcon />,
}

const Hair: Story = {
  render: () => <HairIcon />,
}

const HandsWear: Story = {
  render: () => <HandsWearIcon />,
}

const Hat: Story = {
  render: () => <HatIcon />,
}

const Helmet: Story = {
  render: () => <HelmetIcon />,
}

const LowerBody: Story = {
  render: () => <LowerBodyIcon />,
}

const Mask: Story = {
  render: () => <MaskIcon />,
}

const Mouth: Story = {
  render: () => <MouthIcon />,
}

const Skin: Story = {
  render: () => <SkinIcon />,
}

const SmartWearable: Story = {
  render: () => <SmartWearableIcon />,
}

const Tiara: Story = {
  render: () => <TiaraIcon />,
}

const TopHead: Story = {
  render: () => <TopHeadIcon />,
}

const Unisex: Story = {
  render: () => <UnisexIcon />,
}

const UpperBody: Story = {
  render: () => <UpperBodyIcon />,
}

const AllWearablesIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
      <BaseFemaleIcon />
      <BaseMaleIcon />
      <BodyShapeIcon />
      <EarringIcon />
      <EyebrowsIcon />
      <EyesIcon />
      <EyewearIcon />
      <FacialHairIcon />
      <FeetIcon />
      <HairIcon />
      <HandsWearIcon />
      <HatIcon />
      <HelmetIcon />
      <LowerBodyIcon />
      <MaskIcon />
      <MouthIcon />
      <SkinIcon />
      <SmartWearableIcon />
      <TiaraIcon />
      <TopHeadIcon />
      <UnisexIcon />
      <UpperBodyIcon />
    </div>
  ),
}

const LargeWearablesIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
      <BaseFemaleIcon fontSize="large" />
      <BaseMaleIcon fontSize="large" />
      <BodyShapeIcon fontSize="large" />
      <EarringIcon fontSize="large" />
      <EyebrowsIcon fontSize="large" />
      <EyesIcon fontSize="large" />
      <EyewearIcon fontSize="large" />
      <FacialHairIcon fontSize="large" />
      <FeetIcon fontSize="large" />
      <HairIcon fontSize="large" />
      <HandsWearIcon fontSize="large" />
      <HatIcon fontSize="large" />
      <HelmetIcon fontSize="large" />
      <LowerBodyIcon fontSize="large" />
      <MaskIcon fontSize="large" />
      <MouthIcon fontSize="large" />
      <SkinIcon fontSize="large" />
      <SmartWearableIcon fontSize="large" />
      <TiaraIcon fontSize="large" />
      <TopHeadIcon fontSize="large" />
      <UnisexIcon fontSize="large" />
      <UpperBodyIcon fontSize="large" />
    </div>
  ),
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  BaseFemale,
  BaseMale,
  BodyShape,
  Earring,
  Eyebrows,
  Eyes,
  Eyewear,
  FacialHair,
  Feet,
  Hair,
  HandsWear,
  Hat,
  Helmet,
  LowerBody,
  Mask,
  Mouth,
  Skin,
  SmartWearable,
  Tiara,
  TopHead,
  Unisex,
  UpperBody,
  AllWearablesIcons,
  LargeWearablesIcons,
}
