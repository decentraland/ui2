import { Box, Typography } from '@mui/material'
import { Carousel } from './Carousel'
import { CarouselProps } from './Carousel.types'
import type { Meta, StoryObj } from '@storybook/react'

type DemoSlide = { id: string; label: string; color: string }

const slides: DemoSlide[] = [
  { id: '1', label: 'Slide One', color: '#FF2D55' },
  { id: '2', label: 'Slide Two', color: '#691FA9' },
  { id: '3', label: 'Slide Three', color: '#00A2FF' },
  { id: '4', label: 'Slide Four', color: '#00C29D' },
  { id: '5', label: 'Slide Five', color: '#FFB627' }
]

const renderSlide = (slide: DemoSlide) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      minHeight: 300,
      backgroundColor: slide.color
    }}
  >
    <Typography variant="h4" sx={{ color: '#fff' }}>
      {slide.label}
    </Typography>
  </Box>
)

const meta: Meta<CarouselProps<DemoSlide>> = {
  title: 'Decentraland UI/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Generic, composition-based carousel: an infinite loop with drag/swipe, autoplay (pauses when the tab is hidden), dot pagination and desktop hover nav buttons. The consumer owns each slide via `renderItem`.'
      }
    }
  },
  argTypes: {
    autoplayDelay: { control: 'number', description: 'Autoplay interval in ms; 0 disables. Default 4000' },
    slideWidth: { control: 'number', description: 'Desktop slide width in px. Default 750' },
    slideAspectRatio: { control: 'text', description: 'CSS aspect-ratio for desktop/tablet slides, e.g. "750 / 370"' },
    alignItems: { control: 'radio', options: ['stretch', 'center', 'flex-start', 'flex-end'] }
  }
}

type Story = StoryObj<CarouselProps<DemoSlide>>

const Default: Story = {
  args: {
    items: slides,
    renderItem: renderSlide,
    keyExtractor: (slide: DemoSlide) => slide.id,
    slideAspectRatio: '750 / 370'
  }
}

const AutoplayDisabled: Story = {
  args: {
    ...Default.args,
    autoplayDelay: 0
  },
  parameters: {
    docs: { description: { story: 'Pass `autoplayDelay={0}` to disable autoplay; navigation stays manual.' } }
  }
}

const NarrowSlides: Story = {
  args: {
    ...Default.args,
    slideWidth: 480,
    slideAspectRatio: '480 / 320'
  }
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default, AutoplayDisabled, NarrowSlides }
