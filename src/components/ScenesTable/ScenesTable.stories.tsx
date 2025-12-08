import { ScenesTable } from "./ScenesTable"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ScenesTable> = {
  title: "Components/ScenesTable",
  component: ScenesTable,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    background: {
      default: "rgba(69, 14, 78)",
    },
  },
}

type Story = StoryObj<typeof ScenesTable>

const Default: Story = {
  args: {},
}

ScenesTable.displayName = "ScenesTable"

// eslint-disable-next-line import/no-default-export
export default meta
export { Default }
