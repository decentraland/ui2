import { Box, IconButton } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { EventSmallCard } from './EventSmallCard'
import type { Meta, StoryObj } from '@storybook/react'
import sceneThumbnail from '../../Assets/scene-thumbnail.png'

const AVATAR_URL = 'https://profile-images.decentraland.org/entities/bafkreietha7mzh7q3lk4j236vut2znwqhbiapihg46p6yrv3j4lbwlzd34/face.png'

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
    <Box sx={{ maxWidth: 500 }}>
      <EventSmallCard
        image={sceneThumbnail}
        title="Live Music Festival"
        creatorName="alelevyyyy"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 10 mins"
        onClick={() => console.log('clicked')}
      />
    </Box>
  )
}

const WithoutImage: Story = {
  render: () => (
    <Box sx={{ maxWidth: 500 }}>
      <EventSmallCard title="Event Without Image" creatorName="SomeCreator" timeLabel="Starts in 2 hours" />
    </Box>
  )
}

const WithoutCreator: Story = {
  render: () => (
    <Box sx={{ maxWidth: 500 }}>
      <EventSmallCard image={sceneThumbnail} title="Event Without Creator" timeLabel="Starts in 30 mins" />
    </Box>
  )
}

const WithoutTime: Story = {
  render: () => (
    <Box sx={{ maxWidth: 500 }}>
      <EventSmallCard image={sceneThumbnail} title="Event Without Time" creatorName="alelevyyyy" creatorAvatarUrl={AVATAR_URL} />
    </Box>
  )
}

const LongTitle: Story = {
  render: () => (
    <Box sx={{ maxWidth: 500 }}>
      <EventSmallCard
        image={sceneThumbnail}
        title="This Is A Very Long Event Title That Should Be Truncated After Two Lines Of Text"
        creatorName="alelevyyyy"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 5 mins"
      />
    </Box>
  )
}

const WithAction: Story = {
  render: () => (
    <Box sx={{ maxWidth: 500 }}>
      <EventSmallCard
        image={sceneThumbnail}
        title="Event With Action Button"
        creatorName="alelevyyyy"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 15 mins"
        action={
          <IconButton size="small" sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: '#fff', width: 28, height: 28 }}>
            <CalendarMonthIcon sx={{ fontSize: 16 }} />
          </IconButton>
        }
      />
    </Box>
  )
}

const WithHoverActions: Story = {
  render: () => (
    <Box sx={{ maxWidth: 500 }}>
      <EventSmallCard
        image={sceneThumbnail}
        title="Hover Me For Actions"
        creatorName="alelevyyyy"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 20 mins"
        hoverActions={
          <>
            <IconButton size="small" sx={{ bgcolor: 'rgba(236,235,237,1)', borderRadius: 1, width: 30, height: 30 }}>
              <NotificationsNoneIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton size="small" sx={{ bgcolor: 'rgba(236,235,237,1)', borderRadius: 1, width: 30, height: 30 }}>
              <CalendarMonthIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton size="small" sx={{ bgcolor: 'rgba(236,235,237,1)', borderRadius: 1, width: 30, height: 30 }}>
              <ContentCopyIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </>
        }
      />
    </Box>
  )
}

const TwoCards: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 500 }}>
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
    </Box>
  )
}

const Grid: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 3 }}>
      <EventSmallCard
        image={sceneThumbnail}
        title="Live Music Festival"
        creatorName="alelevyyyy"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 10 mins"
      />
      <EventSmallCard
        image={sceneThumbnail}
        title="Art Gallery Opening Night"
        creatorName="SomeCreator"
        timeLabel="Starts in 30 mins"
      />
      <EventSmallCard
        image={sceneThumbnail}
        title="Community Meetup"
        creatorName="DCLFan"
        creatorAvatarUrl={AVATAR_URL}
        timeLabel="Starts in 1 hour"
      />
      <EventSmallCard image={sceneThumbnail} title="Workshop: Building in DCL" creatorName="BuilderPro" timeLabel="Starts in 3 hours" />
    </Box>
  )
}

const AvatarFallback: Story = {
  render: () => (
    <Box sx={{ maxWidth: 500 }}>
      <EventSmallCard
        image={sceneThumbnail}
        title="Creator Without Avatar"
        creatorName="NoAvatarUser"
        timeLabel="Starts in 45 mins"
      />
    </Box>
  )
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default, WithoutImage, WithoutCreator, WithoutTime, LongTitle, WithAction, WithHoverActions, TwoCards, Grid, AvatarFallback }
