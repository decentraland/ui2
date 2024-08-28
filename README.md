<img src="https://ui.decentraland.org/decentraland_256x256.png" height="128" width="128" />

# Decentraland UI v2

This is basically `Material UI` themed with Decentrland's look & feel + some of our own components

See: [ui2.decentraland.org](https://ui2.decentraland.org)

## Usage

Install it:

```bash
npm install --save decentraland-ui2
```

### Import Decentraland UI v2's theme styles in your App's entry point

In your main ReactDOM renderer import Theme Provider and the theme you want to use

```tsx
// ./src/index.ts
...
import { ThemeProvider } from '@mui/material/styles'
import { dark } from 'decentraland-ui2/lib/themes/theme'
...

      <ThemeProvider theme={dark}>
        ...
      </ThemeProvider>
...
```

Now you can use Decentraland UI v2's components:

```tsx
import React from "react"
import { Button } from "decentraland-ui2/lib/@mui"

export const CustomButton = (props) => {
  return <Button {...props}>Save</Button>
}
```

## Development

Prerequisites: Node.js 16 React 17|18 (or compatible)

Install dependencies and start Storybook:

```
$ npm install
$ npm run generate:storybooks // This will regenerate @MUI components
$ npm run start
```
