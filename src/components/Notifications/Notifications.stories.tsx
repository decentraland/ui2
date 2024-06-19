import { useState } from "react"
import { NFTCategory, NotificationType, Rarity } from "@dcl/schemas"
import { Box } from "@mui/material"
import Notifications from "./Notifications"
import { NotificationActiveTab } from "./types"
import {
  allTypeOfNotifications,
  bidAcceptedNotificationData,
  bidReceivedNotificationPropsData,
  eventStartedNotificationData,
  eventStartsSoonFutureStartNotificationData,
  eventStartsSoonPastStartNotificationData,
  governanceAnnouncementNotificationData,
  governanceAuthoredProposalFinishedNotificationData,
  governanceCoauthorRequestedNotificationData,
  governanceNewCommentOnProjectUpdateNotificationData,
  governanceNewCommentOnProposalNotificationData,
  governancePitchPassedNotificationData,
  governanceProposalEnactedNotificationData,
  governanceTenderPassedNotificationData,
  governanceVotingEndedVoterNotificationData,
  itemSoldNotificationPropsData,
  landRentalEndedNotificationData,
  landRentedNotificationData,
  rewardAssignedNotificationData,
  royalitesEarnedNotificationPropsData,
  worldsAccessRestoredNotificationData,
  worldsAccessRestrictedNotificationData,
  worldsMissingResourcesNotificationData,
  worldsPermissionGrantedNotificationPropsData,
  worldsPermissionRevokedNotificationData,
} from "../../data/notifications"
import { shorten } from "../AddressField/utils"
import { NotificationsProps } from "./Notifications.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  component: Notifications,
  title: "Decentraland UI/Notifications Toggle",
  tags: ["autodocs"],
  argTypes: {},
  render: (args) => {
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    return (
      <Box sx={{ height: "400px" }}>
        <Notifications
          isOpen={false}
          isLoading={false}
          isOnboarding={false}
          items={[]}
          locale="en"
          activeTab={tab}
          onChangeTab={(_e, newTab) => setTab(newTab)}
          onClick={() => console.log("Toggle button")}
          onBegin={() => console.log("Begin")}
          onClose={(_, m) => console.log(m)}
          {...args}
        />
      </Box>
    )
  },
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

export const WithNewNotifications: Story = {
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
          category: NFTCategory.WEARABLE,
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
    items: [eventStartedNotificationData],
    locale: "en",
    activeTab: NotificationActiveTab.NEWEST,
    onChangeTab: (_e, newTab) => console.log(newTab),
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
  },
}

