import { useState } from "react"
import { Box } from "@mui/material"
import { Notifications } from "./NotificationsToggle"
import { NotificationsProps } from "./NotificationsToggle/Notifications.types"
import {
  allTypeOfNotifications,
  bidAcceptedNotificationData,
  bidReceivedNotificationPropsData,
  campaignGasPriceHigherThanExpectedNotificationData,
  campaignOutOfFundsNotificationData,
  campaignOutOfStockNotificationData,
  creditsClaimReminderNotificationData,
  creditsCompleteYourWeeklyGoalsNotificationData,
  creditsDoNotMissOutNotificationData,
  creditsExpireIn24HrsReminderNotificationData,
  creditsExpireSoonReminderNotificationData,
  eventStartedNotificationData,
  eventStartsSoonFutureStartNotificationData,
  eventStartsSoonPastStartNotificationData,
  giftNotificationData,
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
  referralInvitedUserAcceptedNotificationData,
  referralNewTierReachedNotificationData,
  rewardAssignedNotificationData,
  rewardDelayedNotificationData,
  rewardInProgressNotificationData,
  royalitesEarnedNotificationPropsData,
  streamingKeyExpiredNotificationData,
  streamingKeyResetNotificationData,
  streamingKeyRevokeNotificationData,
  streamingPlaceUpdatedNotificationData,
  streamingTimeExceededNotificationData,
  worldsAccessRestoredNotificationData,
  worldsAccessRestrictedNotificationData,
  worldsMissingResourcesNotificationData,
  worldsPermissionGrantedNotificationPropsData,
  worldsPermissionRevokedNotificationData,
} from "../../data/notifications"
import { shorten } from "../AddressField/utils"
import { NotificationActiveTab } from "./Notifications.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  component: Notifications,
  title: "Decentraland UI/Notifications Toggle",
  tags: ["autodocs"],
  argTypes: {},
  render: (args) => {
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    const [open, setOpen] = useState(false)
    return (
      <Box
        sx={{
          height: "35px",
          width: "200px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: ({ palette }) =>
            palette.mode === "light" ? "#f0f0f0" : "#1a091c",
        }}
      >
        <Notifications
          isOpen={open}
          isLoading={false}
          isOnboarding={false}
          items={[]}
          locale="en"
          activeTab={tab}
          onChangeTab={(_e, newTab) => setTab(newTab)}
          onClick={() => setOpen(!open)}
          onBegin={() => console.log("Begin")}
          onClose={() => setOpen(open)}
          {...args}
        />
      </Box>
    )
  },
}

type Story = StoryObj<NotificationsProps>

const WithoutNewNotifications: Story = {
  name: "Without new notifications",
  args: {
    items: [],
  },
}

const WithNewNotifications: Story = {
  name: "With new notifications",
  args: {
    items: [itemSoldNotificationPropsData],
  },
}

const Onboarding: Story = {
  name: "Onboarding",
  args: {
    isOnboarding: true,
    items: [eventStartedNotificationData],
  },
}

const OpenLoading: Story = {
  name: "Open but loading",
  args: {
    isLoading: true,
    items: [],
  },
}

const OpenNotLoadingButEmpty: Story = {
  name: "Open not loading but empty",
  args: {
    items: [],
  },
}

const EventsNotifications: Story = {
  name: "Events Notifications",
  args: {
    items: [
      eventStartedNotificationData,
      { ...eventStartsSoonFutureStartNotificationData, read: false },
      eventStartsSoonPastStartNotificationData,
    ],
  },
}

const GovernanceNotifications: Story = {
  name: "Governance Notifications",
  args: {
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
  },
}

const LandNotifications: Story = {
  name: "Land Notifications",
  args: {
    items: [
      { ...landRentalEndedNotificationData, read: false },
      landRentedNotificationData,
    ],
    renderProfile: (address: string) => shorten(address),
  },
}

const TransferNotifications: Story = {
  name: "Transfer Notifications",
  args: {
    items: [giftNotificationData],
    renderProfile: (address: string) => shorten(address),
  },
}

const MarketplaceNotifications: Story = {
  name: "Marketplace Notifications",
  args: {
    items: [
      { ...bidAcceptedNotificationData, read: false },
      bidReceivedNotificationPropsData,
      itemSoldNotificationPropsData,
      royalitesEarnedNotificationPropsData,
    ],
  },
}

const RewardsNotifications: Story = {
  name: "Rewards Notifications",
  args: {
    items: [
      rewardAssignedNotificationData,
      rewardInProgressNotificationData,
      rewardDelayedNotificationData,
      campaignOutOfFundsNotificationData,
      campaignOutOfStockNotificationData,
      campaignGasPriceHigherThanExpectedNotificationData,
    ],
  },
}

const CreditsNotifications: Story = {
  name: "Credits Notifications",
  args: {
    items: [
      creditsCompleteYourWeeklyGoalsNotificationData,
      creditsDoNotMissOutNotificationData,
      creditsClaimReminderNotificationData,
      creditsExpireSoonReminderNotificationData,
      creditsExpireIn24HrsReminderNotificationData,
    ],
  },
}

const ReferralNotifications: Story = {
  name: "Referral Notifications",
  args: {
    items: [
      referralNewTierReachedNotificationData,
      referralInvitedUserAcceptedNotificationData,
    ],
  },
}

const StreamingNotifications: Story = {
  name: "Streaming Notifications",
  args: {
    items: [
      streamingKeyExpiredNotificationData,
      streamingKeyResetNotificationData,
      streamingKeyRevokeNotificationData,
      streamingPlaceUpdatedNotificationData,
      streamingTimeExceededNotificationData,
    ],
  },
}

const WorldsNotifications: Story = {
  name: "Worlds Notifications",
  args: {
    items: [
      worldsAccessRestoredNotificationData,
      worldsAccessRestrictedNotificationData,
      worldsMissingResourcesNotificationData,
      worldsPermissionGrantedNotificationPropsData,
      worldsPermissionRevokedNotificationData,
    ],
  },
}

const OpenNotLoading: Story = {
  name: "Open not loading",
  args: {
    items: allTypeOfNotifications,
  },
}

const OnlySeen: Story = {
  name: "Only seen",
  args: {
    items: allTypeOfNotifications.map((n) => {
      const pastStartDate = new Date()
      pastStartDate.setFullYear(pastStartDate.getFullYear() - 1)
      return { ...n, read: true, timestamp: pastStartDate.getTime() }
    }),
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  WithoutNewNotifications,
  WithNewNotifications,
  Onboarding,
  OpenLoading,
  OpenNotLoadingButEmpty,
  EventsNotifications,
  GovernanceNotifications,
  LandNotifications,
  TransferNotifications,
  MarketplaceNotifications,
  RewardsNotifications,
  CreditsNotifications,
  ReferralNotifications,
  StreamingNotifications,
  WorldsNotifications,
  OpenNotLoading,
  OnlySeen,
}
