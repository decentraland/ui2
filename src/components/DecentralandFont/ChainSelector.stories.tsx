import { Box, Typography } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Decentraland UI/Decentraland Font",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      name: "Font type",
      description: "The typography variant to use",
      control: {
        type: "select",
      },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "overline",
      ],
    },
  },
  render: (args) => (
    <Box>
      <Typography
        sx={{ fontFamily: "DecentralandLogo" }}
        variant="h1"
        {...args}
      >
        Decentraland
      </Typography>
    </Box>
  ),
}

type Story = StoryObj

const Simple: Story = {}

// eslint-disable-next-line import/no-default-export
export default meta
export { Simple }
