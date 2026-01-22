import emotionCache from "@emotion/cache"
import * as emotionReact from "@emotion/react"
import emotionStyled from "@emotion/styled"
import * as muiIcons from "@mui/icons-material"

// Export Themes
export {
  light as lightTheme,
  dark as darkTheme,
  ThemeProvider as DclThemeProvider,
} from "./theme"
export * as dclColors from "./theme/colors"

// Re-exports from @mui/material (named exports only, no export * — for tree-shaking)
export {
  AppBar,
  Badge,
  Box,
  Button,
  ButtonBase,
  Checkbox,
  Chip,
  CircularProgress,
  ClickAwayListener,
  CssBaseline,
  Divider,
  FormControlLabel,
  Grow,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  MenuList,
  Modal,
  Paper,
  Popper,
  Slider,
  styled,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
  ButtonGroup,
} from "@mui/material"
export { default as SvgIcon } from "@mui/material/SvgIcon"
export type { SvgIconProps } from "@mui/material/SvgIcon"
export type { ModalProps, ButtonProps, LinkProps } from "@mui/material"
export type { SvgIconOwnProps } from "@mui/material"

export { emotionReact, emotionStyled, emotionCache, muiIcons }
// Note: muiIcons is exported as a namespace for backward compatibility.
// For better tree-shaking, dApps should import icons directly from '@mui/icons-material':
//   import { Home, Settings } from '@mui/icons-material'
// instead of:
//   import { muiIcons } from 'decentraland-ui2'
export * from "./components/Address"
export * as dclAddressUtils from "./components/AddressField/utils"
export * from "./components/AvatarFace"
export * from "./components/Blockie"
export * from "./components/ChainSelector"
export * from "./components/UserLabel"
export * from "./components/DownloadButton"
export * from "./components/Icon"
export * from "./components/IconBadge"
export * from "./components/IconChain"
export * from "./components/JumpIn"
export * from "./components/Logo/Logo"
export * from "./components/Mana"
export * from "./components/Media"
export * as dclModal from "./components/Modal"
export * from "./components/Modal/DownloadModal"
export * from "./components/Navbar"
export * from "./components/Notifications"
export * from "./components/UserMenu"
export * from "./components/Banner"
export * from "./components/WearablePreview"
export * from "./components/Profile"
export * from "./components/Footer"
export * from "./components/FooterLanding"
export * from "./components/LanguageDropdown"
export * from "./components/RarityBadge"
export * from "./components/CatalogCard"
export * from "./components/CreditsToggle"
export * from "./components/SceneCard"
export * from "./components/ScenesTable"
export * from "./components/Badges"
export * as dclTable from "./components/Table"

export * as dclNetworkUtils from "./lib/network"

export * from "./modules/jumpIn"
export * as dclTools from "./modules"

export { getCDNRelease, CDNSource } from "./modules/cdnReleases"
export type { CDNConfig } from "./modules/cdnReleases"
