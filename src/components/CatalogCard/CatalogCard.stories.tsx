import { Network, Rarity } from '@dcl/schemas'
import { Box, Button, Typography } from '@mui/material'
import { CatalogCard } from './CatalogCard'
import { item } from '../../data/item'
import { AssetPreviewPlayerProvider } from '../AssetPreviewPlayer'
import { BaseFemaleIcon, BaseMaleIcon, MintIcon, UnisexIcon, UpperBodyIcon } from '../Icon'
import { i18n as rarityBadgeI18n } from '../RarityBadge/RarityBadge.i18n'
import { CatalogCardProps } from './CatalogCard.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<CatalogCardProps> = {
  component: CatalogCard,
  title: 'Decentraland UI/Cards/Catalog Card',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    withShadow: {
      description: 'Enable drop shadow around the card',
      control: 'boolean',
      defaultValue: true
    },
    price: {
      description: 'Price label to display',
      control: 'text',
      defaultValue: '10'
    },
    owners: {
      description: 'Owners label text',
      control: 'text',
      defaultValue: '3 owners'
    },
    imageSrc: {
      description: 'URL of the asset image',
      control: 'text',
      defaultValue: item.thumbnail
    },
    asset: {
      description: 'Asset metadata (name, rarity, network, creator, url, id)',
      control: 'object',
      defaultValue: item
    },
    action: {
      description: 'Primary action label shown at the bottom',
      control: 'text',
      defaultValue: 'Buy directly from creator'
    },
    actionIcon: {
      description: 'Icon displayed next to the action',
      control: false,
      table: { disable: true }
    },
    extraInformation: {
      description: 'Additional info displayed below the action',
      control: false,
      table: { disable: true }
    },
    i18n: {
      description: 'Internationalization object',
      control: 'object',
      defaultValue: rarityBadgeI18n
    }
  },
  render: args => <CatalogCard {...args} />
}

type Story = StoryObj<CatalogCardProps>

const Default: Story = {
  name: 'Default',
  args: {
    withShadow: false,
    price: '10',
    owners: '3 owners',
    imageSrc: item.thumbnail,
    asset: item,
    action: 'Buy directly from creator',
    actionIcon: <MintIcon fontSize="small" />,
    extraInformation: <Typography variant="body2">1 listing</Typography>,
    i18n: rarityBadgeI18n
  }
}

const WithInfoBadges: Story = {
  name: 'With info badges (category + body shape)',
  args: {
    withShadow: false,
    price: '10',
    imageSrc: item.thumbnail,
    asset: item,
    action: null,
    extraInformation: null,
    i18n: rarityBadgeI18n,
    infoBadges: (
      <>
        <UpperBodyIcon fontSize="small" titleAccess="upper_body" />
        <UnisexIcon fontSize="small" titleAccess="unisex" />
      </>
    )
  }
}

const WithInfoBadgesBaseMale: Story = {
  name: 'With info badges (base male only)',
  args: {
    withShadow: false,
    price: '10',
    imageSrc: item.thumbnail,
    asset: item,
    action: null,
    extraInformation: null,
    i18n: rarityBadgeI18n,
    infoBadges: (
      <>
        <UpperBodyIcon fontSize="small" titleAccess="upper_body" />
        <BaseMaleIcon fontSize="small" titleAccess="BaseMale" />
      </>
    )
  }
}

const WithInfoBadgesBaseFemale: Story = {
  name: 'With info badges (base female only)',
  args: {
    withShadow: false,
    price: '10',
    imageSrc: item.thumbnail,
    asset: item,
    action: null,
    extraInformation: null,
    i18n: rarityBadgeI18n,
    infoBadges: (
      <>
        <UpperBodyIcon fontSize="small" titleAccess="upper_body" />
        <BaseFemaleIcon fontSize="small" titleAccess="BaseFemale" />
      </>
    )
  }
}

const WithBottomActionAndInfoBadges: Story = {
  name: 'Hover: bottom action + info badges',
  args: {
    withShadow: false,
    price: '10',
    imageSrc: item.thumbnail,
    asset: item,
    action: null,
    extraInformation: null,
    i18n: rarityBadgeI18n,
    hoverShadow: 'glow',
    infoBadges: (
      <>
        <UpperBodyIcon fontSize="small" titleAccess="upper_body" />
        <UnisexIcon fontSize="small" titleAccess="unisex" />
      </>
    ),
    bottomAction: (
      <Button variant="contained" color="primary" fullWidth>
        BUY
      </Button>
    )
  }
}

const StaticHoverNoExpansion: Story = {
  name: 'Static hover (disableInfoExpansion)',
  args: {
    withShadow: false,
    price: '10',
    imageSrc: item.thumbnail,
    asset: item,
    action: null,
    extraInformation: null,
    i18n: rarityBadgeI18n,
    hoverShadow: 'glow',
    disableInfoExpansion: true,
    infoBadges: (
      <>
        <UpperBodyIcon fontSize="small" titleAccess="upper_body" />
        <UnisexIcon fontSize="small" titleAccess="unisex" />
      </>
    )
  }
}

