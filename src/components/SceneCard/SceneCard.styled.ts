import {
  Box,
  Card,
  CardActionArea,
  CardContent,
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
        ? `0px 0px 20px 6px ${hexToRgba("#DD56FF", 0.37)}`
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

const MediaContainer = styled(Box)({
  position: "relative",
})

const StyledCardMedia = styled(CardMedia)<{ shrinkOnHover?: boolean }>(
  ({ theme, shrinkOnHover }: { theme: Theme; shrinkOnHover?: boolean }) => ({
    height: theme.spacing(35),
    borderRadius: `${theme.spacing(2)} ${theme.spacing(2)} 0 0`,
    ...(shrinkOnHover && {
      transition: "height 0.3s ease-in-out",
      ".MuiCardActionArea-root:hover &": {
        height: theme.spacing(28.125),
      },
    }),
  })
)

const LeftBadge = styled(Box)<{ showOnHover?: boolean }>(
  ({ theme, showOnHover }: { theme: Theme; showOnHover?: boolean }) => ({
    position: "absolute",
    top: theme.spacing(2),
    left: theme.spacing(2),
    padding: theme.spacing(1, 2),
    minWidth: theme.spacing(6),
    minHeight: theme.spacing(6),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRadius: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    zIndex: 1,
    ...(showOnHover && {
      opacity: 0,
      height: 0,
      overflow: "hidden",
      transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
      ".MuiCardActionArea-root:hover &": {
        opacity: 1,
        height: "auto",
      },
    }),
  })
)

const RightBadge = styled(Box)<{ showOnHover?: boolean }>(
  ({ theme, showOnHover }: { theme: Theme; showOnHover?: boolean }) => ({
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
    padding: theme.spacing(1, 2),
    height: theme.spacing(5.25),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRadius: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: theme.typography.body1.fontSize,
    zIndex: 1,
    ...(showOnHover && {
      opacity: 0,
      height: 0,
      overflow: "hidden",
      transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
      ".MuiCardActionArea-root:hover &": {
        opacity: 1,
        height: "auto",
      },
    }),
  })
)

const StyledCardContent = styled(CardContent)(
  ({ theme }: { theme: Theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(0, 0, 0, 0.4)"
        : "rgba(255, 255, 255, 0.4)",
    borderRadius: `0 0 ${theme.spacing(2)} ${theme.spacing(2)}`,
  })
)

const ContentContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2),
}))

const AvatarContainer = styled(Box)<{ showOnHover?: boolean }>(
  ({ theme, showOnHover }: { theme: Theme; showOnHover?: boolean }) => ({
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
    ...(showOnHover && {
      opacity: 0,
      height: 0,
      overflow: "hidden",
      transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
      ".MuiCardActionArea-root:hover &": {
        opacity: 1,
        height: "auto",
      },
    }),
  })
)

const LocationChipContainer = styled(Box)<{ showOnHover?: boolean }>(
  ({ showOnHover }) => ({
    ...(showOnHover && {
      opacity: 0,
      height: 0,
      overflow: "hidden",
      transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
      ".MuiCardActionArea-root:hover &": {
        opacity: 1,
        height: "auto",
      },
    }),
  })
)

const LocationChip = styled(Chip)(({ theme }: { theme: Theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[200],
  color: theme.palette.text.primary,
}))

const JumpInButtonContainer = styled(Box)<{ showOnHover?: boolean }>(
  ({ theme, showOnHover }: { theme: Theme; showOnHover?: boolean }) => ({
    ...(showOnHover && {
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
    }),
  })
)

export {
  AvatarContainer,
  CardContainer,
  ContentContainer,
  LeftBadge,
  LocationChip,
  LocationChipContainer,
  JumpInButtonContainer,
  MediaContainer,
  RightBadge,
  StyledCardActionArea,
  StyledCardContent,
  StyledCardMedia,
}
