import { Video } from './Video'
import { VideoProps } from './Video.types'
import type { Meta, StoryObj } from '@storybook/react'

const SAMPLE_SRC = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'

const meta = {
  title: 'Decentraland UI/Video',
  component: Video,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Autoplay-safe wrapper over a native `<video>`. When `play` is a boolean it imperatively plays/pauses and retries muted if the browser blocks autoplay with sound. Leave `play` undefined to control it via native attributes.'
      }
    }
  },
  argTypes: {
    play: { control: 'boolean', description: 'Imperatively play (true) / pause (false). Undefined = native control.' },
    source: { control: 'text', description: 'Video source URL (forwarded to `src`)' },
    loop: { control: 'boolean' },
    muted: { control: 'boolean' },
    controls: { control: 'boolean' }
  }
} satisfies Meta<VideoProps>

type Story = StoryObj<typeof meta>

const WithControls: Story = {
  args: {
    source: SAMPLE_SRC,
    controls: true,
    width: 480
  }
}

const ImperativePlay: Story = {
  args: {
    source: SAMPLE_SRC,
    play: true,
    loop: true,
    muted: true,
    playsInline: true,
    width: 480
  },
  parameters: {
    docs: {
      description: {
        story: 'Driven by the `play` prop. Toggle it in the controls panel to play/pause; muted + loop for a background-video style.'
      }
    }
  }
}

// eslint-disable-next-line import/no-default-export
export default meta
export { WithControls, ImperativePlay }
