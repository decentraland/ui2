const documentComponents: string[] = [
  "Autocomplete",
  "Button",
  "ButtonGroup",
  "Card",
  "Checkbox",
  "FormGroup",
]

type ComponentsConfigProps = Record<
  string,
  {
    args: string
    imports: string[]
  }
>

const componentsConfig: ComponentsConfigProps = {
  Autocomplete: {
    args: `{
      disablePortal: true,
      id: "combo-box-demo",
      options: [
        { label: 'Choice 1' },
        { label: 'Choice 2' },
        { label: 'Choice 3' },
      ],
      sx: { width: 300 },
      renderInput: (params) => <TextField {...params} label="Label" />
    }`,
    imports: ["import TextField from '@mui/material/TextField'"],
  },
  Button: {
    args: `{children: "Button", color: 'primary', variant: 'contained'}`,
    imports: [],
  },
  ButtonGroup: {
    args: `{children: <><Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button></>}`,
    imports: ["import Button from '@mui/material/Button'"],
  },
  Card: {
    args: `{
      children: <CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
        Decentraland
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Make new friends, explore diverse events, and spark your creativity in
        a virtual world built and owned by its community.
      </Typography>
    </CardContent>,
      sx: { width: 300 },
    }`,
    imports: [
      "import CardContent from '@mui/material/CardContent'",
      "import { Typography } from '@mui/material'",
    ],
  },
  Checkbox: {
    args: `{ inputProps: { 'aria-label': 'Checkbox demo' }, checked: true, color: "primary" }`,
    imports: [],
  },
  FormGroup: {
    args: `{children: (<><FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    <FormControlLabel required control={<Checkbox />} label="Required" />
    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    <Button onClick={linkTo('Checkbox', 'Documentation')}>Checkbox Doc</Button>
    </>)}`,
    imports: [
      "import FormControlLabel from '@mui/material/FormControlLabel'",
      "import Checkbox from '@mui/material/Checkbox'",
      "import Button from '@mui/material/Button'",
      "import { linkTo } from '@storybook/addon-links'",
    ],
  },
}

export { documentComponents, componentsConfig }
