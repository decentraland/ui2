import { Box } from '@mui/material'
import { Button } from './Button'
import { ButtonProps } from './Button.types'
import type { Meta, StoryObj } from '@storybook/react'

const MATRIX_COLORS = ['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const
const MATRIX_VARIANTS = ['contained', 'outlined', 'text'] as const
const MATRIX_STATES = ['Enabled', 'Hovered', 'Disabled', 'Loading'] as const
const MATRIX_SIZES = ['large', 'medium', 'small'] as const

type MatrixColor = (typeof MATRIX_COLORS)[number]
type MatrixVariant = (typeof MATRIX_VARIANTS)[number]
type MatrixSize = (typeof MATRIX_SIZES)[number]

const getHoverSx = (color: MatrixColor, variant: MatrixVariant) => {
  if (variant === 'contained') {
    const hoverKey = color === 'primary' ? 'light' : 'dark'
    return {
      '&&': {
        background: `var(--mui-palette-${color}-${hoverKey})`,
        boxShadow: 'var(--mui-shadows-2)'
      }
    }
  }
  return {}
}

const renderMatrixButton = (
  color: MatrixColor,
  variant: MatrixVariant,
  state: (typeof MATRIX_STATES)[number],
  size: MatrixSize
) => {
  const baseProps = { color, variant, size, children: 'Button' as const }

  switch (state) {
    case 'Hovered':
      return <Button {...baseProps} sx={getHoverSx(color, variant)} />
    case 'Disabled':
      return <Button {...baseProps} disabled />
    case 'Loading':
      return <Button {...baseProps} loading />
    default:
      return <Button {...baseProps} />
  }
}

const meta = {
  title: 'Decentraland UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
    loading: false
  },
  argTypes: {
    variant: {
      description: 'The variant to use',
      control: 'select',
      options: ['text', 'outlined', 'contained']
    },
    loading: {
      description: 'If true, the loading indicator is shown',
      control: 'boolean'
    },
    disabled: {
      description: 'If true, the button is disabled',
      control: 'boolean'
    },
    size: {
      description: 'The size of the button',
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    color: {
      description: 'The color of the button',
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning']
    },
    children: {
      description: 'The content of the button',
      control: 'text'
    }
  }
} satisfies Meta<ButtonProps>

type Story = StoryObj<ButtonProps>

// Story definitions
const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Basic button with default settings'
      },
      source: {
        code: `
<Button variant="contained">
  Button
</Button>
`
      }
    }
  }
}

const Variants: Story = {
  render: args => (
    <Box display="flex" gap={2}>
      <Button {...args} variant="contained">
        Contained
      </Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </Box>
  ),
  argTypes: {
    variant: { table: { disable: true } },
    children: { table: { disable: true } }
  },
  parameters: {
    docs: {
      description: {
        story: 'The Button component comes with three variants: contained (default), outlined, and text.'
      },
      source: {
        code: `
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>
`
      }
    }
  }
}

const Colors: Story = {
  render: args => (
    <Box display="flex" gap={2} flexWrap="wrap">
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="error">
        Error
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="info">
        Info
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
    </Box>
  ),
  argTypes: {
    color: { table: { disable: true } },
    children: { table: { disable: true } }
  },
  parameters: {
    docs: {
      description: {
        story: 'The Button component supports different colors to indicate different purposes.'
      },
      source: {
        code: `
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="error">Error</Button>
<Button color="warning">Warning</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
`
      }
    }
  }
}

const Sizes: Story = {
  render: args => (
    <Box display="flex" gap={2} alignItems="center">
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
    </Box>
  ),
  argTypes: {
    size: { table: { disable: true } },
    children: { table: { disable: true } }
  },
  parameters: {
    docs: {
      description: {
        story: 'The Button component comes in three sizes: small, medium (default), and large.'
      },
      source: {
        code: `
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
`
      }
    }
  }
}

