export const componentTemplate = `import {
  default as Mui{subdirectory},
  {subdirectory}Props as Mui{subdirectory}Props,
} from "@mui/material/{subdirectory}"

export interface {subdirectory}Props extends Mui{subdirectory}Props {}

export const {subdirectory} = Mui{subdirectory}
`

export const storiesTemplate = `import { {subdirectory}, {subdirectory}Props } from "./{subdirectory}"
{otherImports}
import { Controls, Primary, Title } from "@storybook/blocks"
import type { Meta, StoryObj } from "@storybook/react"
import { Button as DclButton } from "../Button/Button"

const meta: Meta<{subdirectory}Props> = {
  component: {subdirectory},
  title: "Material UI/{subdirectory}",
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <div>
            <DclButton
              color="primary"
              href="https://mui.com/material-ui/react-{subdirectory}/"
              target="_blank"
            >
              @MUI Doc
            </DclButton>
          </div>
          <Primary />
          <Controls />
        </>
      ),
    },
  },
}

export default meta
type Story = StoryObj<{subdirectory}Props>

export const Default: Story = {args: {args}}
`

export const storiesJustArgsTemplate = `import Button from "@mui/material/Button"
import { {subdirectory}, {subdirectory}Props } from "./{subdirectory}"
import type { Meta, StoryObj } from "@storybook/react"
import { ArgsTable, Title } from "@storybook/blocks"

const meta: Meta<{subdirectory}Props> = {
  component: {subdirectory},
  title: "Material UI/{subdirectory}",
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <div>
            <Button
              color="primary"
              href="https://mui.com/material-ui/react-{subdirectory}/"
              target="_blank"
            >
              Access Doc
            </Button>
          </div>
          <ArgsTable />
        </>
      ),
    },
  },
}

export default meta
type Story = StoryObj<{subdirectory}Props>

export const Default: Story = {args: {args}}
`
