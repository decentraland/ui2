import { BLOCKS } from '@contentful/rich-text-types'
import { ContentfulLocale } from '@dcl/schemas'
import { Banner } from './Banner'
import bannerBackground from '../../Assets/custom-welcome-background.webp'
import bannerLogo from '../../Assets/dcl-logo-qr.svg'
import type { Document } from '@contentful/rich-text-types'
import type { AlignmentFieldType, BannerFields, ContentfulAsset, LocalizedField, SysLink } from '@dcl/schemas'
import type { Meta, StoryObj } from '@storybook/react'

const BACKGROUND_ASSET_ID = 'story-banner-background'
const LOGO_ASSET_ID = 'story-banner-logo'

// Bundled assets resolve to a relative path, and getAssetUrl only leaves the url untouched when it is already absolute.
const toAbsoluteUrl = (path: string) => new URL(path, window.location.href).href

function localized<T>(value: T): LocalizedField<T> {
  return { [ContentfulLocale.enUS]: value }
}

const assetLink = (id: string): SysLink<'Asset'> => ({
  sys: { type: 'Link', linkType: 'Asset', id }
})

const buildAsset = (id: string, url: string, contentType: string): ContentfulAsset => ({
  metadata: { tags: [], concepts: [] },
  sys: {
    space: { sys: { type: 'Link', linkType: 'Space', id: 'story-space' } },
    id,
    type: 'Asset',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    environment: { sys: { type: 'Link', linkType: 'Environment', id: 'master' } },
    publishedVersion: 1,
    revision: 1
  },
  fields: {
    title: localized(id),
    description: localized(''),
    file: localized({ url, details: { size: 0 }, fileName: id, contentType })
  }
})

const richText = (value: string): Document => ({
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content: [
    {
      nodeType: BLOCKS.PARAGRAPH,
      data: {},
      content: [{ nodeType: 'text', value, marks: [], data: {} }]
    }
  ]
})

const assets: Record<string, ContentfulAsset> = {
  [BACKGROUND_ASSET_ID]: buildAsset(BACKGROUND_ASSET_ID, toAbsoluteUrl(bannerBackground), 'image/webp'),
  [LOGO_ASSET_ID]: buildAsset(LOGO_ASSET_ID, toAbsoluteUrl(bannerLogo), 'image/svg+xml')
}

const baseFields: BannerFields = {
  desktopTitle: localized('Step into Decentraland'),
  desktopTitleAlignment: localized<AlignmentFieldType>('Left'),
  mobileTitle: localized('Step into Decentraland'),
  mobileTitleAlignment: localized<AlignmentFieldType>('Center'),
  desktopText: localized(richText('Explore worlds, collect wearables and join live events built by the community.')),
  desktopTextAlignment: localized<AlignmentFieldType>('Left'),
  mobileText: localized(richText('Explore worlds, collect wearables and join live events.')),
  mobileTextAlignment: localized<AlignmentFieldType>('Center'),
  showButton: localized(true),
  buttonLink: localized('https://decentraland.org/download/'),
  buttonsText: localized('Explore now'),
  desktopButtonAlignment: localized<AlignmentFieldType>('Left'),
  mobileButtonAlignment: localized<AlignmentFieldType>('Center'),
  fullSizeBackground: localized(assetLink(BACKGROUND_ASSET_ID)),
  mobileBackground: localized(assetLink(BACKGROUND_ASSET_ID)),
  logo: localized(assetLink(LOGO_ASSET_ID))
}

const meta = {
  title: 'Decentraland UI/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    fields: baseFields,
    assets,
    isLoading: false,
    error: null,
    locale: ContentfulLocale.enUS
  },
  argTypes: {
    locale: {
      control: 'select',
      options: Object.values(ContentfulLocale)
    }
  }
} satisfies Meta<typeof Banner>

type Story = StoryObj<typeof meta>

const Default: Story = {}

const WithoutLogo: Story = {
  args: {
    fields: { ...baseFields, logo: undefined }
  }
}

const WithoutButton: Story = {
  args: {
    fields: { ...baseFields, showButton: localized(false) }
  }
}

const CenteredContent: Story = {
  args: {
    fields: {
      ...baseFields,
      logo: undefined,
      desktopTitleAlignment: localized<AlignmentFieldType>('Center'),
      desktopTextAlignment: localized<AlignmentFieldType>('Center'),
      desktopButtonAlignment: localized<AlignmentFieldType>('Center')
    }
  }
}

const RightAlignedContent: Story = {
  args: {
    fields: {
      ...baseFields,
      logo: undefined,
      desktopTitleAlignment: localized<AlignmentFieldType>('Right'),
      desktopTextAlignment: localized<AlignmentFieldType>('Right'),
      desktopButtonAlignment: localized<AlignmentFieldType>('Right')
    }
  }
}

const Localized: Story = {
  args: {
    locale: ContentfulLocale.es,
    fields: {
      ...baseFields,
      desktopTitle: { [ContentfulLocale.enUS]: 'Step into Decentraland', [ContentfulLocale.es]: 'Entrá a Decentraland' },
      desktopText: {
        [ContentfulLocale.enUS]: richText('Explore worlds, collect wearables and join live events built by the community.'),
        [ContentfulLocale.es]: richText('Explorá mundos, coleccioná wearables y sumate a los eventos de la comunidad.')
      },
      buttonsText: { [ContentfulLocale.enUS]: 'Explore now', [ContentfulLocale.es]: 'Explorar ahora' }
    }
  }
}

const Loading: Story = {
  args: {
    isLoading: true
  }
}

// The banner renders nothing when the entry failed to load, so consumers can keep the layout untouched.
const WithError: Story = {
  args: {
    fields: null,
    error: 'Failed to fetch the banner entry'
  }
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default, WithoutLogo, WithoutButton, CenteredContent, RightAlignedContent, Localized, Loading, WithError }
