import { Avatar } from "@dcl/schemas"
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded"
import styled from "@emotion/styled"
import {
  Box,
  ListItemIcon,
  Menu,
  MenuItem,
  Palette,
  Paper,
  Typography,
  useTheme,
} from "@mui/material"
import ManDefault from "../../../Assets/man-default.png"

const UserMenuSignedInContainer = styled(Box)({
  display: "flex",
  position: "relative",
  textAlign: "left",
  outline: "none",
  justifyContent: "flex-end",
  alignItems: "center",
  height: "66px",
  "& > *": {
    marginLeft: "16px",
  },
})

const ActivityIcon = styled(HistoryRoundedIcon)(() => {
  const theme = useTheme<{
    palette: Palette & { icon: string }
  }>()

  return {
    "& path": {
      fill: theme.palette.icon,
    },
  }
})

const AvatarFaceContainer = styled(Box)({
  cursor: "pointer",
  marginLeft: "16px",
  marginRight: "16px",
})

const ActionsContainer = styled(Paper)(() => {
  const theme = useTheme()
  return {
    height: "607px",
    width: "561px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "25px",
      marginRight: "22px",
      width: "calc(100% - 25px - 22px)",
      height: "auto",
    },
  }
})

const AvatarPreviewContainer = styled(Box)({
  height: "110%",
  marginLeft: "-100px",
  marginBottom: "-100px",
  width: "330px",
})

const AvatarPreview = styled(Box)((props: { avatar?: Avatar }) => {
  let styles = {
    height: "100%",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "55%",
    backgroundImage: `url(${ManDefault})`,
    backgroundPosition: "center",
    backgroundPositionX: "50px",
    backgroundPositionY: "70px",
  }

  if (props.avatar?.avatar?.snapshots?.body) {
    styles = {
      ...styles,
      backgroundSize: "contain",
      backgroundImage: `url("${props.avatar.avatar.snapshots.body}")`,
      backgroundPositionX: "0px",
      backgroundPositionY: "0px",
    }
  }

  return styles
})

const MenuInformationActionContainer = styled(Box)({
  height: "100%",
  width: "331px",
  display: "flex",
  flexDirection: "column",
})

const MenuContainer = styled(Menu)(() => {
  const theme = useTheme()
  return {
    height: "720px",
    width: "561px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    "& .MuiPaper-root .MuiList-root": {
      paddingTop: 0,
      paddingBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "25px",
      marginRight: "22px",
      width: "calc(100% - 25px - 22px)",
      height: "auto",
    },
  }
})

const MenuInfoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "64px 0 47px",
})

const MenuInfoTypography = styled(Typography)(() => {
  const theme = useTheme()
  return {
    color: theme.palette.text.primary,
  }
})

const MenuInfoUnclaimedTypography = styled("span")(() => {
  const theme = useTheme()
  return {
    color: theme.palette.text.secondary,
    marginLeft: "12px",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "18px",
  }
})

const ActionsWrapper = styled(Box)({
  height: "330px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  margin: "0 55px 0 0",
})

const ActionsMenuItem = styled(MenuItem)(() => {
  const theme = useTheme()
  return {
    borderBottomColor: theme.palette.text.primary,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid" as const,
    color: theme.palette.text.primary,
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }
})

const ActionsListItemIcon = styled(ListItemIcon)(() => {
  const theme = useTheme()
  return {
    color: theme.palette.text.primary,
    "&.MuiListItemIcon-root": {
      minWidth: 0,
    },
  }
})

const LogoutContainer = styled(Box)(() => {
  const theme = useTheme()
  return {
    color: theme.palette.text.primary,
    fontWeight: "600",
    height: "24px",
    lineHeight: "18px",
    margin: "auto 55px 48px 0",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    cursor: "pointer",
    "& svg": {
      marginLeft: "16px",
    },
  }
})

export {
  UserMenuSignedInContainer,
  ActivityIcon,
  AvatarFaceContainer,
  AvatarPreviewContainer,
  AvatarPreview,
  MenuInformationActionContainer,
  MenuContainer,
  ActionsContainer,
  MenuInfoContainer,
  MenuInfoTypography,
  MenuInfoUnclaimedTypography,
  ActionsWrapper,
  ActionsMenuItem,
  ActionsListItemIcon,
  LogoutContainer,
}
