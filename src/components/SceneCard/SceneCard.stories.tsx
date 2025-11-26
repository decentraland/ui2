import { Avatar } from "@dcl/schemas"
import { Box, Typography } from "@mui/material"
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
    showOnHover: ["location", "jumpInButton"],
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
    rightBadge: "New Scene with long text",
    showOnHover: ["location", "jumpInButton"],
  },
}

const AllVisible: Story = {
  args: {
    image: sceneThumbnail,
    sceneName: "All Elements Visible",
    coordinates: "allvisible.eth.dcl",
    avatar: exampleAvatar,
    withShadow: true,
    leftBadge: "2",
    rightBadge: <Mana inline>2.3k</Mana>,
  },
}

const WithBorder: Story = {
  args: {
    image: sceneThumbnail,
    sceneName: "Scene With Border",
    coordinates: "border.eth.dcl",
    avatar: exampleAvatar,
    withBorder: true,
    withShadow: true,
    leftBadge: "1",
    rightBadge: <Mana inline>1.5k</Mana>,
    showOnHover: ["location", "jumpInButton"],
  },
}

const BadgeVariations: Story = {
  render: () => (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 3,
        width: "100%",
        alignItems: "flex-start",
      }}
    >
      <SceneCard
        image={sceneThumbnail}
        sceneName="Simple Numbers"
        coordinates="numbers.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        leftBadge="1"
        rightBadge={<Mana inline>1.5k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Emoji Badges"
        coordinates="emojis.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        leftBadge="🏆"
        rightBadge="🔥"
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Custom Components"
        coordinates="custom.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        leftBadge={
          <Typography variant="caption" fontWeight="bold">
            TOP
          </Typography>
        }
        rightBadge={
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography variant="caption">⭐</Typography>
            <Typography variant="caption" fontWeight="bold">
              4.8
            </Typography>
          </Box>
        }
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Featured Scene"
        coordinates="featured.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        leftBadge="⭐"
        rightBadge={<Mana inline>8.2k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="New Release"
        coordinates="newrelease.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        leftBadge={
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{ fontSize: "10px" }}
          >
            NEW
          </Typography>
        }
        rightBadge={<Mana inline>890</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Popular Place"
        coordinates="popular.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        leftBadge="2"
        rightBadge={<Mana inline>15.7k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
    </Box>
  ),
}

const RealWorldExamples: Story = {
  render: () => (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}
    >
      <SceneCard
        image={sceneThumbnail}
        sceneName="Top Ranking Scene"
        coordinates="top-ranking.dcl.eth"
        avatar={exampleAvatar}
        withBorder
        withShadow
        leftBadge="1"
        rightBadge={<Mana inline>25.3k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Featured by DCL"
        coordinates="featured.dcl.eth"
        avatar={exampleAvatar}
        withShadow
        leftBadge="⭐"
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="New Release"
        coordinates="newrelease.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        leftBadge={
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{ fontSize: "10px" }}
          >
            NEW
          </Typography>
        }
        rightBadge={<Mana inline>890</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
    </Box>
  ),
}

const ShowOnHoverVariations: Story = {
  render: () => (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 3,
        width: "100%",
        alignItems: "flex-start",
      }}
    >
      <SceneCard
        image={sceneThumbnail}
        sceneName="All Always Visible"
        coordinates="always-visible.dcl.eth"
        avatar={exampleAvatar}
        withShadow
        leftBadge="1"
        rightBadge={<Mana inline>5k</Mana>}
        showOnHover={[]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Left Badge on Hover"
        coordinates="left-badge-hover.dcl.eth"
        avatar={exampleAvatar}
        withShadow
        leftBadge="2"
        rightBadge={<Mana inline>3k</Mana>}
        showOnHover={["leftBadge"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Right Badge on Hover"
        coordinates="right-badge-hover.dcl.eth"
        avatar={exampleAvatar}
        withShadow
        leftBadge="3"
        rightBadge={<Mana inline>2.5k</Mana>}
        showOnHover={["rightBadge"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Avatar on Hover"
        coordinates="avatar-hover.dcl.eth"
        avatar={exampleAvatar}
        withShadow
        leftBadge="4"
        rightBadge={<Mana inline>1.8k</Mana>}
        showOnHover={["avatar"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Location on Hover"
        coordinates="location-hover.dcl.eth"
        avatar={exampleAvatar}
        withShadow
        leftBadge="5"
        rightBadge={<Mana inline>1.2k</Mana>}
        showOnHover={["location"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Button on Hover"
        coordinates="button-hover.dcl.eth"
        avatar={exampleAvatar}
        withShadow
        leftBadge="6"
        rightBadge={<Mana inline>900</Mana>}
        showOnHover={["jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Both Badges on Hover"
        coordinates="badges-hover.dcl.eth"
        avatar={exampleAvatar}
        withShadow
        leftBadge="7"
        rightBadge={<Mana inline>750</Mana>}
        showOnHover={["leftBadge", "rightBadge"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Avatar & Location Hover"
        coordinates="avatar-location.dcl.eth"
        avatar={exampleAvatar}
        withShadow
        leftBadge="8"
        rightBadge={<Mana inline>600</Mana>}
        showOnHover={["avatar", "location"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Location & Button Hover"
        coordinates="location-button.dcl.eth"
        avatar={exampleAvatar}
        withShadow
        leftBadge="9"
        rightBadge={<Mana inline>450</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="All on Hover"
        coordinates="all-hover.dcl.eth"
        avatar={exampleAvatar}
        withShadow
        leftBadge="10"
        rightBadge={<Mana inline>300</Mana>}
        showOnHover={[
          "leftBadge",
          "rightBadge",
          "avatar",
          "location",
          "jumpInButton",
        ]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Multiple Elements Hover"
        coordinates="multiple-hover.dcl.eth"
        avatar={exampleAvatar}
        withShadow
        leftBadge="⭐"
        rightBadge={<Mana inline>150</Mana>}
        showOnHover={["avatar", "location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Only Title Visible"
        coordinates="title-only.dcl.eth"
        avatar={exampleAvatar}
        withBorder
        withShadow
        leftBadge={
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{ fontSize: "10px" }}
          >
            NEW
          </Typography>
        }
        rightBadge={<Mana inline>100</Mana>}
        showOnHover={[
          "leftBadge",
          "rightBadge",
          "avatar",
          "location",
          "jumpInButton",
        ]}
      />
    </Box>
  ),
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  Default,
  WithIcon,
  AllVisible,
  WithBorder,
  BadgeVariations,
  RealWorldExamples,
  ShowOnHoverVariations,
}
