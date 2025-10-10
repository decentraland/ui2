import { AccessRestoredIcon } from "./AccessRestoredIcon"
import { AccessRestrictedIcon } from "./AccessRestrictedIcon"
import { BidAcceptedIcon } from "./BidAcceptedIcon"
import { BidReceivedIcon } from "./BidReceivedIcon"
import { CoauthorIcon } from "./CoauthorIcon"
import { EmptyInboxIcon } from "./EmptyInboxIcon"
import { EventCancelledIcon } from "./EventCancelledIcon"
import { EventStartedIcon } from "./EventStartedIcon"
import { EventStartsSoonIcon } from "./EventStartsSoonIcon"
import { GovernanceIcon } from "./GovernanceIcon"
import { HistoryIcon } from "./HistoryIcon"
import { ItemAirdroppedIcon } from "./ItemAirdroppedIcon"
import { ItemSoldIcon } from "./ItemSoldIcon"
import { LandRentedIcon } from "./LandRentedIcon"
import { ManaMainnetIcon } from "./ManaMainnetIcon"
import { ManaPolygonIcon } from "./ManaPolygonIcon"
import { MissingResourcesIcon } from "./MissingResourcesIcon"
import { NewCommentIcon } from "./NewCommentIcon"
import { NewNotificationIcon } from "./NewNotificationIcon"
import { NotificationBellActiveIcon } from "./NotificationBellActiveIcon"
import { NotificationBellIcon } from "./NotificationBellIcon"
import { PermissionGrantedIcon } from "./PermissionGrantedIcon"
import { PermissionRevokedIcon } from "./PermissionRevokedIcon"
import { PitchIcon } from "./PitchIcon"
import { ProjectEnactedIcon } from "./ProjectEnactedIcon"
import { ProposalFinishedIcon } from "./ProposalFinishedIcon"
import { ReferralInvitedUserAcceptedIcon } from "./ReferralInvitedUserAcceptedIcon"
import { ReferralInviteFriendsIcon } from "./ReferralInviteFriendsIcon"
import { RentPeriodEndingIcon } from "./RentPeriodEndingIcon"
import { RewardIcon } from "./RewardIcon"
import { StreamingIcon } from "./StreamingIcon"
import { TenderIcon } from "./TenderIcon"
import { VotingEndedIcon } from "./VotingEndedIcon"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AccessRestoredIcon> = {
  title: "Decentraland UI/Icons/Notifications",
  component: AccessRestoredIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

type Story = StoryObj<typeof AccessRestoredIcon>

const AccessRestored: Story = {}

const AccessRestricted: Story = {
  render: () => <AccessRestrictedIcon />,
}

const BidAccepted: Story = {
  render: () => <BidAcceptedIcon />,
}

const BidReceived: Story = {
  render: () => <BidReceivedIcon />,
}

const Coauthor: Story = {
  render: () => <CoauthorIcon />,
}

const EmptyInbox: Story = {
  render: () => <EmptyInboxIcon />,
}

const EventCancelled: Story = {
  render: () => <EventCancelledIcon />,
}

const EventStarted: Story = {
  render: () => <EventStartedIcon />,
}

const EventStartsSoon: Story = {
  render: () => <EventStartsSoonIcon />,
}

const Governance: Story = {
  render: () => <GovernanceIcon />,
}

const History: Story = {
  render: () => <HistoryIcon />,
}

const ItemAirdropped: Story = {
  render: () => <ItemAirdroppedIcon />,
}

const ItemSold: Story = {
  render: () => <ItemSoldIcon />,
}

const LandRented: Story = {
  render: () => <LandRentedIcon />,
}

const ManaMainnet: Story = {
  render: () => <ManaMainnetIcon />,
}

const ManaPolygon: Story = {
  render: () => <ManaPolygonIcon />,
}

const MissingResources: Story = {
  render: () => <MissingResourcesIcon />,
}

const NewComment: Story = {
  render: () => <NewCommentIcon />,
}

const NewNotification: Story = {
  render: () => <NewNotificationIcon />,
}

const NotificationBellActive: Story = {
  render: () => <NotificationBellActiveIcon />,
}

const NotificationBell: Story = {
  render: () => <NotificationBellIcon />,
}

const PermissionGranted: Story = {
  render: () => <PermissionGrantedIcon />,
}

const PermissionRevoked: Story = {
  render: () => <PermissionRevokedIcon />,
}

const Pitch: Story = {
  render: () => <PitchIcon />,
}

const ProjectEnacted: Story = {
  render: () => <ProjectEnactedIcon />,
}

const ProposalFinished: Story = {
  render: () => <ProposalFinishedIcon />,
}

const ReferralInvitedUserAccepted: Story = {
  render: () => <ReferralInvitedUserAcceptedIcon />,
}

const ReferralInviteFriends: Story = {
  render: () => <ReferralInviteFriendsIcon />,
}

const RentPeriodEnding: Story = {
  render: () => <RentPeriodEndingIcon />,
}

const Reward: Story = {
  render: () => <RewardIcon />,
}

const Streaming: Story = {
  render: () => <StreamingIcon />,
}

const Tender: Story = {
  render: () => <TenderIcon />,
}

const VotingEnded: Story = {
  render: () => <VotingEndedIcon />,
}

const AllNotificationsIcons: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <AccessRestoredIcon />
      <AccessRestrictedIcon />
      <BidAcceptedIcon />
      <BidReceivedIcon />
      <CoauthorIcon />
      <EmptyInboxIcon />
      <EventCancelledIcon />
      <EventStartedIcon />
      <EventStartsSoonIcon />
      <GovernanceIcon />
      <HistoryIcon />
      <ItemAirdroppedIcon />
      <ItemSoldIcon />
      <LandRentedIcon />
      <ManaMainnetIcon />
      <ManaPolygonIcon />
      <MissingResourcesIcon />
      <NewCommentIcon />
      <NewNotificationIcon />
      <NotificationBellActiveIcon />
      <NotificationBellIcon />
      <PermissionGrantedIcon />
      <PermissionRevokedIcon />
      <PitchIcon />
      <ProjectEnactedIcon />
      <ProposalFinishedIcon />
      <ReferralInvitedUserAcceptedIcon />
      <ReferralInviteFriendsIcon />
      <RentPeriodEndingIcon />
      <RewardIcon />
      <StreamingIcon />
      <TenderIcon />
      <VotingEndedIcon />
    </div>
  ),
}

