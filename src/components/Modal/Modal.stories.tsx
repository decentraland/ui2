import { useState } from "react"
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material"
import { Modal, ModalContent } from "./Modal"
import { Mana } from "../Mana"
import { ModalProps } from "./Modal.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  component: Modal,
  title: "Decentraland UI/Modal",
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Size of the Modal",
      control: "radio",
      options: ["tiny", "small", "medium", "large"],
    },
  },
  render: (args) => (
    <Box sx={{ height: "400px" }}>
      <ModalContent {...args}>{args.children}</ModalContent>
    </Box>
  ),
}

type Story = StoryObj<ModalProps>

const Simple = {
  args: {
    open: false,
    title: "Are you sure?",
    children: (
      <>
        <Typography variant="body1">
          You are about to sell your soul for{" "}
          <Mana inline={true}>{(2500).toLocaleString()}</Mana>.
        </Typography>
      </>
    ),
    actions: (
      <>
        <Button color="primary" variant="contained">
          Proceed
        </Button>
        <Button variant="outlined">Cancel</Button>
      </>
    ),
  },
}

const Actionable = {
  args: {
    title: "Are you sure?",
    children: (
      <>
        <Typography variant="body1">
          You are about to sell your soul for{" "}
          <Mana inline={true}>{(2500).toLocaleString()}</Mana>.
        </Typography>
      </>
    ),
    actions: (
      <>
        <Button color="primary" variant="contained">
          Proceed
        </Button>
        <Button variant="outlined">Cancel</Button>
      </>
    ),
  },
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <Box sx={{ height: "400px" }}>
        <Button onClick={() => setOpen(true)} variant="contained">
          Open Modal
        </Button>
        <Modal {...args} open={open} onClose={() => setOpen(false)} />
      </Box>
    )
  },
}

const Tiny: Story = {
  args: {
    open: false,
    size: "tiny",
    title: "Are you sure?",
    children: (
      <>
        You are about to sell your soul for{" "}
        <Mana inline>{(2500).toLocaleString()}</Mana>.
      </>
    ),
    actions: (
      <>
        <Button color="primary" variant="contained">
          Proceed
        </Button>
        <Button variant="outlined">Cancel</Button>
      </>
    ),
  },
}

const Small: Story = {
  args: {
    open: false,
    size: "small",
    title: "Are you sure?",
    children: (
      <>
        You are about to sell your soul for{" "}
        <Mana inline>{(2500).toLocaleString()}</Mana>.
      </>
    ),
    actions: (
      <>
        <Button color="primary" variant="contained">
          Proceed
        </Button>
        <Button variant="outlined">Cancel</Button>
      </>
    ),
  },
}

const CustomHeader: Story = {
  name: "Custom Header",
  args: {
    open: false,
    header: (
      <Box
        sx={{
          height: "200px",
          backgroundColor: "#123",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Give us your email!</Typography>
        <p>We need to feed our marketing gnomes</p>
      </Box>
    ),
    children: (
      <>
        You are about to sell your soul for{" "}
        <Mana inline>{(2500).toLocaleString()}</Mana>.
      </>
    ),
    actions: (
      <>
        <Button color="primary" variant="contained">
          Proceed
        </Button>
        <Button variant="outlined">Cancel</Button>
      </>
    ),
  },
}

const Form: Story = {
  args: {
    open: false,
    title: "Are you sure?",
    children: (
      <>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <TextField label="Name" variant="standard" placeholder="Luis XVII" />
          <TextField
            label="Email"
            variant="standard"
            placeholder="luigi@mail.com"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Check me"
          />
        </Box>
      </>
    ),
    actions: (
      <>
        <Button color="primary" variant="contained">
          Proceed
        </Button>
        <Button variant="outlined">Cancel</Button>
      </>
    ),
  },
}

const Closable: Story = {
  args: {
    open: false,
    title: "Are you sure?",
    onClose: () => alert("Close!"),
    children: (
      <>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <TextField label="Name" variant="standard" placeholder="Luis XVII" />
          <TextField
            label="Email"
            variant="standard"
            placeholder="luigi@mail.com"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Check me"
          />
        </Box>
      </>
    ),
    actions: (
      <>
        <Button color="primary" variant="contained">
          Proceed
        </Button>
        <Button variant="outlined">Cancel</Button>
      </>
    ),
  },
}

const Navigation: Story = {
  args: {
    open: false,
    title: "Are you sure?",
    onClose: () => alert("Close!"),
    onBack: () => alert("Back!"),
    children: (
      <>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <TextField label="Name" variant="standard" placeholder="Luis XVII" />
          <TextField
            label="Email"
            variant="standard"
            placeholder="luigi@mail.com"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Check me"
          />
        </Box>
      </>
    ),
    actions: (
      <>
        <Button color="primary" variant="contained">
          Proceed
        </Button>
        <Button variant="outlined">Cancel</Button>
      </>
    ),
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  Simple,
  Actionable,
  Tiny,
  Small,
  CustomHeader,
  Form,
  Closable,
  Navigation,
}