export const OpenLoading: Story = {
  name: "Open but loading",
  args: {
    isOpen: true,
    isLoading: true,
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

export const OpenNotLoadingButEmpty: Story = {
  name: "Open not loading but empty",
  args: {
    isOpen: true,
    isLoading: false,
    isOnboarding: false,
    items: [],
    locale: "en",
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
  },
}

export const EventsNotifications: Story = {
  name: "Events Notifications",
  args: {
    isOpen: true,
    isLoading: false,
    isOnboarding: false,
    items: [
      eventStartedNotificationData,
      { ...eventStartsSoonFutureStartNotificationData, read: false },
      eventStartsSoonPastStartNotificationData,
    ],
    locale: "en",
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
  },
  render: (args) => {
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    return (
      <Box sx={{ height: "400px" }}>
        <Notifications
          {...args}
          activeTab={tab}
          onChangeTab={(_e, newTab) => setTab(newTab)}
        />
      </Box>
    )
  },
}

export const GovernanceNotifications: Story = {
  name: "Governance Notifications",
  args: {
    isOpen: true,
    isLoading: false,
    isOnboarding: false,
    items: [
      { ...governanceAnnouncementNotificationData, read: false },
      governanceAuthoredProposalFinishedNotificationData,
      governanceCoauthorRequestedNotificationData,
      governanceNewCommentOnProjectUpdateNotificationData,
      governanceNewCommentOnProposalNotificationData,
      governancePitchPassedNotificationData,
      governanceProposalEnactedNotificationData,
      governanceTenderPassedNotificationData,
      governanceVotingEndedVoterNotificationData,
    ],
    locale: "en",
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
  },
  render: (args) => {
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    return (
      <Box sx={{ height: "400px" }}>
        <Notifications
          {...args}
          activeTab={tab}
          onChangeTab={(_e, newTab) => setTab(newTab)}
        />
      </Box>
    )
  },
}

export const LandNotifications: Story = {
  name: "Land Notifications",
  args: {
    isOpen: true,
    isLoading: false,
    isOnboarding: false,
    items: [
      { ...landRentalEndedNotificationData, read: false },
      landRentedNotificationData,
    ],
    locale: "en",
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
    renderProfile: (address: string) => shorten(address),
  },
  render: (args) => {
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    return (
      <Box sx={{ height: "400px" }}>
        <Notifications
          {...args}
          activeTab={tab}
          onChangeTab={(_e, newTab) => setTab(newTab)}
        />
      </Box>
    )
  },
}

export const MarketplaceNotifications: Story = {
  name: "Marketplace Notifications",
  args: {
    isOpen: true,
    isLoading: false,
    isOnboarding: false,
    items: [
      { ...bidAcceptedNotificationData, read: false },
      bidReceivedNotificationPropsData,
      itemSoldNotificationPropsData,
      royalitesEarnedNotificationPropsData,
    ],
    locale: "en",
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
  },
  render: (args) => {
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    return (
      <Box sx={{ height: "400px" }}>
        <Notifications
          {...args}
          activeTab={tab}
          onChangeTab={(_e, newTab) => setTab(newTab)}
        />
      </Box>
    )
  },
}

export const RewardsNotifications: Story = {
  name: "Rewards Notifications",
  args: {
    isOpen: true,
    isLoading: false,
    isOnboarding: false,
    items: [rewardAssignedNotificationData],
    locale: "en",
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
  },
  render: (args) => {
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    return (
      <Box sx={{ height: "400px" }}>
        <Notifications
          {...args}
          activeTab={tab}
          onChangeTab={(_e, newTab) => setTab(newTab)}
        />
      </Box>
    )
  },
}

export const WorldsNotifications: Story = {
  name: "Worlds Notifications",
  args: {
    isOpen: true,
    isLoading: false,
    isOnboarding: false,
    items: [
      worldsAccessRestoredNotificationData,
      worldsAccessRestrictedNotificationData,
      worldsMissingResourcesNotificationData,
      worldsPermissionGrantedNotificationPropsData,
      worldsPermissionRevokedNotificationData,
    ],
    locale: "en",
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
  },
  render: (args) => {
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    return (
      <Box sx={{ height: "400px" }}>
        <Notifications
          {...args}
          activeTab={tab}
          onChangeTab={(_e, newTab) => setTab(newTab)}
        />
      </Box>
    )
  },
}

export const OpenNotLoading: Story = {
  name: "Open not loading",
  args: {
    isOpen: true,
    isLoading: false,
    isOnboarding: false,
    items: allTypeOfNotifications,
    locale: "en",
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
  },
  render: (args) => {
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    return (
      <Box sx={{ height: "400px" }}>
        <Notifications
          {...args}
          activeTab={tab}
          onChangeTab={(_e, newTab) => setTab(newTab)}
        />
      </Box>
    )
  },
}

export const OnlySeen: Story = {
  name: "Only seen",
  args: {
    isOpen: true,
    isLoading: false,
    isOnboarding: false,
    items: allTypeOfNotifications.map((n) => {
      const pastStartDate = new Date()
      pastStartDate.setFullYear(pastStartDate.getFullYear() - 1)
      return { ...n, read: true, timestamp: pastStartDate.getTime() }
    }),
    locale: "en",
    onClick: () => console.log("Toggle button"),
    onBegin: () => console.log("Begin"),
    onClose: (_, m) => console.log(m),
  },
  render: (args) => {
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    return (
      <Box sx={{ height: "400px" }}>
        <Notifications
          {...args}
          activeTab={tab}
          onChangeTab={(_e, newTab) => setTab(newTab)}
        />
      </Box>
    )
  },
}
