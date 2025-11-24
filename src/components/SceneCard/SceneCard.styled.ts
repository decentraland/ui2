import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Theme,
  styled,
} from "@mui/material"
import { hexToRgba } from "../../utils/colors"

const CardContainer = styled(Card)<{ withShadow?: boolean }>(
  ({ theme, withShadow }: { theme: Theme; withShadow?: boolean }) => ({
    borderRadius: theme.spacing(2),
    maxWidth: theme.spacing(43.125),
    overflow: "visible",
    "&:hover": {
      boxShadow: withShadow
        ? `0px 0px 20px 6px ${hexToRgba(
            theme.palette.mode === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black,
            0.37
          )}`
        : "none",
      transition: "box-shadow 0.3s ease-in-out",
    },
  })
)

const StyledCardActionArea = styled(CardActionArea)({
  "&:hover .MuiCardActionArea-focusHighlight": {
    opacity: 0,
  },
})

const StyledCardMedia = styled(CardMedia)(({ theme }: { theme: Theme }) => ({
  height: theme.spacing(35),
  transition: "height 0.3s ease-in-out",
  borderRadius: `${theme.spacing(2)} ${theme.spacing(2)} 0 0`,
  ".MuiCardActionArea-root:hover &": {
    height: theme.spacing(28.125),
  },
}))

const ContentContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2),
}))

const AvatarContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
}))

const LocationChipContainer = styled(Box)({
  opacity: 0,
  height: 0,
  overflow: "hidden",
  transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
  ".MuiCardActionArea-root:hover &": {
    opacity: 1,
    height: "auto",
  },
})

const LocationChip = styled(Chip)(({ theme }: { theme: Theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[200],
  color: theme.palette.text.primary,
}))

const JumpInButtonContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  opacity: 0,
  height: 0,
  overflow: "hidden",
  transition:
    "opacity 0.3s ease-in-out, height 0.3s ease-in-out, margin-top 0.3s ease-in-out",
  ".MuiCardActionArea-root:hover &": {
    opacity: 1,
    height: "auto",
    marginTop: theme.spacing(4),
  },
}))

export {
  AvatarContainer,
  CardContainer,
  ContentContainer,
  LocationChip,
  LocationChipContainer,
  JumpInButtonContainer,
  StyledCardActionArea,
  StyledCardMedia,
}
