import { Button, Typography } from '@mui/material'
import { CatalogCard } from './CatalogCard'
import { item } from '../../data/item'
import { EmotePreviewPlayerProvider } from '../EmotePreviewPlayer'
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
    hideRarityOnHover: true,
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
  name: 'Figma 94:36542 — MyAssets (subdued rarity, no price)',
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

const ANIMATED_EMOTE_URN = 'urn:decentraland:matic:collections-v2:0xfbc9b2cff58dcc29dab28e2af7eac80c9012fe02:2'

const AnimatedEmoteOnHover: Story = {
  name: 'Animated emote preview on hover',
  args: {
    withShadow: false,
    price: '10',
    imageSrc: item.thumbnail,
    asset: { ...item, name: 'Black Beauty' },
    action: null,
    extraInformation: null,
    i18n: rarityBadgeI18n,
    subduedRarity: true,
    hoverShadow: 'glow',
    emotePreviewUrn: ANIMATED_EMOTE_URN
  },
  render: args => (
    <EmotePreviewPlayerProvider enabled>
      <CatalogCard {...args} />
    </EmotePreviewPlayerProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  AnimatedEmoteOnHover,
  Default,
  StaticHoverNoExpansion,
  SubduedRarityNoPrice,
  WithBottomActionAndInfoBadges,
  WithInfoBadges,
  WithInfoBadgesBaseFemale,
  WithInfoBadgesBaseMale
}
