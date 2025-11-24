import { Avatar } from "@dcl/schemas"
import { SceneCard } from "./SceneCard"
import sceneThumbnail from "../../Assets/scene-thumbnail.png"
import { Mana } from "../Mana/Mana"
import type { Meta, StoryObj } from "@storybook/react"

const exampleAvatar: Avatar = {
  hasClaimedName: false,
  description: "",
  tutorialStep: 256,
  name: "alelevy",
  userId: "0xe3fc7040653768efb2941a6c26fdb868ed36ca99",
  email: "",
  ethAddress: "0xe3fc7040653768efb2941a6c26fdb868ed36ca99",
  version: 3,
  avatar: {
    bodyShape: "urn:decentraland:off-chain:base-avatars:BaseFemale",
    wearables: [
      "urn:decentraland:off-chain:base-avatars:denimdungareesblue",
      "urn:decentraland:off-chain:base-avatars:sport_blue_shoes",
      "urn:decentraland:off-chain:base-avatars:blue_star_earring",
      "urn:decentraland:off-chain:base-avatars:hair_anime_01",
      "urn:decentraland:off-chain:base-avatars:eyes_04",
      "urn:decentraland:off-chain:base-avatars:mouth_03",
    ],
    forceRender: [],
    emotes: [
      {
        slot: 0,
        urn: "clap",
      },
      {
        slot: 1,
        urn: "crafting",
      },
      {
        slot: 2,
        urn: "cry",
      },
      {
        slot: 3,
        urn: "dab",
      },
      {
        slot: 4,
        urn: "dance",
      },
      {
        slot: 5,
        urn: "disco",
      },
      {
        slot: 6,
        urn: "dontsee",
      },
      {
        slot: 7,
        urn: "fistpump",
      },
      {
        slot: 8,
        urn: "hammer",
      },
      {
        slot: 9,
        urn: "handsair",
      },
    ],
    snapshots: {
      face256:
        "https://profile-images-bucket-43d0c58.s3.us-east-1.amazonaws.com/v1/entities/bafkreidfx4h4hw4jlyi2q53c3rqwgdx72brntgcketsvs4qwrwbf2ui6zm/face.png",
      body: "https://profile-images-bucket-43d0c58.s3.us-east-1.amazonaws.com/v1/entities/bafkreidfx4h4hw4jlyi2q53c3rqwgdx72brntgcketsvs4qwrwbf2ui6zm/body.png",
    },
    eyes: {
      color: {
        r: 0.7490196228027344,
        g: 0.6196078658103943,
        b: 0.3529411852359772,
      },
    },
    hair: {
      color: {
        r: 0.10980392247438431,
        g: 0.10980392247438431,
        b: 0.10980392247438431,
      },
    },
    skin: {
      color: {
        r: 0.9490196108818054,
        g: 0.7607843279838562,
        b: 0.6470588445663452,
      },
    },
  },
  blocked: [],
  interests: [],
  hasConnectedWeb3: true,
}

const meta: Meta<typeof SceneCard> = {
  title: "Decentraland UI/SceneCard",
  component: SceneCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    image: {
      description: "Image URL",
      control: "text",
      defaultValue: sceneThumbnail,
    },
  },
}

type Story = StoryObj<typeof SceneCard>

const Default: Story = {
  args: {
    image: sceneThumbnail,
    sceneName: "My Galaxy World",
    coordinates: "alelevyyyy.eth.dcl",
    avatar: exampleAvatar,
    withShadow: true,
    leftBadge: "1",
    rightBadge: <Mana inline>1.5k</Mana>,
  },
}

const WithIcon: Story = {
  args: {
    image: sceneThumbnail,
    sceneName: "Featured Scene",
    coordinates: "featured.eth.dcl",
    avatar: exampleAvatar,
    withShadow: true,
    leftBadge: "🏆",
    rightBadge: "New Scene!",
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default, WithIcon }
