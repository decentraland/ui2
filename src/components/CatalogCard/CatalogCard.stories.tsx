import { Typography } from '@mui/material'
import { CatalogCard } from './CatalogCard'
import { item } from '../../data/item'
import { MintIcon } from '../Icon'
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

// eslint-disable-next-line import/no-default-export
export default meta
export { Default }
