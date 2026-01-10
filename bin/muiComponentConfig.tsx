const documentComponents: string[] = [
  "Autocomplete",
  "Button",
  "ButtonGroup",
  "Card",
  "Checkbox",
  "FormControlLabel",
  "FormGroup",
]

// Components that don't export their Props interface or have different naming
const problematicComponents: string[] = [
  "DefaultPropsProvider",
  "StyledEngineProvider",
  "Unstable_Grid2",
  "Unstable_TrapFocus",
]

// Components with complex generics that need special handling
const complexGenericComponents: string[] = [
  "Autocomplete",
  "InitColorSchemeScript",
  "Select",
  "TablePagination",
  "TextField",
]

// Components that need ReactElement children instead of string
const componentsThatNeedReactElements: Record<string, string> = {
  ClickAwayListener: "children: <div>ClickAwayListener Content</div>",
  Fade: "children: <div>Fade Content</div>",
  Grow: "children: <div>Grow Content</div>",
  Slide: "children: <div>Slide Content</div>",
  Snackbar: "children: <div>Snackbar Content</div>",
  Tooltip: "children: <div>Tooltip Content</div>",
  Unstable_TrapFocus: "children: <div>TrapFocus Content</div>",
  Zoom: "children: <div>Zoom Content</div>",
}

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
  CircularProgress: {
    args: `{size: 40}`,
    imports: [],
  },
  FilledInput: {
    args: `{placeholder: "Filled input"}`,
    imports: [],
  },
  FormControlLabel: {
    args: `{control: <Checkbox />, label: "Form Control Label"}`,
    imports: ["import Checkbox from '@mui/material/Checkbox'"],
  },
  GlobalStyles: {
    args: `{styles: { body: { backgroundColor: '#f5f5f5' } }}`,
    imports: [],
  },
  Input: {
    args: `{placeholder: "Input"}`,
    imports: [],
  },
  InputBase: {
    args: `{placeholder: "Input base"}`,
    imports: [],
  },
  LinearProgress: {
    args: `{variant: "determinate", value: 50}`,
    imports: [],
  },
  OutlinedInput: {
    args: `{placeholder: "Outlined input"}`,
    imports: [],
  },
  Pagination: {
    args: `{count: 10}`,
    imports: [],
  },
  Rating: {
    args: `{value: 3, max: 5}`,
    imports: [],
  },
  SpeedDialAction: {
    args: `{icon: <div>Icon</div>, tooltipTitle: "Action"}`,
    imports: [],
  },
  SpeedDialIcon: {
    args: `{icon: <div>Icon</div>}`,
    imports: [],
  },
  StepConnector: {
    args: `{}`,
    imports: [],
  },
  StepIcon: {
    args: `{icon: 1}`,
    imports: [],
  },
  TextareaAutosize: {
    args: `{minRows: 3, placeholder: "Textarea autosize"}`,
    imports: [],
  },
}

export {
  documentComponents,
  componentsConfig,
  problematicComponents,
  componentsThatNeedReactElements,
  complexGenericComponents,
}
