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

const BadgesContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  left: theme.spacing(2),
  right: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  zIndex: 1,
}))

const LeftBadge = styled(Box)<{ showOnHover?: boolean }>(
  ({ theme, showOnHover }: { theme: Theme; showOnHover?: boolean }) => ({
    padding: theme.spacing(1, 2),
    minWidth: theme.spacing(6),
    minHeight: theme.spacing(6),
    maxWidth: "45%",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRadius: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    overflow: "hidden",
    "& > *": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      minWidth: 0,
      maxWidth: "100%",
    },
    ...(showOnHover && {
      opacity: 0,
      height: 0,
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
    padding: theme.spacing(1, 2),
    height: theme.spacing(5.25),
    maxWidth: "45%",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRadius: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: theme.typography.body1.fontSize,
    overflow: "hidden",
    "& > *": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      minWidth: 0,
      maxWidth: "100%",
    },
    ...(showOnHover && {
      opacity: 0,
      height: 0,
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
    flex: "1 1 auto",
    minWidth: 0,
    maxWidth: "50%",
    overflow: "hidden",
    ...(showOnHover && {
      opacity: 0,
      height: 0,
      transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
      ".MuiCardActionArea-root:hover &": {
        opacity: 1,
        height: "auto",
      },
    }),
  })
)

const AvatarTextContainer = styled(Box)({
  flex: 1,
  minWidth: 0,
  overflow: "hidden",
  "& .MuiTypography-root": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
})

const LocationChipContainer = styled(Box)<{ showOnHover?: boolean }>(
  ({ showOnHover }) => ({
    flex: "1 1 auto",
    minWidth: 0,
    maxWidth: "50%",
    display: "flex",
    justifyContent: "flex-end",
    ...(showOnHover && {
      opacity: 0,
      height: 0,
      overflow: "hidden",
      transform: "translateX(20px)",
      transition:
        "opacity 0.3s ease-in-out, height 0.3s ease-in-out, transform 0.3s ease-in-out",
      ".MuiCardActionArea-root:hover &": {
        opacity: 1,
        height: "auto",
        transform: "translateX(0)",
      },
    }),
  })
)

const LocationChip = styled(Chip)(({ theme }: { theme: Theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.4)"
      : "rgba(255, 255, 255, 0.4)",
  color: theme.palette.text.primary,
  cursor: "pointer",
  borderRadius: theme.spacing(0.5),
  maxWidth: "100%",
  "& .MuiChip-label": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}))

const JumpInButtonContainer = styled(Box)<{ showOnHover?: boolean }>(
  ({ theme, showOnHover }: { theme: Theme; showOnHover?: boolean }) => ({
    ...(showOnHover && {
      opacity: 0,
      height: 0,
      overflow: "hidden",
      transform: "translateY(20px)",
      transition:
        "opacity 0.3s ease-in-out, height 0.3s ease-in-out, margin-top 0.3s ease-in-out, transform 0.3s ease-in-out",
      ".MuiCardActionArea-root:hover &": {
        opacity: 1,
        height: "auto",
        marginTop: theme.spacing(4),
        transform: "translateY(0)",
      },
    }),
  })
)

export {
  AvatarContainer,
  AvatarTextContainer,
  BadgesContainer,
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
