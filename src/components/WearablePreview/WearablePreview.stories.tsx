import { PreviewType } from "@dcl/schemas/dist/dapps/preview"
import { WearablePreview } from "./WearablePreview"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof WearablePreview> = {
  title: "Components/WearablePreview",
  component: WearablePreview,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: "100%",
      },
    },
    styles: {
      container: {
        position: "absolute",
        height: "100%",
        width: "100%",
      },
    },
  },
}

type Story = StoryObj<typeof WearablePreview>

// Basic wearable preview with contract address and token ID
const Wearable: Story = {
  args: {
    contractAddress: "0x15bb2b2f50deb26b7a493fbb3dbdd77d4addf0af",
    itemId: "0",
  },
}

// Preview a user's avatar
const Profile: Story = {
  args: {
    profile: "0x2a39d4f68133491f0442496f601cde2a945b6d31",
  },
}

// Preview using URN
const URN: Story = {
  args: {
    urns: [
      "urn:decentraland:matic:collections-v2:0x186c788f9c172934b790b868faf3b78b84e34e89:1",
    ],
  },
}

// Preview an emote
const Emote: Story = {
  args: {
    contractAddress: "0x186c788f9c172934b790b868faf3b78b84e34e89",
    tokenId: "1",
    type: "emote" as PreviewType,
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Wearable, Profile, URN, Emote }
