import { useState } from "react"
import { NFTCategory, NotificationType, Rarity } from "@dcl/schemas"
import Notifications from "./Notifications"
import { NotificationActiveTab } from "./types"
import { NotificationsProps } from "./Notifications.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  component: Notifications,
  title: "Decentraland UI/Notifications Toggle",
  tags: ["autodocs"],
  argTypes: {},
  /* render: (args) => (
    <Box sx={{ height: "400px" }}>
      <ModalContent {...args}>{args.children}</ModalContent>
    </Box>
  ), */
}

export default meta
type Story = StoryObj<NotificationsProps>

export const WithoutNewNotifications: Story = {
  name: "Without new notifications",
  args: {
    isOpen: false,
    isLoading: false,
    isOnboarding: false,
    items: [],
    locale: "en",
    activeTab: NotificationActiveTab.NEWEST,
    onChangeTab: (_e, newTab) => console.log(newTab),
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
  },
}

export const WithNewNotifications1: Story = {
  name: "With new notifications",
  args: {
    isOpen: false,
    isLoading: false,
    isOnboarding: false,
    items: [
      {
        id: "A",
        read: false,
        type: NotificationType.ITEM_SOLD,
        address: "0xA",
        timestamp: 1680108689 * 1000,
        metadata: {
          link: "https://market.decentraland.org/contracts/0x4c290f486bae507719c562b6b524bdb71a2570c9/tokens/1020",
          image:
            "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:atari_launch:atari_green_upper_body/thumbnail",
          rarity: "epic" as Rarity,
          seller: "0x8bc619e7f9ca9949b8440245fd9d8c4c002edf02",
          nftName: "Green Atari Tee",
          network: "ethereum",
          category: "wearable" as NFTCategory,
        },
        created_at: "2023-11-29T12:51:00.600Z",
        updated_at: "2023-11-29T12:51:00.600Z",
      },
    ],
    locale: "en",
    activeTab: NotificationActiveTab.NEWEST,
    onChangeTab: (_e, newTab) => console.log(newTab),
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
  },
}

export const Onboarding: Story = {
  name: "Onboarding",
  args: {
    isOpen: true,
    isLoading: false,
    isOnboarding: true,
    items: [
      {
        id: "A",
        read: false,
        type: NotificationType.ITEM_SOLD,
        address: "0xA",
        timestamp: 1680108689 * 1000,
        metadata: {
          link: "https://market.decentraland.org/contracts/0x4c290f486bae507719c562b6b524bdb71a2570c9/tokens/1020",
          image:
            "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:atari_launch:atari_green_upper_body/thumbnail",
          rarity: "epic" as Rarity,
          seller: "0x8bc619e7f9ca9949b8440245fd9d8c4c002edf02",
          nftName: "Green Atari Tee",
          network: "ethereum",
          category: "wearable" as NFTCategory,
        },
        created_at: "2023-11-29T12:51:00.600Z",
        updated_at: "2023-11-29T12:51:00.600Z",
      },
    ],
    locale: "en",
    activeTab: NotificationActiveTab.NEWEST,
    onChangeTab: (_e, newTab) => console.log(newTab),
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
  },
}

