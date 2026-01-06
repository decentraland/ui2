import { Table } from "./Table"
import { gradient } from "../../theme/colors"
import { BaseRow, Column } from "./Table.types"
import type { Meta, StoryObj } from "@storybook/react"

type ExampleRow = BaseRow & {
  scene: string
  creator: string
  location: string
}

const exampleRows: ExampleRow[] = [
  {
    key: "1",
    scene: "Genesis Plaza",
    creator: "Decentraland",
    location: "0,0",
  },
  {
    key: "2",
    scene: "Metaverse HQ",
    creator: "DCL Team",
    location: "-10,15",
  },
  {
    key: "3",
    scene: "Art Gallery",
    creator: "CryptoArtist",
    location: "world.dcl.eth",
  },
  {
    key: "4",
    scene: "Music Festival",
    creator: "SoundDAO",
    location: "25,-30",
  },
]

const exampleRowsWithBorders: ExampleRow[] = [
  {
    key: "1",
    scene: "Genesis Plaza",
    creator: "Decentraland",
    location: "0,0",
    borderColor: gradient.gold,
  },
  {
    key: "2",
    scene: "Metaverse HQ",
    creator: "DCL Team",
    location: "-10,15",
    borderColor: gradient.silver,
  },
  {
    key: "3",
    scene: "Art Gallery",
    creator: "CryptoArtist",
    location: "world.dcl.eth",
    borderColor: gradient.bronze,
  },
  {
    key: "4",
    scene: "Music Festival",
    creator: "SoundDAO",
    location: "25,-30",
  },
]

const exampleRowsWithSolidBorder: ExampleRow[] = [
  {
    key: "1",
    scene: "Genesis Plaza",
    creator: "Decentraland",
    location: "0,0",
    borderColor: "#FF2D55",
  },
  {
    key: "2",
    scene: "Metaverse HQ",
    creator: "DCL Team",
    location: "-10,15",
  },
  {
    key: "3",
    scene: "Art Gallery",
    creator: "CryptoArtist",
    location: "world.dcl.eth",
  },
  {
    key: "4",
    scene: "Music Festival",
    creator: "SoundDAO",
    location: "25,-30",
  },
]

const exampleColumns: Column<ExampleRow>[] = [
  {
    id: "scene",
    header: "Scene",
    width: "40%",
    render: (row) => row.scene,
  },
  {
    id: "creator",
    header: "Creator",
    render: (row) => row.creator,
  },
  {
    id: "location",
    header: "Location",
    render: (row) => row.location,
  },
]

const singleColumn: Column<ExampleRow>[] = [
  {
    id: "scene",
    header: "Scene",
    render: (row) => row.scene,
  },
]

const mobileColumns: Column<ExampleRow>[] = [
  {
    id: "scene",
    header: "Scene",
    width: "50%",
    render: (row) => row.scene,
  },
  {
    id: "creator",
    header: "Creator",
    hideOnMobile: true,
    render: (row) => row.creator,
  },
  {
    id: "location",
    header: "Location",
    hideOnMobile: true,
    render: (row) => row.location,
  },
  {
    id: "action",
    header: "",
    width: { mobile: 80 },
    render: () => "Jump In",
  },
]

const meta: Meta<typeof Table<ExampleRow>> = {
  title: "Decentraland UI/Tables/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", padding: "16px" }}>
        <Story />
      </div>
    ),
  ],
}

type Story = StoryObj<typeof Table<ExampleRow>>

const Default: Story = {
  args: {
    columns: exampleColumns,
    rows: exampleRows,
  },
}

const WithBorders: Story = {
  args: {
    columns: exampleColumns,
    rows: exampleRowsWithBorders,
  },
}

const WithoutHoverEffect: Story = {
  args: {
    columns: exampleColumns,
    rows: exampleRows,
    hoverEffect: false,
  },
}

const DisabledHoverEffect: Story = {
  args: {
    columns: exampleColumns,
    rows: exampleRowsWithSolidBorder,
    hoverEffect: false,
  },
}

const MobileChangeLayout: Story = {
  args: {
    columns: mobileColumns,
    rows: exampleRows,
  },
  parameters: {
    docs: {
      description: {
        story:
          "On mobile, Creator and Location columns are hidden. Resize the viewport to see the layout change.",
      },
    },
  },
}

const SingleColumn: Story = {
  args: {
    columns: singleColumn,
    rows: exampleRows,
  },
}

const WithoutHeader: Story = {
  args: {
    columns: exampleColumns,
    rows: exampleRows,
    headerVisible: false,
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  Default,
  DisabledHoverEffect,
  MobileChangeLayout,
  SingleColumn,
  WithBorders,
  WithoutHeader,
  WithoutHoverEffect,
}
