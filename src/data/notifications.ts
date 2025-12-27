import { NFTCategory, NotificationType, Rarity } from "@dcl/schemas"
import {
  CreditsExpireIn24HrsReminderNotificationProps,
  CreditsExpireSoonReminderNotificationProps,
} from "components/Notifications/NotificationTypes/Credits/types"
import {
  BidAcceptedNotificationProps,
  BidReceivedNotificationProps,
  CampaignGasPriceHigherThanExpectedNotificationProps,
  CampaignOutOfFundsNotificationProps,
  CampaignOutOfStockNotificationProps,
  CreditsClaimReminderNotificationProps,
  CreditsCompleteYourWeeklyGoalsNotificationProps,
  CreditsDoNotMissOutNotificationProps,
  EventsStartedNotificationProps,
  EventsStartsSoonNotificationProps,
  GiftNotificationProps,
  GovernanceAnnouncementNotificationProps,
  GovernanceAuthoredProposalFinishedNotificationProps,
  GovernanceCoauthorRequestedNotificationProps,
  GovernanceNewCommentOnProjectUpdateNotificationProps,
  GovernanceNewCommentOnProposalNotificationProps,
  GovernancePitchPassedNotificationProps,
  GovernanceProposalEnactedNotificationProps,
  GovernanceTenderPassedNotificationProps,
  GovernanceVotingEndedVoterNotificationProps,
  ItemSoldNotificationProps,
  LandRentalEndedNotificationProps,
  LandRentedNotificationProps,
  ReferralInvitedUsersAcceptedNotificationProps,
  ReferralNewTierReachedNotificationProps,
  RewardAssignedNotificationProps,
  RewardDelayedNotificationProps,
  RewardInProgressNotificationProps,
  RoyalitesEarnedNotificationProps,
  StreamingKeyExpiredNotificationProps,
  StreamingKeyResetNotificationProps,
  StreamingKeyRevokeNotificationProps,
  StreamingPlaceUpdatedNotificationProps,
  StreamingTimeExceededNotificationProps,
  TipNotificationProps,
  WorldsAccessRestoredNotificationProps,
  WorldsAccessRestrictedNotificationProps,
  WorldsMissingResourcesNotificationProps,
  WorldsPermissionGrantedNotificationProps,
  WorldsPermissionRevokedNotificationProps,
} from "../components/Notifications/types"

const futureStartDate = new Date()
futureStartDate.setSeconds(futureStartDate.getSeconds() + 120)

const pastStartDate = new Date()
pastStartDate.setSeconds(pastStartDate.getSeconds() - 50)

const bidAcceptedNotificationData: BidAcceptedNotificationProps = {
  id: NotificationType.BID_ACCEPTED,
  read: true,
  type: NotificationType.BID_ACCEPTED,
  address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
  timestamp: new Date().getTime(),
  metadata: {
    link: "https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590",
    image:
      "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
    rarity: Rarity.UNIQUE,
    nftName: "Exclusive Binance Hoodie",
    network: "ethereum",
    category: NFTCategory.WEARABLE,
    price: "78960000000000000000",
  },
  created_at: "2023-11-29T12:51:00.600Z",
  updated_at: "2023-11-29T12:51:00.600Z",
}

const bidReceivedNotificationPropsData: BidReceivedNotificationProps = {
  id: NotificationType.BID_RECEIVED,
  read: true,
  type: NotificationType.BID_RECEIVED,
  address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
  timestamp: new Date().getTime(),
  metadata: {
    link: "https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590",
    image:
      "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
    rarity: Rarity.UNIQUE,
    nftName: "Exclusive Binance Hoodie",
    network: "polygon",
    category: NFTCategory.WEARABLE,
    price: "78960000000000000000",
  },
  created_at: "2023-11-29T12:51:00.600Z",
  updated_at: "2023-11-29T12:51:00.600Z",
}