const SubduedRarityNoPrice: Story = {
  name: 'Subdued rarity (no price)',
  args: {
    withShadow: false,
    imageSrc: item.thumbnail,
    asset: item,
    action: null,
    extraInformation: null,
    i18n: rarityBadgeI18n,
    subduedRarity: true,
    hoverShadow: 'glow',
    disableInfoExpansion: true,
    infoBadges: (
      <>
        <UpperBodyIcon fontSize="small" titleAccess="upper_body" />
        <UnisexIcon fontSize="small" titleAccess="unisex" />
      </>
    )
  }
}

// Real prod catalog items so the hover preview resolves against the live peer: the
// thumbnail, the urn and the asset metadata all belong to the SAME item (an emote card
// must play that emote; a wearable card must dress the avatar with that wearable).
type PreviewFixture = {
  name: string
  urn: string
  rarity: Rarity
  creator: string
}

const peerThumbnail = (urn: string): string => `https://peer.decentraland.org/lambdas/collections/contents/${urn}/thumbnail`

const EMOTE_FIXTURES: PreviewFixture[] = [
  {
    name: 'Building Castles in the Sky',
    urn: 'urn:decentraland:matic:collections-v2:0xedabe0283a5f87c2ca3d9a6326781c9125d6e556:0',
    rarity: Rarity.MYTHIC,
    creator: '0x4a6767c70796be741453cc6b74f0567eb886614d'
  },
  {
    name: 'Jack Frost Sad Boi',
    urn: 'urn:decentraland:matic:collections-v2:0x1d30377fe076d67f573179a6800d5cff1d5b3187:0',
    rarity: Rarity.LEGENDARY,
    creator: '0xb5658530f22c1009e1b920fa657f6ce21564f974'
  },
  {
    name: 'Say Hello, Friend',
    urn: 'urn:decentraland:matic:collections-v2:0x145d8f54194283a6ae71ad4316040d4c13633194:1',
    rarity: Rarity.EPIC,
    creator: '0x9990a41efb8a6176199ee2676cf08f5424adf0fd'
  }
]

const WEARABLE_FIXTURES: PreviewFixture[] = [
  {
    name: 'Grill Angel',
    urn: 'urn:decentraland:matic:collections-v2:0x7dd2c14796d6a411439f3ed465071fb1626084a8:0',
    rarity: Rarity.LEGENDARY,
    creator: '0xdb760099f0f3359131e08716848f23c014d35b9e'
  },
  {
    name: 'Calaca Headphones',
    urn: 'urn:decentraland:matic:collections-v2:0x6bcc21bc566ca5359fc79bdea1b41c9aacc75bbe:1',
    rarity: Rarity.EPIC,
    creator: '0x8b4221b34efeb8f4ba874cf07d7f6c456c5cc347'
  },
  {
    name: 'Sneakers Viva La Calaca',
    urn: 'urn:decentraland:matic:collections-v2:0x4fde0297c458e7a0bc35f07c015f322ca31b459e:1',
    rarity: Rarity.RARE,
    creator: '0x8b4221b34efeb8f4ba874cf07d7f6c456c5cc347'
  }
]

const renderHoverPreviewGrid = (fixtures: PreviewFixture[]) => (
  <AssetPreviewPlayerProvider enabled>
    <Box display="flex" gap={2}>
      {fixtures.map(fixture => (
        <CatalogCard
          key={fixture.urn}
          asset={{
            id: fixture.urn,
            url: '/',
            name: fixture.name,
            rarity: fixture.rarity,
            network: Network.MATIC,
            creator: fixture.creator
          }}
          imageSrc={peerThumbnail(fixture.urn)}
          action={null}
          extraInformation={null}
          notForSale={false}
          withShadow={false}
          price="10"
          i18n={rarityBadgeI18n}
          subduedRarity
          hoverShadow="glow"
          hoverPreviewUrn={fixture.urn}
        />
      ))}
    </Box>
  </AssetPreviewPlayerProvider>
)

const EmotePlayOnHover: Story = {
  name: 'Emotes: avatar plays them on hover',
  render: () => renderHoverPreviewGrid(EMOTE_FIXTURES)
}

const WearableTryOnHover: Story = {
  name: 'Wearables: avatar wears them on hover',
  render: () => renderHoverPreviewGrid(WEARABLE_FIXTURES)
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  Default,
  EmotePlayOnHover,
  StaticHoverNoExpansion,
  SubduedRarityNoPrice,
  WearableTryOnHover,
  WithBottomActionAndInfoBadges,
  WithInfoBadges,
  WithInfoBadgesBaseFemale,
  WithInfoBadgesBaseMale
}
