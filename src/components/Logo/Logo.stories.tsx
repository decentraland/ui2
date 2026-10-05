import { SvgIconProps } from '@mui/material'
import { Logo } from './Logo'
import { StoryContainer, StoryItemContainer } from './Logo.styled'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  component: Logo,
  title: 'Decentraland UI/Logo',
  tags: ['autodocs'],
  render: () => <Logo />
}

type Story = StoryObj<SvgIconProps>

const All: Story = {
  render: () => (
    <StoryContainer>
      <StoryItemContainer>
        <h3>Normal</h3>
        <Logo size="normal" />
      </StoryItemContainer>
      <StoryItemContainer>
        <h3>Large</h3>
        <Logo size="large" />
      </StoryItemContainer>
      <StoryItemContainer>
        <h3>Huge</h3>
        <Logo size="huge" />
      </StoryItemContainer>
      <StoryItemContainer>
        <h3>Massive</h3>
        <Logo size="massive" />
      </StoryItemContainer>
    </StoryContainer>
  )
}

// A Logo mounted inside a hidden container (e.g. a closed loading overlay) must not affect the visible one.
// Before each Logo got its own gradient ids, the visible Logo lost the fill of its circle here.
const WithHiddenSibling: Story = {
  render: () => (
    <StoryContainer>
      <div style={{ display: 'none' }}>
        <Logo size="huge" />
      </div>
      <StoryItemContainer>
        <h3>Visible Logo, hidden Logo mounted before it</h3>
        <Logo size="massive" />
      </StoryItemContainer>
    </StoryContainer>
  )
}

// eslint-disable-next-line import/no-default-export
export default meta
export { All, WithHiddenSibling }