const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading'
  },
  render: args => (
    <Box display="flex" gap={2}>
      <Button {...args} variant="contained" />
      <Button {...args} variant="outlined" />
      <Button {...args} variant="text" />
    </Box>
  ),
  argTypes: {
    loading: { table: { disable: true } },
    variant: { table: { disable: true } }
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons can show a loading state when processing an action.'
      },
      source: {
        code: `
<Button loading variant="contained">Loading</Button>
<Button loading variant="outlined">Loading</Button>
<Button loading variant="text">Loading</Button>
`
      }
    }
  }
}

const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled'
  },
  render: args => (
    <Box display="flex" gap={2}>
      <Button {...args} variant="contained" />
      <Button {...args} variant="outlined" />
      <Button {...args} variant="text" />
    </Box>
  ),
  argTypes: {
    disabled: { table: { disable: true } },
    variant: { table: { disable: true } }
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be disabled to indicate that they are not interactive.'
      },
      source: {
        code: `
<Button disabled variant="contained">Disabled</Button>
<Button disabled variant="outlined">Disabled</Button>
<Button disabled variant="text">Disabled</Button>
`
      }
    }
  }
}

const Matrix: Story = {
  render: () => (
    <Box sx={{ overflowX: 'auto' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `60px 60px repeat(${MATRIX_VARIANTS.length * MATRIX_COLORS.length}, minmax(90px, 1fr))`,
          alignItems: 'center',
          minWidth: 1500,
          border: '1px dashed #7B2FBE',
          '& > *, & > * > *': {
            borderRight: '1px dashed #7B2FBE',
            borderBottom: '1px dashed #7B2FBE',
            padding: '8px 4px'
          }
        }}
      >
        <Box sx={{ gridColumn: 'span 2' }} />
        {MATRIX_VARIANTS.map(variant => (
          <Box
            key={variant}
            sx={{
              gridColumn: `span ${MATRIX_COLORS.length}`,
              textAlign: 'center',
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'capitalize'
            }}
          >
            {variant}
          </Box>
        ))}

        <Box sx={{ gridColumn: 'span 2' }} />
        {MATRIX_VARIANTS.flatMap(variant =>
          MATRIX_COLORS.map(color => (
            <Box
              key={`h-${variant}-${color}`}
              sx={{
                textAlign: 'center',
                fontSize: '0.7rem',
                color: 'text.secondary',
                textTransform: 'capitalize'
              }}
            >
              {color}
            </Box>
          ))
        )}

        {MATRIX_STATES.map(state =>
          MATRIX_SIZES.map((size, sizeIdx) => (
            <Box key={`${state}-${size}`} sx={{ display: 'contents' }}>
              {sizeIdx === 0 ? (
                <Box
                  sx={{
                    gridRow: `span ${MATRIX_SIZES.length}`,
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    alignSelf: 'center'
                  }}
                >
                  {state}
                </Box>
              ) : null}
              <Box
                sx={{
                  fontSize: '0.7rem',
                  color: 'text.secondary',
                  textTransform: 'capitalize'
                }}
              >
                {size}
              </Box>
              {MATRIX_VARIANTS.flatMap(variant =>
                MATRIX_COLORS.map(color => (
                  <Box
                    key={`${variant}-${color}`}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    {renderMatrixButton(color, variant, state, size)}
                  </Box>
                ))
              )}
            </Box>
          ))
        )}
      </Box>
    </Box>
  ),
  argTypes: {
    variant: { table: { disable: true } },
    color: { table: { disable: true } },
    children: { table: { disable: true } },
    disabled: { table: { disable: true } },
    loading: { table: { disable: true } },
    size: { table: { disable: true } }
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete matrix of all button colors, variants, sizes, and states.'
      }
    }
  }
}

// We need to keep the default export for Storybook to work properly
// eslint-disable-next-line import/no-default-export
export default meta

export { Basic, Variants, Colors, Sizes, Loading, Disabled, Matrix }