const LargeNotificationsIcons: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <AccessRestoredIcon fontSize="large" />
      <AccessRestrictedIcon fontSize="large" />
      <BidAcceptedIcon fontSize="large" />
      <BidReceivedIcon fontSize="large" />
      <CoauthorIcon fontSize="large" />
      <EmptyInboxIcon fontSize="large" />
      <EventCancelledIcon fontSize="large" />
      <EventStartedIcon fontSize="large" />
      <EventStartsSoonIcon fontSize="large" />
      <GovernanceIcon fontSize="large" />
      <HistoryIcon fontSize="large" />
      <ItemAirdroppedIcon fontSize="large" />
      <ItemSoldIcon fontSize="large" />
      <LandRentedIcon fontSize="large" />
      <ManaMainnetIcon fontSize="large" />
      <ManaPolygonIcon fontSize="large" />
      <MissingResourcesIcon fontSize="large" />
      <NewCommentIcon fontSize="large" />
      <NewNotificationIcon fontSize="large" />
      <NotificationBellActiveIcon fontSize="large" />
      <NotificationBellIcon fontSize="large" />
      <PermissionGrantedIcon fontSize="large" />
      <PermissionRevokedIcon fontSize="large" />
      <PitchIcon fontSize="large" />
      <ProjectEnactedIcon fontSize="large" />
      <ProposalFinishedIcon fontSize="large" />
      <ReferralInvitedUserAcceptedIcon fontSize="large" />
      <ReferralInviteFriendsIcon fontSize="large" />
      <RentPeriodEndingIcon fontSize="large" />
      <RewardIcon fontSize="large" />
      <StreamingIcon fontSize="large" />
      <TenderIcon fontSize="large" />
      <VotingEndedIcon fontSize="large" />
    </div>
  ),
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  AccessRestored,
  AccessRestricted,
  BidAccepted,
  BidReceived,
  Coauthor,
  EmptyInbox,
  EventCancelled,
  EventStarted,
  EventStartsSoon,
  Governance,
  History,
  ItemAirdropped,
  ItemSold,
  LandRented,
  ManaMainnet,
  ManaPolygon,
  MissingResources,
  NewComment,
  NewNotification,
  NotificationBellActive,
  NotificationBell,
  PermissionGranted,
  PermissionRevoked,
  Pitch,
  ProjectEnacted,
  ProposalFinished,
  ReferralInvitedUserAccepted,
  ReferralInviteFriends,
  RentPeriodEnding,
  Reward,
  Streaming,
  Tender,
  VotingEnded,
  AllNotificationsIcons,
  LargeNotificationsIcons,
}
