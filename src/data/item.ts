import {
  BodyShape,
  Item,
  NFTCategory,
  Network,
  Rarity,
  WearableCategory,
} from "@dcl/schemas"

const item: Item = {
  id: "0x10cd9f15bb7d58ac0c8f4ec5e1b77c0f5df0b652-0",
  name: "Upper body sci",
  thumbnail:
    "https://peer.decentraland.zone/lambdas/collections/contents/urn:decentraland:mumbai:collections-v2:0x10cd9f15bb7d58ac0c8f4ec5e1b77c0f5df0b652:0/thumbnail",
  url: "/contracts/0x10cd9f15bb7d58ac0c8f4ec5e1b77c0f5df0b652/items/0",
  category: NFTCategory.WEARABLE,
  contractAddress: "0x10cd9f15bb7d58ac0c8f4ec5e1b77c0f5df0b652",
  itemId: "0",
  rarity: Rarity.EPIC,
  price: "1000000000000000000",
  available: 874,
  isOnSale: true,
  creator: "0xd4fec88a49eb514e9347ec655d0481d8483a9ae0",
  beneficiary: "0xd4fec88a49eb514e9347ec655d0481d8483a9ae0",
  createdAt: 1734938449,
  updatedAt: 1760366161,
  reviewedAt: 1734939897,
  soldAt: 1760366161,
  data: {
    wearable: {
      bodyShapes: [BodyShape.MALE, BodyShape.FEMALE],
      category: WearableCategory.UPPER_BODY,
      description: "A sample emote description for demonstration purposes.",
      rarity: Rarity.EPIC,
      isSmart: false,
    },
  },
  network: Network.MATIC,
  chainId: 137,
  urn: "urn:decentraland:matic:collections-v2:0x10cd9f15bb7d58ac0c8f4ec5e1b77c0f5df0b652:0",
  firstListedAt: 1735344231171,
}

export { item }
