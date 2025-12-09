import { Table } from "./Table"
import { BaseRow, Column } from "./Table.types"
import type { Meta, StoryObj } from "@storybook/react"

const GOLD_GRADIENT =
  "linear-gradient(90deg, #FFE395, #824E00, #FFEBB7, #814E00)"

type ExampleRow = BaseRow & {
  name: string
  email: string
  role: string
}

const exampleRows: ExampleRow[] = [
  { key: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
  { key: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
  { key: "3", name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
  { key: "4", name: "Alice Brown", email: "alice@example.com", role: "User" },
]

const exampleRowsWithBorders: ExampleRow[] = [
  {
    key: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    borderColor: GOLD_GRADIENT,
  },
  { key: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
  {
    key: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Editor",
    borderColor: GOLD_GRADIENT,
  },
  { key: "4", name: "Alice Brown", email: "alice@example.com", role: "User" },
]

const exampleColumns: Column<ExampleRow>[] = [
  {
    id: "name",
    header: "Name",
    width: "30%",
    hideOnMobile: true,
    render: (row) => row.name,
  },
  {
    id: "email",
    header: "Email",
    render: (row) => row.email,
  },
  {
    id: "role",
    header: "Role",
    render: (row) => row.role,
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

const WithoutHoverEffect: Story = {
  args: {
    columns: exampleColumns,
    rows: exampleRows,
    hoverEffect: false,
  },
}

const WithMobileClick: Story = {
  args: {
    columns: exampleColumns,
    rows: exampleRows,
    onMobileRowClick: (row) => alert(`Clicked on ${row.name}`),
  },
}

const WithGoldBorder: Story = {
  args: {
    columns: exampleColumns,
    rows: exampleRowsWithBorders,
    hoverEffect: false,
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default, WithGoldBorder, WithMobileClick, WithoutHoverEffect }
