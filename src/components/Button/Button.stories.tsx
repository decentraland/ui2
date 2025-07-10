import { Box } from "@mui/material"
import { Button } from "./Button"
import { ButtonProps } from "./Button.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Decentraland UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "The variant to use",
      control: "select",
      options: ["text", "outlined", "contained"],
      defaultValue: "contained",
    },
    loading: {
      description: "If true, the loading indicator is shown",
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      description: "If true, the button is disabled",
      control: "boolean",
      defaultValue: false,
    },
    size: {
      description: "The size of the button",
      control: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    color: {
      description: "The color of the button",
      control: "select",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
      defaultValue: "primary",
    },
    children: {
      description: "The content of the button",
      control: "text",
      defaultValue: "Button",
    },
  },
} satisfies Meta<ButtonProps>

type Story = StoryObj<ButtonProps>

// Story definitions
const Basic: Story = {
  args: {
    children: "Button",
    variant: "contained",
  },
  parameters: {
    docs: {
      description: {
        story: "Basic button with default settings",
      },
      source: {
        code: `
<Button variant="contained">
  Button
</Button>
`,
      },
    },
  },
}

const Variants: Story = {
  render: () => (
    <Box display="flex" gap={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The Button component comes with three variants: contained (default), outlined, and text.",
      },
      source: {
        code: `
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>
`,
      },
    },
  },
}

const Colors: Story = {
  render: () => (
    <Box display="flex" gap={2} flexWrap="wrap">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="error">Error</Button>
      <Button color="warning">Warning</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The Button component supports different colors to indicate different purposes.",
      },
      source: {
        code: `
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="error">Error</Button>
<Button color="warning">Warning</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
`,
      },
    },
  },
}

const Sizes: Story = {
  render: () => (
    <Box display="flex" gap={2} alignItems="center">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The Button component comes in three sizes: small, medium (default), and large.",
      },
      source: {
        code: `
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
`,
      },
    },
  },
}

const Loading: Story = {
  render: () => (
    <Box display="flex" gap={2}>
      <Button loading variant="contained">
        Loading
      </Button>
      <Button loading variant="outlined">
        Loading
      </Button>
      <Button loading variant="text">
        Loading
      </Button>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: "Buttons can show a loading state when processing an action.",
      },
      source: {
        code: `
<Button loading variant="contained">Loading</Button>
<Button loading variant="outlined">Loading</Button>
<Button loading variant="text">Loading</Button>
`,
      },
    },
  },
}

const Disabled: Story = {
  render: () => (
    <Box display="flex" gap={2}>
      <Button disabled variant="contained">
        Disabled
      </Button>
      <Button disabled variant="outlined">
        Disabled
      </Button>
      <Button disabled variant="text">
        Disabled
      </Button>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Buttons can be disabled to indicate that they are not interactive.",
      },
      source: {
        code: `
<Button disabled variant="contained">Disabled</Button>
<Button disabled variant="outlined">Disabled</Button>
<Button disabled variant="text">Disabled</Button>
`,
      },
    },
  },
}

// We need to keep the default export for Storybook to work properly
// eslint-disable-next-line import/no-default-export
export default meta

export { Basic, Variants, Colors, Sizes, Loading, Disabled }