export const OpenNotLoading: Story = {
  name: "Open not loading",
  args: {
    isOpen: true,
    isLoading: false,
    isOnboarding: false,
    items: [
      {
        id: "AA",
        read: true,
        type: NotificationType.GOVERNANCE_AUTHORED_PROPOSAL_FINISHED,
        address: "0xA",
        timestamp: new Date().getTime(),
        metadata: {
          link: "https://decentraland.org/governance",
          title: "Test Governance Announcement",
          description: "Test description",
          proposalId: "AAA_PROPOSAL_111",
          proposalTitle: "Open Source all code using DAO funds",
        },
        created_at: "2023-11-29T12:51:00.600Z",
        updated_at: "2023-11-29T12:51:00.600Z",
      },
      {
        id: "B",
        read: true,
        type: NotificationType.ROYALTIES_EARNED,
        address: "0xA",
        timestamp: new Date().getTime(),
        metadata: {
          link: "https://market.decentraland.zone/contracts/0xb726634ed82ac04e6bca66b3b97cc41a2c10ec31/tokens/9",
          image:
            "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
          rarity: "common" as Rarity,
          network: "polygon",
          nftName: "NJacket",
          category: "wearable" as NFTCategory,
          royaltiesCut: "30000000000000000",
          royaltiesCollector: "0x2a39d4f68133491f0442496f601cde2a945b6d31",
        },
        created_at: "2023-11-29T12:51:00.600Z",
        updated_at: "2023-11-29T12:51:00.600Z",
      },
      {
        id: "A",
        read: true,
        type: NotificationType.ITEM_SOLD,
        address: "0xA",
        timestamp: new Date(
          new Date().setHours(new Date().getHours() - 19)
        ).getTime(),
        metadata: {
          link: "https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590",
          image:
            "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
          rarity: "epic" as Rarity,
          seller: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
          nftName: "Exclusive Binance Hoodie",
          network: "ethereum",
          category: "wearable" as NFTCategory,
        },
        created_at: "2023-11-29T12:51:00.600Z",
        updated_at: "2023-11-29T12:51:00.600Z",
      },
      {
        id: "A",
        read: true,
        type: NotificationType.ITEM_SOLD,
        address: "0xA",
        timestamp: new Date(
          new Date().setHours(new Date().getHours() - 19)
        ).getTime(),
        metadata: {
          link: "https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590",
          image:
            "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
          rarity: "epic" as Rarity,
          seller: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
          nftName: "Exclusive Binance Hoodie",
          network: "ethereum",
          category: "wearable" as NFTCategory,
        },
        created_at: "2023-11-29T12:51:00.600Z",
        updated_at: "2023-11-29T12:51:00.600Z",
      },
      {
        id: "A",
        read: true,
        type: NotificationType.ITEM_SOLD,
        address: "0xA",
        timestamp: new Date(
          new Date().setHours(new Date().getHours() - 19)
        ).getTime(),
        metadata: {
          link: "https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590",
          image:
            "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
          rarity: "epic" as Rarity,
          seller: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
          nftName: "Exclusive Binance Hoodie",
          network: "ethereum",
          category: "wearable" as NFTCategory,
        },
        created_at: "2023-11-29T12:51:00.600Z",
        updated_at: "2023-11-29T12:51:00.600Z",
      },
      {
        id: "A",
        read: true,
        type: NotificationType.ITEM_SOLD,
        address: "0xA",
        timestamp: new Date(
          new Date().setHours(new Date().getHours() - 19)
        ).getTime(),
        metadata: {
          link: "https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590",
          image:
            "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
          rarity: "epic" as Rarity,
          seller: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
          nftName: "Exclusive Binance Hoodie",
          network: "ethereum",
          category: "wearable" as NFTCategory,
        },
        created_at: "2023-11-29T12:51:00.600Z",
        updated_at: "2023-11-29T12:51:00.600Z",
      },
      {
        id: "AC",
        read: true,
        type: NotificationType.ITEM_SOLD,
        address: "0xA",
        timestamp: 1701123003 * 1000,
        metadata: {
          link: "https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590",
          image:
            "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
          rarity: "uncommon" as Rarity,
          seller: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
          nftName: "Binance US Hoodie",
          network: "ethereum",
          category: "wearable" as NFTCategory,
        },
        created_at: "2023-11-29T12:51:00.600Z",
        updated_at: "2023-11-29T12:51:00.600Z",
      },
      {
        id: "AS",
        read: true,
        type: NotificationType.ITEM_SOLD,
        address: "0xA",
        timestamp: 1701123003 * 1000,
        metadata: {
          link: "https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590",
          image:
            "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
          rarity: "uncommon" as Rarity,
          seller: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
          nftName: "Binance US Hoodie",
          network: "ethereum",
          category: "wearable" as NFTCategory,
        },
        created_at: "2023-11-29T12:51:00.600Z",
        updated_at: "2023-11-29T12:51:00.600Z",
      },
      {
        id: "AA",
        read: true,
        type: NotificationType.LAND_RENTED,
        address: "0xA",
        timestamp: new Date().getTime(),
        metadata: {
          description: "The rent of your LAND at 5,48 has ended.",
          link: "https://marketplace-url/contracts/0x42f4ba48791e2de32f5fbf553441c2672864bb33/tokens/random-token-id/manage",
          title: "Rent Period Ending",
          contract: "0x42f4ba48791e2de32f5fbf553441c2672864bb33",
          lessor: "0x24e5f44999c151f08609f8e27b2238c773c4d020",
          tenant: "0xd5359E309c47c8920C277d078d5F3c3DBeA1ef84",
          operator: "0xd5359E309c47c8920C277d078d5F3c3DBeA1ef84",
          startedAt: "1710447420",
          endedAt: "1710533820",
          tokenId: "random-token-id",
          land: "5,48",
        },
        created_at: "2023-11-29T12:51:00.600Z",
        updated_at: "2023-11-29T12:51:00.600Z",
      },
    ],
    locale: "en",
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
  },
  render: (args) => {
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    return (
      <Notifications
        {...args}
        activeTab={tab}
        onChangeTab={(_e, newTab) => setTab(newTab)}
      />
    )
  },
}
