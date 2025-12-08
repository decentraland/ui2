import { Table } from "./Table"
import { Column } from "./Table.types"
import type { Meta, StoryObj } from "@storybook/react"

type ExampleRow = {
  id: number
  name: string
  email: string
  role: string
}

const exampleRows: ExampleRow[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
]

const exampleColumns: Column<ExampleRow>[] = [
  {
    id: "name",
    header: "Name",
    width: "30%",
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
    hideOnMobile: true,
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
    getRowKey: (row) => String(row.id),
  },
}

const WithoutHoverEffect: Story = {
  args: {
    columns: exampleColumns,
    rows: exampleRows,
    getRowKey: (row) => String(row.id),
    hoverEffect: false,
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default, WithoutHoverEffect }