const campaignGasPriceHigherThanExpectedNotificationData: CampaignGasPriceHigherThanExpectedNotificationProps =
  {
    id: NotificationType.REWARD_CAMPAIGN_GAS_PRICE_HIGHER_THAN_EXPECTED,
    read: true,
    type: NotificationType.REWARD_CAMPAIGN_GAS_PRICE_HIGHER_THAN_EXPECTED,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      campaignName: "Cool Campaign",
      link: "https://decentraland.zone/rewards/campaign/?id=e9b39fdb-1bf1-490a-855e-f5e6c63a4525",
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const campaignOutOfFundsNotificationData: CampaignOutOfFundsNotificationProps =
  {
    id: NotificationType.REWARD_CAMPAIGN_OUT_OF_FUNDS,
    read: true,
    type: NotificationType.REWARD_CAMPAIGN_OUT_OF_FUNDS,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      campaignName: "Cool Campaign",
      link: "https://decentraland.zone/rewards/campaign/?id=e9b39fdb-1bf1-490a-855e-f5e6c63a4525",
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const campaignOutOfStockNotificationData: CampaignOutOfStockNotificationProps =
  {
    id: NotificationType.REWARD_CAMPAIGN_OUT_OF_STOCK,
    read: true,
    type: NotificationType.REWARD_CAMPAIGN_OUT_OF_STOCK,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      campaignName: "Cool Campaign",
      link: "https://decentraland.zone/rewards/campaign/?id=e9b39fdb-1bf1-490a-855e-f5e6c63a4525",
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const eventStartedNotificationData: EventsStartedNotificationProps = {
  id: NotificationType.EVENTS_STARTED,
  read: true,
  type: NotificationType.EVENTS_STARTED,
  address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
  timestamp: new Date().getTime(),
  metadata: {
    link: "https://decentraland.org/events/event/?id=d98222c5-3626-4742-9887-265fa72dac08",
    name: "Decentraland Events",
    image:
      "https://events-assets-099ac00.decentraland.org/poster/083771e26666f90b.jpg",
  },
  created_at: "2023-11-29T12:51:00.600Z",
  updated_at: "2023-11-29T12:51:00.600Z",
}

const eventStartsSoonFutureStartNotificationData: EventsStartsSoonNotificationProps =
  {
    id: NotificationType.EVENTS_STARTS_SOON + "future",
    read: true,
    type: NotificationType.EVENTS_STARTS_SOON,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      link: "https://decentraland.org/events/event/?id=d98222c5-3626-4742-9887-265fa72dac08",
      name: "Decentraland Events",
      image:
        "https://events-assets-099ac00.decentraland.org/poster/083771e26666f90b.jpg",
      startsAt: futureStartDate.toString(),
      endsAt: "2025-01-24T13:22:00.600Z",
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const eventStartsSoonPastStartNotificationData: EventsStartsSoonNotificationProps =
  {
    id: NotificationType.EVENTS_STARTS_SOON + "past",
    read: true,
    type: NotificationType.EVENTS_STARTS_SOON,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      link: "https://decentraland.org/events/event/?id=d98222c5-3626-4742-9887-265fa72dac08",
      name: "Decentraland Events - Past",
      image:
        "https://events-assets-099ac00.decentraland.org/poster/083771e26666f90b.jpg",
      startsAt: pastStartDate.toString(),
      endsAt: "2025-01-24T13:22:00.600Z",
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const governanceAnnouncementNotificationData: GovernanceAnnouncementNotificationProps =
  {
    id: NotificationType.GOVERNANCE_ANNOUNCEMENT,
    read: true,
    type: NotificationType.GOVERNANCE_ANNOUNCEMENT,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      link: "https://decentraland.org/governance",
      title: "Test Governance Announcement",
      description: "Test description",
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const governanceAuthoredProposalFinishedNotificationData: GovernanceAuthoredProposalFinishedNotificationProps =
  {
    id: NotificationType.GOVERNANCE_AUTHORED_PROPOSAL_FINISHED,
    read: true,
    type: NotificationType.GOVERNANCE_AUTHORED_PROPOSAL_FINISHED,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
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
  }

const governanceCoauthorRequestedNotificationData: GovernanceCoauthorRequestedNotificationProps =
  {
    id: NotificationType.GOVERNANCE_COAUTHOR_REQUESTED,
    read: true,
    type: NotificationType.GOVERNANCE_COAUTHOR_REQUESTED,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
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
  }

const governanceNewCommentOnProjectUpdateNotificationData: GovernanceNewCommentOnProposalNotificationProps =
  {
    id: NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROPOSAL,
    read: true,
    type: NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROPOSAL,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
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
  }

const governanceNewCommentOnProposalNotificationData: GovernanceNewCommentOnProjectUpdateNotificationProps =
  {
    id: NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROJECT_UPDATE,
    read: true,
    type: NotificationType.GOVERNANCE_NEW_COMMENT_ON_PROJECT_UPDATE,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
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
  }

const governancePitchPassedNotificationData: GovernancePitchPassedNotificationProps =
  {
    id: NotificationType.GOVERNANCE_PROPOSAL_ENACTED,
    read: true,
    type: NotificationType.GOVERNANCE_PITCH_PASSED,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
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
  }

const governanceProposalEnactedNotificationData: GovernanceProposalEnactedNotificationProps =
  {
    id: NotificationType.GOVERNANCE_PROPOSAL_ENACTED,
    read: true,
    type: NotificationType.GOVERNANCE_PROPOSAL_ENACTED,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
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
  }

const governanceTenderPassedNotificationData: GovernanceTenderPassedNotificationProps =
  {
    id: NotificationType.GOVERNANCE_TENDER_PASSED,
    read: true,
    type: NotificationType.GOVERNANCE_TENDER_PASSED,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
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
  }

const governanceVotingEndedVoterNotificationData: GovernanceVotingEndedVoterNotificationProps =
  {
    id: NotificationType.GOVERNANCE_VOTING_ENDED_VOTER,
    read: true,
    type: NotificationType.GOVERNANCE_VOTING_ENDED_VOTER,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
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
  }

const itemSoldNotificationPropsData: ItemSoldNotificationProps = {
  id: NotificationType.ITEM_SOLD,
  read: true,
  type: NotificationType.ITEM_SOLD,
  address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
  timestamp: new Date().getTime(),
  metadata: {
    link: "https://market.decentraland.org/contracts/0xa8ee490e4c4da48cc1653502c1a77479d4d818de/tokens/590",
    image:
      "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
    rarity: Rarity.LEGENDARY,
    seller: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    nftName: "Exclusive Binance Hoodie",
    network: "polygon",
    category: NFTCategory.WEARABLE,
  },
  created_at: "2023-11-29T12:51:00.600Z",
  updated_at: "2023-11-29T12:51:00.600Z",
}

const landRentalEndedNotificationData: LandRentalEndedNotificationProps = {
  id: NotificationType.LAND_RENTAL_ENDED,
  read: true,
  type: NotificationType.LAND_RENTAL_ENDED,
  address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
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
}

const landRentedNotificationData: LandRentedNotificationProps = {
  id: NotificationType.LAND_RENTED,
  read: true,
  type: NotificationType.LAND_RENTED,
  address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
  timestamp: new Date().getTime(),
  metadata: {
    description: "The rent of your LAND at 5,48 has ended.",
    link: "https://marketplace-url/contracts/0x42f4ba48791e2de32f5fbf553441c2672864bb33/tokens/random-token-id/manage",
    title: "Rented LAND",
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
}

const rewardAssignedNotificationData: RewardAssignedNotificationProps = {
  id: NotificationType.REWARD_ASSIGNED,
  read: true,
  type: NotificationType.REWARD_ASSIGNED,
  address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
  timestamp: new Date().getTime(),
  metadata: {
    tokenImage:
      "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
    tokenRarity: Rarity.MYTHIC,
    tokenName: "NJacket",
  },
  created_at: "2023-11-29T12:51:00.600Z",
  updated_at: "2023-11-29T12:51:00.600Z",
}

const rewardDelayedNotificationData: RewardDelayedNotificationProps = {
  id: NotificationType.REWARD_DELAYED,
  read: true,
  type: NotificationType.REWARD_DELAYED,
  address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
  timestamp: new Date().getTime(),
  metadata: {
    tokenImage:
      "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
    tokenRarity: Rarity.MYTHIC,
    tokenName: "NJacket",
  },
  created_at: "2023-11-29T12:51:00.600Z",
  updated_at: "2023-11-29T12:51:00.600Z",
}

const rewardInProgressNotificationData: RewardInProgressNotificationProps = {
  id: NotificationType.REWARD_IN_PROGRESS,
  read: true,
  type: NotificationType.REWARD_IN_PROGRESS,
  address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
  timestamp: new Date().getTime(),
  metadata: {
    tokenImage:
      "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
    tokenRarity: Rarity.MYTHIC,
    tokenName: "NJacket",
  },
  created_at: "2023-11-29T12:51:00.600Z",
  updated_at: "2023-11-29T12:51:00.600Z",
}

const royalitesEarnedNotificationPropsData: RoyalitesEarnedNotificationProps = {
  id: NotificationType.ROYALTIES_EARNED,
  read: true,
  type: NotificationType.ROYALTIES_EARNED,
  address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
  timestamp: new Date().getTime(),
  metadata: {
    link: "https://market.decentraland.zone/contracts/0xb726634ed82ac04e6bca66b3b97cc41a2c10ec31/tokens/9",
    image:
      "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
    rarity: Rarity.MYTHIC,
    network: "polygon",
    nftName: "NJacket",
    category: NFTCategory.WEARABLE,
    royaltiesCut: "30000000000000000",
    royaltiesCollector: "0x2a39d4f68133491f0442496f601cde2a945b6d31",
  },
  created_at: "2023-11-29T12:51:00.600Z",
  updated_at: "2023-11-29T12:51:00.600Z",
}

const streamingKeyExpiredNotificationData: StreamingKeyExpiredNotificationProps =
  {
    id: NotificationType.STREAMING_KEY_EXPIRED,
    read: true,
    type: NotificationType.STREAMING_KEY_EXPIRED,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      title: "Stream Key Expired",
      description: "Your stream key has expired",
      position: "5,48",
      worldName: "test-world.dcl.eth",
      isWorld: false,
      url: "https://decentraland.org/world/test-world.dcl.eth",
      address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const streamingKeyResetNotificationData: StreamingKeyResetNotificationProps = {
  id: NotificationType.STREAMING_KEY_RESET,
  read: true,
  type: NotificationType.STREAMING_KEY_RESET,
  address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
  timestamp: new Date().getTime(),
  metadata: {
    title: "Stream Key Reset",
    description: "Your stream key has been reset",
    position: "5,48",
    worldName: "test-world.dcl.eth",
    isWorld: true,
    url: "https://decentraland.org/world/test-world.dcl.eth",
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
  },
  created_at: "2023-11-29T12:51:00.600Z",
  updated_at: "2023-11-29T12:51:00.600Z",
}

const streamingKeyRevokeNotificationData: StreamingKeyRevokeNotificationProps =
  {
    id: NotificationType.STREAMING_KEY_REVOKE,
    read: true,
    type: NotificationType.STREAMING_KEY_REVOKE,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      title: "Stream Key Revoked",
      description: "Your stream key has been revoked",
      position: "5,48",
      worldName: "test-world.dcl.eth",
      isWorld: false,
      url: "https://decentraland.org/world/test-world.dcl.eth",
      address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const streamingPlaceUpdatedNotificationData: StreamingPlaceUpdatedNotificationProps =
  {
    id: NotificationType.STREAMING_PLACE_UPDATED,
    read: true,
    type: NotificationType.STREAMING_PLACE_UPDATED,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      title: "Stream Place Updated",
      description: "Your stream place has been updated",
      position: "5,48",
      worldName: "test-world.dcl.eth",
      isWorld: true,
      url: "https://decentraland.org/world/test-world.dcl.eth",
      address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const streamingTimeExceededNotificationData: StreamingTimeExceededNotificationProps =
  {
    id: NotificationType.STREAMING_TIME_EXCEEDED,
    read: true,
    type: NotificationType.STREAMING_TIME_EXCEEDED,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      title: "Stream Time Exceeded",
      description: "Your stream time has been exceeded",
      position: "5,48",
      worldName: "test-world.dcl.eth",
      isWorld: false,
      url: "https://decentraland.org/world/test-world.dcl.eth",
      address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const worldsAccessRestoredNotificationData: WorldsAccessRestoredNotificationProps =
  {
    id: NotificationType.WORLDS_ACCESS_RESTORED,
    read: true,
    type: NotificationType.WORLDS_ACCESS_RESTORED,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      title: "World Name",
      description: "World description",
      url: "https://decentraland.org/builder/worlds?tab=dcl",
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const worldsAccessRestrictedNotificationData: WorldsAccessRestrictedNotificationProps =
  {
    id: NotificationType.WORLDS_ACCESS_RESTRICTED,
    read: true,
    type: NotificationType.WORLDS_ACCESS_RESTRICTED,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      title: "World Name",
      description: "World description",
      url: "https://decentraland.org/builder/worlds?tab=dcl",
      when: new Date().getTime(),
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const worldsMissingResourcesNotificationData: WorldsMissingResourcesNotificationProps =
  {
    id: NotificationType.WORLDS_MISSING_RESOURCES,
    read: true,
    type: NotificationType.WORLDS_MISSING_RESOURCES,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      title: "World Name",
      description: "World description",
      url: "https://decentraland.org/builder/worlds?tab=dcl",
      when: new Date().getTime(),
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const worldsPermissionGrantedNotificationPropsData: WorldsPermissionGrantedNotificationProps =
  {
    id: NotificationType.WORLDS_PERMISSION_GRANTED,
    read: true,
    type: NotificationType.WORLDS_PERMISSION_GRANTED,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      title: "World notification",
      description: "World description",
      permissions: ["deployment"],
      world: "meelrossi.dcl.eth",
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const worldsPermissionRevokedNotificationData: WorldsPermissionRevokedNotificationProps =
  {
    id: NotificationType.WORLDS_PERMISSION_REVOKED,
    read: true,
    type: NotificationType.WORLDS_PERMISSION_REVOKED,
    address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
    timestamp: new Date().getTime(),
    metadata: {
      title: "World notification",
      description: "World description",
      permissions: ["deployment"],
      world: "meelrossi.dcl.eth",
    },
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
  }

const creditsClaimReminderNotificationData: CreditsClaimReminderNotificationProps =
  {
    id: NotificationType.CREDITS_REMINDER_CLAIM_CREDITS,
    type: NotificationType.CREDITS_REMINDER_CLAIM_CREDITS,
    address: "0x1234567890123456789012345678901234567890",
    timestamp: new Date().getTime(),
    read: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    metadata: {},
  }

const creditsCompleteYourWeeklyGoalsNotificationData: CreditsCompleteYourWeeklyGoalsNotificationProps =
  {
    id: NotificationType.CREDITS_REMINDER_COMPLETE_GOALS,
    type: NotificationType.CREDITS_REMINDER_COMPLETE_GOALS,
    address: "0x1234567890123456789012345678901234567890",
    timestamp: new Date().getTime(),
    read: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    metadata: {},
  }

const creditsDoNotMissOutNotificationData: CreditsDoNotMissOutNotificationProps =
  {
    id: NotificationType.CREDITS_REMINDER_DO_NOT_MISS_OUT,
    type: NotificationType.CREDITS_REMINDER_DO_NOT_MISS_OUT,
    address: "0x1234567890123456789012345678901234567890",
    timestamp: new Date().getTime(),
    read: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    metadata: {},
  }

const creditsExpireIn24HrsReminderNotificationData: CreditsExpireIn24HrsReminderNotificationProps =
  {
    id: NotificationType.CREDITS_REMINDER_USAGE_24_HOURS,
    type: NotificationType.CREDITS_REMINDER_USAGE_24_HOURS,
    address: "0x1234567890123456789012345678901234567890",
    timestamp: new Date().getTime(),
    read: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    metadata: {
      expirationDate: "July 27 at 23:59 UTC",
    },
  }

const creditsExpireSoonReminderNotificationData: CreditsExpireSoonReminderNotificationProps =
  {
    id: NotificationType.CREDITS_REMINDER_USAGE,
    type: NotificationType.CREDITS_REMINDER_USAGE,
    address: "0x1234567890123456789012345678901234567890",
    timestamp: new Date().getTime(),
    read: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    metadata: {
      expirationDate: "July 27 at 23:59 UTC",
    },
  }

const referralNewTierReachedNotificationData: ReferralNewTierReachedNotificationProps =
  {
    id: NotificationType.REFERRAL_NEW_TIER_REACHED,
    type: NotificationType.REFERRAL_NEW_TIER_REACHED,
    address: "0x1234567890123456789012345678901234567890",
    timestamp: new Date().getTime(),
    read: false,
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
    metadata: {
      title: "Referral Reward Unlocked!",
      description:
        "Check the 'Referral Rewards' tab in your web profile to see your prize!",
      address: "0x1234567890123456789012345678901234567890",
      tier: 1,
      url: "https://decentraland.org/referrals",
      image:
        "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:binance_us_collection:binance_us_upper_body/thumbnail",
      invitedUserAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
      invitedUsers: 5,
      rarity: Rarity.EXOTIC,
    },
  }

const referralInvitedUserAcceptedNotificationData: ReferralInvitedUsersAcceptedNotificationProps =
  {
    id: NotificationType.REFERRAL_INVITED_USERS_ACCEPTED,
    type: NotificationType.REFERRAL_INVITED_USERS_ACCEPTED,
    address: "0x1234567890123456789012345678901234567890",
    timestamp: new Date().getTime(),
    read: false,
    created_at: "2023-11-29T12:51:00.600Z",
    updated_at: "2023-11-29T12:51:00.600Z",
    metadata: {
      title: "Referral Completed!",
      description:
        "Your friend jumped into Decentraland, so you're closer to unlocking your next reward!",
      address: "0x1234567890123456789012345678901234567890",
      tier: 1,
      url: "https://decentraland.org/referrals",
      image: "https://example.com/image.png",
      invitedUserAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
      invitedUsers: 7,
    },
  }

const giftNotificationData: GiftNotificationProps = {
  id: NotificationType.TRANSFER_RECEIVED,
  read: false,
  type: NotificationType.TRANSFER_RECEIVED,
  address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
  timestamp: new Date().getTime(),
  metadata: {
    senderAddress: "0xD8041DC1a844477603ecB8ef8c47AC09cb7ea6Dd",
  },
  created_at: "2023-11-29T12:51:00.600Z",
  updated_at: "2023-11-29T12:51:00.600Z",
}

const tipNotificationData: TipNotificationProps = {
  id: NotificationType.TIP_RECEIVED,
  read: false,
  type: NotificationType.TIP_RECEIVED,
  address: "0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f",
  timestamp: new Date().getTime(),
  metadata: {
    senderAddress: "0xD8041DC1a844477603ecB8ef8c47AC09cb7ea6Dd",
    manaAmount: "100000000000000000000",
    sceneName: "My Awesome Scene",
  },
  created_at: "2023-11-29T12:51:00.600Z",
  updated_at: "2023-11-29T12:51:00.600Z",
}

const allTypeOfNotifications = [
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
  giftNotificationData,
  tipNotificationData,
]

export {
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
  giftNotificationData,
  tipNotificationData,
}
