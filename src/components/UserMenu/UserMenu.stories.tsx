import { useState } from "react"
import { Network } from "@dcl/schemas"
import { Box } from "@mui/material"
import { UserMenu } from "./UserMenu"
import { i18n } from "./UserMenu.i18n"
import { avatar } from "../../data/avatar"
import { itemSoldNotificationPropsData } from "../../data/notifications"
import { NotificationActiveTab } from "../Notifications"
import { UserMenuProps } from "./UserMenu.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<UserMenuProps> = {
  component: UserMenu,
  title: "Decentraland UI/UserMenu",
  argTypes: {},
  args: {
    i18n: i18n,
  },
  render: (args) => {
    return <UserMenu {...args} />
  },
}

type Story = StoryObj<UserMenuProps>

const SignedOut: Story = {
  name: "Signed Out",
}

const SignedIn: Story = {
  name: "Signed In",
  args: {
    avatar: avatar,
    isSignedIn: true,
  },
}

const SigningIn: Story = {
  name: "Signing In",
  args: {
    avatar: avatar,
    isSigningIn: true,
  },
}

const Disconnecting: Story = {
  name: "Disconnecting",
  args: {
    isDisconnecting: true,
  },
}

const Guest: Story = {
  name: "Guest",
  args: {
    avatar: { ...avatar, hasClaimedName: false },
    isSignedIn: true,
  },
}

const Complete: Story = {
  name: "Complete",
  args: {
    avatar: avatar,
    manaBalances: { [Network.ETHEREUM]: 1000, [Network.MATIC]: 2500 },
    hasActivity: true,
    isSignedIn: true,
  },
  render: (args) => {
    const [openNotification, setOpenNotification] = useState(false)
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    return (
      <Box
        sx={{
          width: "500px",
          height: "90vh",
        }}
      >
        <UserMenu
          {...args}
          notifications={{
            isOnboarding: false,
            isOpen: openNotification,
            isLoading: false,
            items: [itemSoldNotificationPropsData],
            locale: "en",
            activeTab: tab,
            onBegin: console.log,
            onChangeTab: (_e, tab) => setTab(tab),
            onClick: () => setOpenNotification(true),
            onClose: () => setOpenNotification(false),
          }}
        />
      </Box>
    )
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { SignedOut, SignedIn, SigningIn, Disconnecting, Guest, Complete }
