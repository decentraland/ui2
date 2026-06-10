import React, { type ReactElement } from 'react'
import type { Preview } from '@storybook/react'
import { ThemeProvider, dark, light } from '../src/theme'

const withDclTheme = (Story, context): ReactElement => {
  const selectedMode = context.globals?.dclTheme ?? 'light'
  return React.createElement(ThemeProvider, {
    theme: selectedMode === 'dark' ? dark : light,
    children: React.createElement(Story)
  })
}

export const decorators = [withDclTheme]

export const globalTypes = {
  dclTheme: {
    name: 'Theme',
    description: 'Decentraland theme selector',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' }
      ]
    }
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'centered',
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Decentraland UI', 'Material UI']
      }
    },
    backgrounds: {
      options: {
        'theme-background': {
          name: 'Theme background',
          value: 'var(--mui-palette-background-default, #f0f0f0)'
        },
        'theme-surface': {
          name: 'Theme surface',
          value: 'var(--mui-palette-background-paper, #ffffff)'
        },
        light: {
          name: 'light',
          value: '#f0f0f0'
        },
        dark: {
          name: 'dark',
          value: '#1a091c'
        },
        'decentraland-default': {
          name: 'Decentraland default',
          value: 'rgb(24, 20, 26)'
        },
        'decentraland-new': {
          name: 'Decentraland new',
          value: '#1a091c'
        }
      }
    },
    docs: {
      codePanel: true
    }
  },
  initialGlobals: {
    backgrounds: { value: 'theme-background' }
  },
  decorators: decorators
}

export default preview
