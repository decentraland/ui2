import { Avatar } from '@dcl/schemas'
import { EventCard } from './EventCard'
import sceneThumbnail from '../../Assets/scene-thumbnail.png'
import { BadgeGroup, LiveBadge, UserCountBadge } from '../Badges'
import { StoryRow, StorySection } from './EventCard.stories.styled'
import type { Meta, StoryObj } from '@storybook/react'

const exampleAvatar: Avatar = {
  hasClaimedName: true,
  description: '',
  tutorialStep: 256,
  name: 'alelevyyyy',
  userId: '0xe3fc7040653768efb2941a6c26fdb868ed36ca99',
  email: '',
  ethAddress: '0xe3fc7040653768efb2941a6c26fdb868ed36ca99',
  version: 5,
  avatar: {
    bodyShape: 'urn:decentraland:off-chain:base-avatars:BaseFemale',
    wearables: [
      'urn:decentraland:off-chain:base-avatars:black_top',
      'urn:decentraland:off-chain:base-avatars:kilt',
      'urn:decentraland:off-chain:base-avatars:SchoolShoes',
      'urn:decentraland:off-chain:base-avatars:matrix_sunglasses',
      'urn:decentraland:off-chain:base-avatars:thunder_02_earring',
      'urn:decentraland:off-chain:base-avatars:hair_undere',
      'urn:decentraland:off-chain:base-avatars:f_eyes_06'
    ],
    forceRender: [],
    emotes: [
      { slot: 0, urn: 'handsair' },
      { slot: 1, urn: 'wave' },
      { slot: 2, urn: 'fistpump' },
      { slot: 3, urn: 'dance' },
      { slot: 4, urn: 'raiseHand' },
      { slot: 5, urn: 'clap' },
      { slot: 6, urn: 'money' },
      { slot: 7, urn: 'kiss' },
      { slot: 8, urn: 'headexplode' },
      { slot: 9, urn: 'shrug' }
    ],
    snapshots: {
      face256: 'https://profile-images.decentraland.org/entities/bafkreietha7mzh7q3lk4j236vut2znwqhbiapihg46p6yrv3j4lbwlzd34/face.png',
      body: 'https://profile-images.decentraland.org/entities/bafkreietha7mzh7q3lk4j236vut2znwqhbiapihg46p6yrv3j4lbwlzd34/body.png'
    },
    eyes: { color: { r: 0.2235294133424759, g: 0.48627451062202454, b: 0.6901960968971252 } },
    hair: { color: { r: 0.32549020648002625, g: 0.2352941334247589, b: 0.1764705926179886 } },
    skin: { color: { r: 0.9490196108818054, g: 0.7607843279838562, b: 0.6470588445663452 } }
  },
  blocked: [],
  interests: [],
  hasConnectedWeb3: true,
  country: '',
  employmentStatus: '',
  gender: '',
  pronouns: '',
  relationshipStatus: '',
  sexualOrientation: '',
  language: '',
  profession: '',
  realName: '',
  hobbies: '',
  birthdate: 0,
  links: []
}

const meta: Meta<typeof EventCard> = {
  title: 'Decentraland UI/Cards/Event Card',
  component: EventCard,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      description: 'Image URL',
      control: 'text'
    }
  }
}

type Story = StoryObj<typeof EventCard>

const Default: Story = {
  render: () => (
    <EventCard
      image={sceneThumbnail}
      sceneName="Event Title"
      coordinates="24,24"
      avatar={exampleAvatar}
      withShadow
      leftBadge={
        <BadgeGroup>
          <LiveBadge />
          <UserCountBadge count={24} />
        </BadgeGroup>
      }
      leftBadgeTransparent
    />
  )
}

const WithRedirectToAuth: Story = {
  render: () => (
    <EventCard
      image={sceneThumbnail}
      sceneName="Event With Auth Redirect"
      coordinates="24,24"
      avatar={exampleAvatar}
      withShadow
      leftBadge={
        <BadgeGroup>
          <LiveBadge />
          <UserCountBadge count={24} />
        </BadgeGroup>
      }
      leftBadgeTransparent
      redirectToAuth
    />
  )
}

const OneCard: Story = {
  render: () => (
    <StoryRow>
      <EventCard
        image={sceneThumbnail}
        sceneName="Single Event Card"
        coordinates="24,24"
        avatar={exampleAvatar}
        withShadow
        leftBadge={
          <BadgeGroup>
            <LiveBadge />
            <UserCountBadge count={24} />
          </BadgeGroup>
        }
        leftBadgeTransparent
      />
    </StoryRow>
  )
}

