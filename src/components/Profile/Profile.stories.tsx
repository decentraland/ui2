import React from "react"
import type { Avatar } from "@dcl/schemas/dist/platform/profile/avatar"
import { avatar } from "../../data/avatar"
import type { Meta, StoryObj } from "@storybook/react"
import { Mana } from "../Mana/Mana"
import { Profile } from "./"
import { ProfileProps } from "./Profile.types"

const meta: Meta<ProfileProps<React.ElementType>> = {
  // TODO: use T here?
  component: Profile,
  title: "Decentraland UI/Profile",
  tags: ["autodocs"],
  argTypes: {},
  render: (args) => <Profile {...args} />,
}

type Story = StoryObj<ProfileProps<React.ElementType>>

const NoAvatar: Story = {
  name: "No avatar",
  args: { address: "0xdeadbeef" },
}

const WithAvatar: Story = {
  name: "Avatar",
  args: { address: "0xdeadbeef", avatar },
}

const AvatarWithoutName: Story = {
  name: "Avatar without name",
  args: {
    address: "0xdeadbeef",
    avatar: { ...avatar, name: null } as unknown as Avatar,
  },
}

const AvatarUnclaimedName: Story = {
  name: "Avatar with an unclaimed name",
  args: { address: "0xdeadbeef", avatar: { ...avatar, hasClaimedName: false } },
}

const ImageOnly: Story = {
  name: "Image only",
  args: { address: "0xdeadbeef", avatar, imageOnly: true },
}

const TextOnly: Story = {
  name: "Text only",
  args: { address: "0xdeadbeef", avatar, textOnly: true },
}

const Inline: Story = {
  name: "Inline",
  args: { address: "0xdeadbeef", avatar, inline: true },
  render: (args) => (
    <>
      You sent <Mana inline>1,000</Mana> to <Profile {...args} />
    </>
  ),
}

const Decentraland: Story = {
  name: "Decentraland",
  args: { address: "0xdeadbeef", avatar, inline: true, isDecentraland: true },
  render: (args) => (
    <>
      You sent <Mana inline>1,000</Mana> to <Profile {...args} />
    </>
  ),
}

const SlicedAddress: Story = {
  name: "Sliced address",
  render: () => (
    <div className="ProfileList">
      <Profile
        address="0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6"
        sliceAddressBy={10}
      />
      <Profile
        address="0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6"
        sliceAddressBy={20}
      />
      <Profile
        address="0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6"
        sliceAddressBy={30}
      />
      <Profile
        address="0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6"
        sliceAddressBy={40}
      />
    </div>
  ),
}

const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <>
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="normal"
        imageOnly
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="large"
        imageOnly
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="huge"
        imageOnly
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="massive"
        imageOnly
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="normal"
        imageOnly
        isDecentraland
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="large"
        imageOnly
        isDecentraland
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="huge"
        imageOnly
        isDecentraland
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="massive"
        imageOnly
        isDecentraland
      />
      <Profile address="0xdeadbeef" inline={false} size="normal" imageOnly />
      <Profile address="0xdeadbeef" inline={false} size="large" imageOnly />
      <Profile address="0xdeadbeef" inline={false} size="huge" imageOnly />
      <Profile address="0xdeadbeef" inline={false} size="massive" imageOnly />
    </>
  ),
}

const LinkedAvatar: Story = {
  name: "Profile with avatar and content linked to another site",
  render: () => (
    <>
      <Profile
        address="0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6"
        avatar={avatar}
        inline
        as="a"
        href="https://decentraland.zone/marketplace/accounts/0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6"
        target="_blank"
      />
    </>
  ),
}

const LinkedBlockie: Story = {
  name: "Profile with blockie and content linked to another site",
  render: () => (
    <>
      <Profile
        address="0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6"
        inline
        as={"a"}
        href="https://decentraland.zone/marketplace/accounts/0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6"
        target="_blank"
      />
    </>
  ),
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  NoAvatar,
  WithAvatar,
  AvatarWithoutName,
  AvatarUnclaimedName,
  ImageOnly,
  TextOnly,
  Inline,
  Decentraland,
  SlicedAddress,
  Sizes,
  LinkedAvatar,
  LinkedBlockie,
}
