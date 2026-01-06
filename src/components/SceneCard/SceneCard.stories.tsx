import { Avatar } from "@dcl/schemas"
import { Box, Typography } from "@mui/material"
import { SceneCard } from "./SceneCard"
import sceneThumbnail from "../../Assets/scene-thumbnail.png"
import { gradient } from "../../theme/colors"
import { NumberBadge, TextBadge } from "../Badges"
import { Mana } from "../Mana/Mana"
import type { Meta, StoryObj } from "@storybook/react"

const exampleAvatar: Avatar = {
  hasClaimedName: true,
  description: "",
  tutorialStep: 256,
  name: "alelevyyyy",
  userId: "0xe3fc7040653768efb2941a6c26fdb868ed36ca99",
  email: "",
  ethAddress: "0xe3fc7040653768efb2941a6c26fdb868ed36ca99",
  version: 5,
  avatar: {
    bodyShape: "urn:decentraland:off-chain:base-avatars:BaseFemale",
    wearables: [
      "urn:decentraland:off-chain:base-avatars:black_top",
      "urn:decentraland:off-chain:base-avatars:kilt",
      "urn:decentraland:off-chain:base-avatars:SchoolShoes",
      "urn:decentraland:off-chain:base-avatars:matrix_sunglasses",
      "urn:decentraland:off-chain:base-avatars:thunder_02_earring",
      "urn:decentraland:off-chain:base-avatars:hair_undere",
      "urn:decentraland:off-chain:base-avatars:f_eyes_06",
    ],
    forceRender: [],
    emotes: [
      {
        slot: 0,
        urn: "handsair",
      },
      {
        slot: 1,
        urn: "wave",
      },
      {
        slot: 2,
        urn: "fistpump",
      },
      {
        slot: 3,
        urn: "dance",
      },
      {
        slot: 4,
        urn: "raiseHand",
      },
      {
        slot: 5,
        urn: "clap",
      },
      {
        slot: 6,
        urn: "money",
      },
      {
        slot: 7,
        urn: "kiss",
      },
      {
        slot: 8,
        urn: "headexplode",
      },
      {
        slot: 9,
        urn: "shrug",
      },
    ],
    snapshots: {
      face256:
        "https://profile-images.decentraland.org/entities/bafkreietha7mzh7q3lk4j236vut2znwqhbiapihg46p6yrv3j4lbwlzd34/face.png",
      body: "https://profile-images.decentraland.org/entities/bafkreietha7mzh7q3lk4j236vut2znwqhbiapihg46p6yrv3j4lbwlzd34/body.png",
    },
    eyes: {
      color: {
        r: 0.2235294133424759,
        g: 0.48627451062202454,
        b: 0.6901960968971252,
      },
    },
    hair: {
      color: {
        r: 0.32549020648002625,
        g: 0.2352941334247589,
        b: 0.1764705926179886,
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
  country: "",
  employmentStatus: "",
  gender: "",
  pronouns: "",
  relationshipStatus: "",
  sexualOrientation: "",
  language: "",
  profession: "",
  realName: "",
  hobbies: "",
  birthdate: 0,
  links: [],
}

const meta: Meta<typeof SceneCard> = {
  title: "Decentraland UI/Cards/Scene Card",
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
    sceneName: "Scene With Border and long name and more text",
    coordinates: "border.eth.dcl",
    avatar: exampleAvatar,
    borderColor: gradient.gold,
    withShadow: true,
    leftBadge: "1",
    rightBadge: <Mana inline>1.5k</Mana>,
    showOnHover: ["location", "jumpInButton"],
  },
}

const BorderColors: Story = {
  render: () => (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 3,
        width: "100%",
        alignItems: "flex-start",
      }}
    >
      <SceneCard
        image={sceneThumbnail}
        sceneName="Gold Border - 1st Place"
        coordinates="gold.eth.dcl"
        avatar={exampleAvatar}
        borderColor={gradient.gold}
        withShadow
        cornerBadge={<NumberBadge value="1" />}
        rightBadge={<Mana inline>10k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Silver Border - 2nd Place"
        coordinates="silver.eth.dcl"
        avatar={exampleAvatar}
        borderColor={gradient.silver}
        withShadow
        cornerBadge={<NumberBadge value="2" />}
        rightBadge={<Mana inline>7.5k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Bronze Border - 3rd Place"
        coordinates="bronze.eth.dcl"
        avatar={exampleAvatar}
        borderColor={gradient.bronze}
        withShadow
        cornerBadge={<NumberBadge value="3" />}
        rightBadge={<Mana inline>5k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
    </Box>
  ),
}

const CornerBadgeVariations: Story = {
  render: () => (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 3,
        width: "100%",
        alignItems: "flex-start",
        padding: 2,
      }}
    >
      <SceneCard
        image={sceneThumbnail}
        sceneName="With Text Badge"
        coordinates="text.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        cornerBadge={<TextBadge text="Best New" />}
        rightBadge={<Mana inline>10k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Ranking Badge (no card border)"
        coordinates="number.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        cornerBadge={<NumberBadge value="4" />}
        rightBadge={<Mana inline>7.5k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Ranking Badge with Card Border"
        coordinates="number2.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        borderColor={gradient.gold}
        cornerBadge={<NumberBadge value="3" />}
        rightBadge={<Mana inline>5k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
    </Box>
  ),
}

const WithLeftBadge: Story = {
  render: () => (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 3,
        width: "100%",
        alignItems: "flex-start",
      }}
    >
      <SceneCard
        image={sceneThumbnail}
        sceneName="1st Place"
        coordinates="first.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        borderColor={gradient.gold}
        leftBadge="1"
        rightBadge={<Mana inline>10k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="2nd Place"
        coordinates="second.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        borderColor={gradient.silver}
        leftBadge="2"
        rightBadge={<Mana inline>7.5k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="3rd Place"
        coordinates="third.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        borderColor={gradient.bronze}
        leftBadge="3"
        rightBadge={<Mana inline>5k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
    </Box>
  ),
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
        sceneName="Simple Numbers and the text title is long and 2 lines"
        avatar={exampleAvatar}
        withShadow
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Emoji Badges"
        coordinates="1,95"
        avatar={exampleAvatar}
        withShadow
        leftBadge="🏆"
        rightBadge="🔥"
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Custom Components"
        coordinates="104,6"
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
        borderColor={gradient.gold}
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
        sceneName="Button on Hover and Long text Title"
        coordinates="button-hover.dcl.eth"
        avatar={exampleAvatar}
        withShadow
        leftBadge="6"
        rightBadge={<Mana inline>900</Mana>}
        showOnHover={["jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Both Badges on Hover and Long text Title"
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
        borderColor={gradient.bronze}
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

const TextBadgeExamples: Story = {
  render: () => (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 4,
        width: "100%",
        alignItems: "flex-start",
        padding: 3,
      }}
    >
      <SceneCard
        image={sceneThumbnail}
        sceneName="Text Badge - Best New"
        coordinates="featured.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        cornerBadge={<TextBadge text="Best New" />}
        rightBadge={<Mana inline>5k</Mana>}
        showOnHover={["location", "jumpInButton"]}
      />
      <SceneCard
        image={sceneThumbnail}
        sceneName="Text Badge - Featured"
        coordinates="featured2.eth.dcl"
        avatar={exampleAvatar}
        withShadow
        cornerBadge={<TextBadge text="Featured" />}
        rightBadge={<Mana inline>10k</Mana>}
        showOnHover={["location", "jumpInButton"]}
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
  BorderColors,
  CornerBadgeVariations,
  TextBadgeExamples,
  WithLeftBadge,
  BadgeVariations,
  RealWorldExamples,
  ShowOnHoverVariations,
}