const TwoCards: Story = {
  render: () => (
    <StoryRow>
      <EventCard
        image={sceneThumbnail}
        sceneName="Live Music Festival"
        coordinates="24,24"
        avatar={exampleAvatar}
        withShadow
        leftBadge={
          <BadgeGroup>
            <LiveBadge />
            <UserCountBadge count={24} />
          </BadgeGroup>
        }
        leftBadgeTransparent
      />
      <EventCard
        image={sceneThumbnail}
        sceneName="Art Gallery Opening"
        coordinates="10,15"
        avatar={exampleAvatar}
        withShadow
        leftBadge={<UserCountBadge count={12} />}
        leftBadgeTransparent
      />
    </StoryRow>
  )
}

const ThreeCards: Story = {
  render: () => (
    <StoryRow>
      <EventCard
        image={sceneThumbnail}
        sceneName="Live Music Festival"
        coordinates="24,24"
        avatar={exampleAvatar}
        withShadow
        leftBadge={
          <BadgeGroup>
            <LiveBadge />
            <UserCountBadge count={24} />
          </BadgeGroup>
        }
        leftBadgeTransparent
      />
      <EventCard
        image={sceneThumbnail}
        sceneName="Art Gallery Opening"
        coordinates="10,15"
        avatar={exampleAvatar}
        withShadow
        leftBadge={<UserCountBadge count={12} />}
        leftBadgeTransparent
      />
      <EventCard image={sceneThumbnail} sceneName="Upcoming Community Meetup" coordinates="0,0" avatar={exampleAvatar} withShadow />
    </StoryRow>
  )
}

const CardQuantities: Story = {
  render: () => (
    <StorySection>
      <StoryRow>
        <EventCard
          image={sceneThumbnail}
          sceneName="Single Card"
          coordinates="24,24"
          avatar={exampleAvatar}
          withShadow
          leftBadge={
            <BadgeGroup>
              <LiveBadge />
              <UserCountBadge count={24} />
            </BadgeGroup>
          }
          leftBadgeTransparent
        />
      </StoryRow>
      <StoryRow>
        <EventCard
          image={sceneThumbnail}
          sceneName="Two Cards - First"
          coordinates="24,24"
          avatar={exampleAvatar}
          withShadow
          leftBadge={
            <BadgeGroup>
              <LiveBadge />
              <UserCountBadge count={24} />
            </BadgeGroup>
          }
          leftBadgeTransparent
        />
        <EventCard
          image={sceneThumbnail}
          sceneName="Two Cards - Second"
          coordinates="10,15"
          avatar={exampleAvatar}
          withShadow
          leftBadge={<UserCountBadge count={12} />}
          leftBadgeTransparent
        />
      </StoryRow>
      <StoryRow>
        <EventCard
          image={sceneThumbnail}
          sceneName="Three Cards - First"
          coordinates="24,24"
          avatar={exampleAvatar}
          withShadow
          leftBadge={
            <BadgeGroup>
              <LiveBadge />
              <UserCountBadge count={24} />
            </BadgeGroup>
          }
          leftBadgeTransparent
        />
        <EventCard
          image={sceneThumbnail}
          sceneName="Three Cards - Second"
          coordinates="10,15"
          avatar={exampleAvatar}
          withShadow
          leftBadge={<UserCountBadge count={12} />}
          leftBadgeTransparent
        />
        <EventCard image={sceneThumbnail} sceneName="Three Cards - Third" coordinates="0,0" avatar={exampleAvatar} withShadow />
      </StoryRow>
    </StorySection>
  )
}

const Multiline: Story = {
  render: () => (
    <StoryRow>
      <EventCard
        image={sceneThumbnail}
        sceneName="Short Title"
        coordinates="24,24"
        avatar={exampleAvatar}
        withShadow
        leftBadge={
          <BadgeGroup>
            <LiveBadge />
            <UserCountBadge count={24} />
          </BadgeGroup>
        }
        leftBadgeTransparent
      />
      <EventCard
        image={sceneThumbnail}
        sceneName="This Is A Much Longer Event Title That Wraps To Two Lines"
        coordinates="10,15"
        avatar={exampleAvatar}
        withShadow
        leftBadge={
          <BadgeGroup>
            <LiveBadge />
            <UserCountBadge count={8} />
          </BadgeGroup>
        }
        leftBadgeTransparent
      />
    </StoryRow>
  )
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default, WithRedirectToAuth, OneCard, TwoCards, ThreeCards, CardQuantities, Multiline }
