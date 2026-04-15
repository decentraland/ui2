import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { EventSmallCard } from './EventSmallCard'
import { ActionIconButton, StoryColumn, StoryContainer, StoryGrid } from './EventSmallCard.stories.styled'
import sceneThumbnail from '../../Assets/scene-thumbnail.png'
import type { Meta, StoryObj } from '@storybook/react'

const AVATAR_URL =
  'https://profile-images.decentraland.org/entities/bafkreietha7mzh7q3lk4j236vut2znwqhbiapihg46p6yrv3j4lbwlzd34/face.png'

const meta: Meta<typeof EventSmallCard> = {
  title: 'Decentraland UI/Cards/Event Small Card',
  component: EventSmallCard,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#1A0A2E' }] }
  },
  tags: ['autodocs']
}

type Story = StoryObj<typeof EventSmallCard>

const Default: Story = {
  render: () => (
    <StoryContainer>
      <EventSmallCard
        image={sceneThumbnail}
        title="Live Music Festival"
        creatorName="alelevyyyy"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 10 mins"
        onClick={() => console.log('clicked')}
      />
    </StoryContainer>
  )
}

const WithoutImage: Story = {
  render: () => (
    <StoryContainer>
      <EventSmallCard title="Event Without Image" creatorName="SomeCreator" timeLabel="Starts in 2 hours" />
    </StoryContainer>
  )
}

const WithoutCreator: Story = {
  render: () => (
    <StoryContainer>
      <EventSmallCard image={sceneThumbnail} title="Event Without Creator" timeLabel="Starts in 30 mins" />
    </StoryContainer>
  )
}

const WithoutTime: Story = {
  render: () => (
    <StoryContainer>
      <EventSmallCard image={sceneThumbnail} title="Event Without Time" creatorName="alelevyyyy" creatorAvatarUrl={AVATAR_URL} />
    </StoryContainer>
  )
}

const LongTitle: Story = {
  render: () => (
    <StoryContainer>
      <EventSmallCard
        image={sceneThumbnail}
        title="This Is A Very Long Event Title That Should Be Truncated After Two Lines Of Text"
        creatorName="alelevyyyy"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 5 mins"
      />
    </StoryContainer>
  )
}

const WithAction: Story = {
  render: () => (
    <StoryContainer>
      <EventSmallCard
        image={sceneThumbnail}
        title="Event With Action Button"
        creatorName="alelevyyyy"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 15 mins"
        action={
          <ActionIconButton size="small">
            <CalendarMonthIcon fontSize="small" />
          </ActionIconButton>
        }
      />
    </StoryContainer>
  )
}

const WithHoverActions: Story = {
  render: () => (
    <StoryContainer>
      <EventSmallCard
        image={sceneThumbnail}
        title="Hover Me For Actions"
        creatorName="alelevyyyy"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 20 mins"
        hoverActions={
          <>
            <ActionIconButton size="small">
              <NotificationsNoneIcon fontSize="small" />
            </ActionIconButton>
            <ActionIconButton size="small">
              <CalendarMonthIcon fontSize="small" />
            </ActionIconButton>
            <ActionIconButton size="small">
              <ContentCopyIcon fontSize="small" />
            </ActionIconButton>
          </>
        }
      />
    </StoryContainer>
  )
}

const TwoCards: Story = {
  render: () => (
    <StoryColumn>
      <EventSmallCard
        image={sceneThumbnail}
        title="First Event"
        creatorName="alelevyyyy"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 10 mins"
      />
      <EventSmallCard
        image={sceneThumbnail}
        title="Second Event With a Longer Title"
        creatorName="SomeOtherCreator"
        timeLabel="Starts in 2 hours"
      />
    </StoryColumn>
  )
}

const Grid: Story = {
  render: () => (
    <StoryGrid>
      <EventSmallCard
        image={sceneThumbnail}
        title="Live Music Festival"
        creatorName="alelevyyyy"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 10 mins"
      />
      <EventSmallCard image={sceneThumbnail} title="Art Gallery Opening Night" creatorName="SomeCreator" timeLabel="Starts in 30 mins" />
      <EventSmallCard
        image={sceneThumbnail}
        title="Community Meetup"
        creatorName="DCLFan"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 1 hour"
      />
      <EventSmallCard image={sceneThumbnail} title="Workshop: Building in DCL" creatorName="BuilderPro" timeLabel="Starts in 3 hours" />
    </StoryGrid>
  )
}

const AvatarFallback: Story = {
  render: () => (
    <StoryContainer>
      <EventSmallCard image={sceneThumbnail} title="Creator Without Avatar" creatorName="NoAvatarUser" timeLabel="Starts in 45 mins" />
    </StoryContainer>
  )
}

const DisabledHover: Story = {
  render: () => (
    <StoryContainer>
      <EventSmallCard
        image={sceneThumbnail}
        title="No Hover Effect (Mobile/Tablet)"
        creatorName="alelevyyyy"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 10 mins"
        disableHover
        action={
          <ActionIconButton size="small">
            <CalendarMonthIcon fontSize="small" />
          </ActionIconButton>
        }
      />
    </StoryContainer>
  )
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  Default,
  WithoutImage,
  WithoutCreator,
  WithoutTime,
  LongTitle,
  WithAction,
  WithHoverActions,
  TwoCards,
  Grid,
  AvatarFallback,
  DisabledHover
}
