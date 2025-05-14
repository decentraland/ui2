import { useState } from "react"
import { ChainId, Network } from "@dcl/schemas"
import { Box, Toolbar, Typography } from "@mui/material"
import { Navbar } from "./Navbar"
import { avatar } from "../../data/avatar"
import { itemSoldNotificationPropsData } from "../../data/notifications"
import { NotificationActiveTab } from "../Notifications"
import { NavbarPages, NavbarProps } from "./Navbar.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  component: Navbar,
  title: "Decentraland UI/Navbar",
  argTypes: {},
  render: (args) => <Navbar activePage={NavbarPages.MARKETPLACE} {...args} />,
}

type Story = StoryObj<NavbarProps>

const Simple: Story = {
  render: (args) => <Navbar {...args} activePage={NavbarPages.CREATE} />,
}

const WithScroll: Story = {
  render: (args) => (
    <Box sx={{ display: "flex" }}>
      <Navbar {...args} activePage={NavbarPages.CREATE} />
      <Box>
        <Toolbar />
        <Typography variant="h1">Lorem ipsum dolor.</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
          quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
          perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod
          itaque exercitationem, at ab sequi qui modi delectus quia corrupti
          alias distinctio nostrum. Minima ex dolor modi inventore sapiente
          necessitatibus aliquam fuga et. Sed numquam quibusdam at officia
          sapiente porro maxime corrupti perspiciatis asperiores, exercitationem
          eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam
          temporibus beatae doloremque voluptatum doloribus soluta accusamus
          porro reprehenderit eos inventore facere, fugit, molestiae ab officiis
          illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis,
          voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis
          obcaecati error, delectus quo eius exercitationem tempore. Delectus
          sapiente, provident corporis dolorum quibusdam aut beatae repellendus
          est labore quisquam praesentium repudiandae non vel laboriosam quo ab
          perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt
          commodi nihil corrupti cum non fugiat praesentium doloremque
          architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore
          molestiae dicta blanditiis est expedita eius debitis cupiditate porro
          sed aspernatur quidem, repellat nihil quasi praesentium quia eos,
          quibusdam provident. Incidunt tempore vel placeat voluptate iure
          labore, repellendus beatae quia unde est aliquid dolor molestias
          libero. Reiciendis similique exercitationem consequatur, nobis placeat
          illo laudantium! Enim perferendis nulla soluta magni error, provident
          repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure
          suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore
          commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque
          eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt
          ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat
          rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam
          facilis libero dolorem dolores sunt inventore perferendis, aut
          sapiente modi nesciunt.
        </Typography>
        <img
          src="https://www.adobe.com/au/products/firefly/features/media_179d807b0123090143eea74eea2d7cf4e7aa962ae.png?width=2000&format=webply&optimize=medium"
          style={{ width: "100%" }}
        />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
          quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
          perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod
          itaque exercitationem, at ab sequi qui modi delectus quia corrupti
          alias distinctio nostrum. Minima ex dolor modi inventore sapiente
          necessitatibus aliquam fuga et. Sed numquam quibusdam at officia
          sapiente porro maxime corrupti perspiciatis asperiores, exercitationem
          eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam
          temporibus beatae doloremque voluptatum doloribus soluta accusamus
          porro reprehenderit eos inventore facere, fugit, molestiae ab officiis
          illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis,
          voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis
          obcaecati error, delectus quo eius exercitationem tempore. Delectus
          sapiente, provident corporis dolorum quibusdam aut beatae repellendus
          est labore quisquam praesentium repudiandae non vel laboriosam quo ab
          perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt
          commodi nihil corrupti cum non fugiat praesentium doloremque
          architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore
          molestiae dicta blanditiis est expedita eius debitis cupiditate porro
          sed aspernatur quidem, repellat nihil quasi praesentium quia eos,
          quibusdam provident. Incidunt tempore vel placeat voluptate iure
          labore, repellendus beatae quia unde est aliquid dolor molestias
          libero. Reiciendis similique exercitationem consequatur, nobis placeat
          illo laudantium! Enim perferendis nulla soluta magni error, provident
          repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure
          suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore
          commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque
          eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt
          ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat
          rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam
          facilis libero dolorem dolores sunt inventore perferendis, aut
          sapiente modi nesciunt.
        </Typography>
      </Box>
    </Box>
  ),
}

const WithChainSelector: Story = {
  args: {
    activePage: NavbarPages.MARKETPLACE,
    isSignedIn: true,
    chains: [
      ChainId.ETHEREUM_MAINNET,
      ChainId.MATIC_MAINNET,
      ChainId.ARBITRUM_MAINNET,
      ChainId.OPTIMISM_MAINNET,
      ChainId.BSC_MAINNET,
      ChainId.FANTOM_MAINNET,
      ChainId.AVALANCHE_MAINNET,
    ],
    chainBeingConfirmed: ChainId.MATIC_MAINNET,
    selectedChain: ChainId.ETHEREUM_MAINNET,
    onSelectChain: (chain) => console.log("Selected chain", chain),
    avatar: avatar,
    onClickSignIn: () => console.log("Clicked on sign in"),
  },
  render: (args) => {
    const [openNotification, setOpenNotification] = useState(false)
    const [tab, setTab] = useState(NotificationActiveTab.NEWEST)
    return (
      <Navbar
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
          expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 100,
        }}
      />
    )
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Simple, WithScroll, WithChainSelector }
