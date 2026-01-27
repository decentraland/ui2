import { Box, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Decentraland UI/Decentraland Font',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'Font type',
      description: 'The typography variant to use',
      control: {
        type: 'select'
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline']
    }
  },
  render: args => (
    <Box>
      <Typography sx={{ fontFamily: 'DecentralandHero' }} variant="h1" {...args}>
        Decentraland
      </Typography>
    </Box>
  )
}

type Story = StoryObj

const Simple: Story = {}

const All: Story = {
  render: () => (
    <Box>
      <Typography sx={{ fontFamily: 'DecentralandHero' }} variant="h1">
        Decentraland
      </Typography>
      <Typography sx={{ fontFamily: 'DecentralandHero' }} variant="h2">
        Decentraland
      </Typography>
      <Typography sx={{ fontFamily: 'DecentralandHero' }} variant="h3">
        Decentraland
      </Typography>
      <Typography sx={{ fontFamily: 'DecentralandHero' }} variant="h4">
        Decentraland
      </Typography>
      <Typography sx={{ fontFamily: 'DecentralandHero' }} variant="h5">
        Decentraland
      </Typography>
      <Typography sx={{ fontFamily: 'DecentralandHero' }} variant="h6">
        Decentraland
      </Typography>
      <Typography sx={{ fontFamily: 'DecentralandHero' }} variant="subtitle1">
        Decentraland
      </Typography>
      <Typography sx={{ fontFamily: 'DecentralandHero' }} variant="subtitle2">
        Decentraland
      </Typography>
      <Typography sx={{ fontFamily: 'DecentralandHero' }} variant="body1">
        Decentraland
      </Typography>
      <Typography sx={{ fontFamily: 'DecentralandHero' }} variant="body2">
        Decentraland
      </Typography>
      <Typography sx={{ fontFamily: 'DecentralandHero' }} variant="caption">
        Decentraland
      </Typography>
      <Typography sx={{ fontFamily: 'DecentralandHero' }} variant="overline">
        Decentraland
      </Typography>
    </Box>
  )
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Simple, All }
