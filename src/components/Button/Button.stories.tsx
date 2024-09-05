import Stack from "@mui/material/Stack"
import { type Meta, type StoryObj } from "@storybook/react"
import { Button } from "./Button"
import type { ButtonProps } from "./Button.types"

const meta: Meta<ButtonProps> = {
  component: Button,
  title: "Decentraland UI/Button",
  tags: ["autodocs"],
  render: (props) => <Button {...props}>Button</Button>,
}

type Story = StoryObj<ButtonProps>

const Basic: Omit<Story, "variant" | "children"> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ variant, children, ...props }) => (
    <Stack spacing={2} direction="row">
      <Button variant="text" {...props}>
        Text
      </Button>
      <Button variant="contained" {...props}>
        Contained
      </Button>
      <Button variant="outlined" {...props}>
        Outlined
      </Button>
    </Stack>
  ),
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Basic }
