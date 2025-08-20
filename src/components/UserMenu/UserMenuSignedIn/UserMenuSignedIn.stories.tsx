import { useState } from "react"
import { Network } from "@dcl/schemas/dist/dapps/network"
import { Box } from "@mui/material"
import { UserMenuSignedIn } from "./UserMenuSignedIn"
import { avatar } from "../../../data/avatar"
import { itemSoldNotificationPropsData } from "../../../data/notifications"
import { NotificationActiveTab } from "../../Notifications/types"
import { i18n } from "../UserMenu.i18n"
import { UserMenuSignedInProps } from "./UserMenuSignedIn.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<UserMenuSignedInProps> = {
  component: UserMenuSignedIn,
  title: "Decentraland UI/User Menu Signed In",
  argTypes: {},
  args: {
    onClickMarketplaceAuthorization: () => console.log,
    onClickMyAssets: () => console.log,
    onClickProfile: () => console.log,
    onClickSignOut: () => console.log,
    onClickAccount: () => console.log,
    avatar: avatar,
    i18n: i18n,
    trackingId: "",
  },
  render: (args) => {
    const [open, setOpen] = useState(true)
    return (
      <Box
        sx={{ width: "500px", height: "90vh", backgroundColor: "lightgray" }}
      >
        <UserMenuSignedIn
          {...args}
          isOpen={open}
          onClickToggle={() => setOpen(true)}
          onClickClose={() => setOpen(false)}
        />
      </Box>
    )
  },
}

type Story = StoryObj<UserMenuSignedInProps>

const SignedIn: Story = {
  name: "Signed in",
  args: {
    manaBalances: { [Network.ETHEREUM]: 1000, [Network.MATIC]: 2500 },
    creditsBalance: {
      balance: 20,
      expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 30,
    },
  },
}

const CompleteWithActivity: Story = {
  name: "Complete with activity",
  args: {
    manaBalances: { [Network.ETHEREUM]: 1000, [Network.MATIC]: 2500 },
    creditsBalance: {
      balance: 100,
      expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 3,
    },
    hasActivity: true,
  },
  render: (args) => {
    const [open, setOpen] = useState(false)
    const [openNotification, setOpenNotification] = useState(false)
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    return (
      <Box
        sx={{
          width: "500px",
          height: "90vh",
        }}
      >
        <UserMenuSignedIn
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
          manaBalances={{ [Network.ETHEREUM]: 1000, [Network.MATIC]: 2500 }}
          creditsBalance={{
            balance: 100,
            expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 3,
          }}
          isOpen={open}
          onClickToggle={() => setOpen(true)}
          onClickClose={() => setOpen(false)}
        />
      </Box>
    )
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { SignedIn, CompleteWithActivity }
