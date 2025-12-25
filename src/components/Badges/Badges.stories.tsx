import { Box } from "@mui/material"
import { NumberBadge, TextBadge } from "./Badges"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Decentraland UI/Badges",
  parameters: {
    layout: "centered",
  },
}

type Story = StoryObj

const NumberBadges: Story = {
  render: () => (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "center",
      }}
    >
      <NumberBadge value="1" />
      <NumberBadge value="2" />
      <NumberBadge value="3" />
      <NumberBadge value="10" />
      <NumberBadge value="99" />
    </Box>
  ),
}

const TextBadges: Story = {
  render: () => (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "center",
      }}
    >
      <TextBadge text="Best New" />
      <TextBadge text="Featured" />
      <TextBadge text="Hot" />
      <TextBadge text="Trending" />
    </Box>
  ),
}

const AllBadges: Story = {
  render: () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box>
        <Box sx={{ mb: 2, fontWeight: "bold" }}>Number Badges</Box>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <NumberBadge value="1" />
          <NumberBadge value="2" />
          <NumberBadge value="3" />
        </Box>
      </Box>
      <Box>
        <Box sx={{ mb: 2, fontWeight: "bold" }}>Text Badges</Box>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <TextBadge text="Best New" />
          <TextBadge text="Featured" />
          <TextBadge text="Hot" />
        </Box>
      </Box>
    </Box>
  ),
}

// eslint-disable-next-line import/no-default-export
export default meta
export { NumberBadges, TextBadges, AllBadges }
