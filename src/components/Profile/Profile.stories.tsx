import React from "react"
import { avatar } from "../../data/avatar"
import { Mana } from "../Mana/Mana"
import { ProfileProps } from "./Profile.types"
import {
  ProfileList,
  ProfileSizeList,
  ProfileStoryContainer,
} from "./Profile.stories.styled"
import { Profile } from "./"
import type { Avatar } from "@dcl/schemas/dist/platform/profile/avatar"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<ProfileProps<React.ElementType>> = {
  // TODO: use T here?
  component: Profile,
  title: "Decentraland UI/Profile",
  tags: ["autodocs"],
  argTypes: {
    address: {
      description: "The address of the profile",
      control: "text",
      defaultValue: "0xdeadbeef",
    },
    avatar: {
      description: "The avatar of the profile",
      control: "object",
      defaultValue: avatar,
    },
    textOnly: {
      description: "Whether the profile should be displayed as text only",
      control: "boolean",
      defaultValue: false,
    },
    imageOnly: {
      description: "Whether the profile should be displayed as image only",
      control: "boolean",
      defaultValue: false,
    },
    isDecentraland: {
      description: "Whether the profile should be displayed as Decentraland",
      control: "boolean",
      defaultValue: false,
    },
    sliceAddressBy: {
      description:
        "The number of characters to slice the address by (minimum 6, maximum 42)",
      control: "number",
      defaultValue: 6,
    },
    shortenAddress: {
      description: "Whether the address should be shortened",
      control: "boolean",
      defaultValue: false,
    },
    size: {
      description: "The size of the profile",
      control: "select",
      options: ["normal", "large", "huge", "massive"],
      defaultValue: "normal",
    },
  },
  render: (args) => (
    <ProfileStoryContainer>
      <Profile {...args} />
    </ProfileStoryContainer>
  ),
}

type Story = StoryObj<ProfileProps<React.ElementType>>

const NoAvatar: Story = {
  name: "No avatar",
  args: { address: "0xdeadbeef" },
}

const ShortenedAddress: Story = {
  name: "Shortened address",
  args: {
    address: "0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6",
    shortenAddress: true,
  },
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

const AvatarWithShortenedAddress: Story = {
  name: "Avatar with shortened address",
  args: {
    address: "0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6",
    avatar: { ...avatar, name: null } as unknown as Avatar,
    shortenAddress: true,
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
      You sent{" "}
      <Mana primary inline>
        1,000
      </Mana>{" "}
      to <Profile {...args} />
    </>
  ),
}

const Decentraland: Story = {
  name: "Decentraland",
  args: { address: "0xdeadbeef", avatar, inline: true, isDecentraland: true },
  render: (args) => (
    <>
      You sent{" "}
      <Mana primary inline>
        1,000
      </Mana>{" "}
      to <Profile {...args} />
    </>
  ),
}

const SlicedAddress: Story = {
  name: "Sliced address",
  render: () => (
    <ProfileStoryContainer>
      <ProfileList>
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
      </ProfileList>
    </ProfileStoryContainer>
  ),
}

const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <ProfileStoryContainer>
      <ProfileSizeList>
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
      </ProfileSizeList>
    </ProfileStoryContainer>
  ),
}

const LinkedAvatar: Story = {
  name: "Profile with avatar and content linked to another site",
  render: () => (
    <ProfileStoryContainer>
      <Profile
        address="0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6"
        avatar={avatar}
        inline
        as="a"
        href="https://decentraland.zone/marketplace/accounts/0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6"
        target="_blank"
      />
    </ProfileStoryContainer>
  ),
}

const LinkedBlockie: Story = {
  name: "Profile with blockie and content linked to another site",
  render: () => (
    <ProfileStoryContainer>
      <Profile
        address="0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6"
        inline
        as={"a"}
        href="https://decentraland.zone/marketplace/accounts/0x89805E5f0698Cb4dB57f0E389f2a75259f78CCF6"
        target="_blank"
      />
    </ProfileStoryContainer>
  ),
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  NoAvatar,
  ShortenedAddress,
  WithAvatar,
  AvatarWithoutName,
  AvatarWithShortenedAddress,
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
