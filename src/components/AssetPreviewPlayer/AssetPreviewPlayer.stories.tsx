import { Network } from '@dcl/schemas'
import { Box } from '@mui/material'
import { AssetPreviewPlayerProvider } from './AssetPreviewPlayer'
import { EMOTE_FIXTURES, PreviewFixture, WEARABLE_FIXTURES, peerThumbnail } from '../../data/previewFixtures'
import { CatalogCard } from '../CatalogCard'
import { i18n as rarityBadgeI18n } from '../RarityBadge/RarityBadge.i18n'
import { AssetPreviewPlayerProviderProps } from './AssetPreviewPlayer.types'
import type { Meta, StoryObj } from '@storybook/react'

const renderFixtureCards = (fixtures: PreviewFixture[]) => (
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
)

const meta: Meta<AssetPreviewPlayerProviderProps> = {
  component: AssetPreviewPlayerProvider,
  title: 'Decentraland UI/Asset Preview Player',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    enabled: {
      description: 'Master switch — when false no iframe is mounted and `useAssetPreviewPlayer()` returns null',
      control: 'boolean'
    },
    peerUrl: {
      description: 'Catalyst peer used by the preview to resolve profiles/content. Defaults to prod',
      control: 'text'
    },
    marketplaceServerUrl: {
      description: 'Marketplace API used by the preview to resolve items. Defaults to prod',
      control: 'text'
    },
    profile: {
      description: 'Avatar profile rendered wearing/playing the asset. An eth address renders that user; defaults to `"default"`',
      control: 'text'
    },
    dev: {
      description: 'Forwarded to the preview iframe (zone assets)',
      control: 'boolean'
    },
    children: {
      control: false,
      table: { disable: true }
    }
  }
}

type Story = StoryObj<AssetPreviewPlayerProviderProps>

const EmotesPlayOnHover: Story = {
  name: 'Emotes: avatar plays them on hover',
  args: { enabled: true },
  render: args => <AssetPreviewPlayerProvider {...args}>{renderFixtureCards(EMOTE_FIXTURES)}</AssetPreviewPlayerProvider>
}

const WearablesTryOnHover: Story = {
  name: 'Wearables: avatar wears them on hover',
  args: { enabled: true },
  render: args => <AssetPreviewPlayerProvider {...args}>{renderFixtureCards(WEARABLE_FIXTURES)}</AssetPreviewPlayerProvider>
}

const MixedCatalog: Story = {
  name: 'Mixed catalog (wearables + emotes)',
  args: { enabled: true },
  render: args => (
    <AssetPreviewPlayerProvider {...args}>
      {renderFixtureCards([WEARABLE_FIXTURES[0], EMOTE_FIXTURES[0], WEARABLE_FIXTURES[2]])}
    </AssetPreviewPlayerProvider>
  )
}

const Disabled: Story = {
  name: 'Disabled (cards stay static)',
  args: { enabled: false },
  render: args => <AssetPreviewPlayerProvider {...args}>{renderFixtureCards(WEARABLE_FIXTURES)}</AssetPreviewPlayerProvider>
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Disabled, EmotesPlayOnHover, MixedCatalog, WearablesTryOnHover }
