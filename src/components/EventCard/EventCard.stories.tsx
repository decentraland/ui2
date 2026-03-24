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
        avatar={exampleAvatar}
        withShadow
        leftBadge={<UserCountBadge count={12} />}
        leftBadgeTransparent
      />
      <EventCard image={sceneThumbnail} sceneName="Upcoming Community Meetup" avatar={exampleAvatar} withShadow />
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
          avatar={exampleAvatar}
          withShadow
          leftBadge={<UserCountBadge count={12} />}
          leftBadgeTransparent
        />
        <EventCard image={sceneThumbnail} sceneName="Three Cards - Third" avatar={exampleAvatar} withShadow />
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

const WithoutAvatar: Story = {
  render: () => (
    <EventCard
      image={sceneThumbnail}
      sceneName="Event Without Avatar"
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

const Loading: Story = {
  render: () => (
    <StoryRow>
      <EventCard image="" sceneName="" loading />
      <EventCard image="" sceneName="" loading />
    </StoryRow>
  )
}

const MixedHeights: Story = {
  render: () => (
    <StorySection>
      <StoryRow>
        <EventCard image={sceneThumbnail} sceneName="Short Title" avatar={exampleAvatar} withShadow />
        <EventCard
          image={sceneThumbnail}
          sceneName="Another Short"
          avatar={exampleAvatar}
          withShadow
          leftBadge={<LiveBadge />}
          leftBadgeTransparent
        />
        <EventCard
          image={sceneThumbnail}
          sceneName="One Line Title"
          avatar={exampleAvatar}
          withShadow
          leftBadge={<UserCountBadge count={5} />}
          leftBadgeTransparent
        />
      </StoryRow>
      <StoryRow>
        <EventCard
          image={sceneThumbnail}
          sceneName="This Is A Much Longer Event Title That Wraps To Two Lines"
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
          sceneName="Another Long Title That Also Wraps To A Second Line Here"
          avatar={exampleAvatar}
          withShadow
          leftBadge={<UserCountBadge count={8} />}
          leftBadgeTransparent
        />
        <EventCard
          image={sceneThumbnail}
          sceneName="Two Line Event Title That Needs More Space To Show"
          avatar={exampleAvatar}
          withShadow
        />
      </StoryRow>
      <StoryRow>
        <EventCard image={sceneThumbnail} sceneName="Short Title" withShadow />
        <EventCard image={sceneThumbnail} sceneName="Another Short" withShadow leftBadge={<LiveBadge />} leftBadgeTransparent />
        <EventCard
          image={sceneThumbnail}
          sceneName="One Line Title"
          withShadow
          leftBadge={<UserCountBadge count={5} />}
          leftBadgeTransparent
        />
      </StoryRow>
      <StoryRow>
        <EventCard
          image={sceneThumbnail}
          sceneName="This Is A Much Longer Event Title That Wraps To Two Lines"
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
          sceneName="Another Long Title That Also Wraps To A Second Line Here"
          withShadow
          leftBadge={<UserCountBadge count={8} />}
          leftBadgeTransparent
        />
        <EventCard image={sceneThumbnail} sceneName="Two Line Event Title That Needs More Space To Show" withShadow />
      </StoryRow>
    </StorySection>
  )
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default, WithRedirectToAuth, OneCard, TwoCards, ThreeCards, CardQuantities, Multiline, WithoutAvatar, Loading, MixedHeights }
