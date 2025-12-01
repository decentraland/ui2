import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Link,
  styled,
} from "@mui/material"
import { hexToRgba } from "../../utils/colors"

const CardContainer = styled(Card)<{
  withShadow?: boolean
  withBorder?: boolean
}>(({ theme, withShadow, withBorder }) => ({
  borderRadius: theme.spacing(2),
  boxSizing: "border-box",
  maxWidth: theme.spacing(50.625),
  backgroundColor: "transparent",
  position: "relative",
  overflow: "hidden",
  transition: [
    theme.transitions.create("transform", {
      duration: theme.transitions.duration.complex,
    }),
    theme.transitions.create("box-shadow", {
      duration: theme.transitions.duration.complex,
    }),
    theme.transitions.create(["height", "min-height"], {
      duration: theme.transitions.duration.complex,
    }),
  ],
  // transition:
  //   "transform 0.1s ease-in-out, box-shadow 0.3s ease-in-out, height 0.2s ease-in-out, min-height 0.2s ease-in-out",

  ...(withBorder && {
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderRadius: theme.spacing(2),
      background: "linear-gradient(to bottom, #FF2D55, #FFBC5B)",
      mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
      maskComposite: "exclude",
      padding: theme.spacing(0.5),
      pointerEvents: "none",
      zIndex: 1,
    },
  }),

  [theme.breakpoints.up("sm")]: {
    "&:hover": {
      boxShadow: withShadow
        ? `0px 0px 20px 6px ${hexToRgba("#DD56FF", 0.37)}`
        : "none",

      transition: [
        theme.transitions.create("transform", {
          duration: theme.transitions.duration.complex,
        }),
        theme.transitions.create("box-shadow", {
          duration: theme.transitions.duration.complex,
        }),
        theme.transitions.create(["height", "min-height"], {
          duration: theme.transitions.duration.complex,
        }),
      ].join(", "),
    },
  },
}))

const StyledCardActionArea = styled(CardActionArea)<{
  hasVisibleButton?: boolean
}>(({ theme, hasVisibleButton }) => ({
  borderRadius: theme.spacing(2),
  overflow: "hidden",
  height: hasVisibleButton ? theme.spacing(56) : theme.spacing(48.5),
  display: "flex",
  flexDirection: "column",
  position: "relative",
  backgroundColor: "transparent",
  "&:hover .MuiCardActionArea-focusHighlight": {
    opacity: 0,
  },
  [theme.breakpoints.down("sm")]: {
    height: "auto",
  },
}))

const MediaContainer = styled(Box)({
  position: "relative",
  flexShrink: 0,
  width: "100%",
})

const StyledCardMedia = styled(CardMedia)<{ shrinkOnHover?: boolean }>(
  ({ theme, shrinkOnHover }) => ({
    height: shrinkOnHover ? theme.spacing(28) : theme.spacing(32),
    width: "100%",
    borderRadius: `${theme.spacing(2)} ${theme.spacing(2)} 0 0`,
    backgroundSize: "cover",
    paddingBottom: "50%",

    ...(shrinkOnHover && {
      [theme.breakpoints.up("sm")]: {
        transition: theme.transitions.create("height", {
          duration: theme.transitions.duration.complex,
        }),
        ".MuiCardActionArea-root:hover &": {
          height: theme.spacing(24),
        },
      },
    }),

    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(25),
    },
  })
)

const BadgesContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  left: theme.spacing(2),
  right: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  zIndex: 10,
  pointerEvents: "none",
  "& > *": {
    pointerEvents: "auto",
  },
}))

const LeftBadge = styled(Box)<{ showOnHover?: boolean }>(
  ({ theme, showOnHover }) => ({
    padding: theme.spacing(1, 2),
    minWidth: theme.spacing(6),
    height: theme.spacing(6),
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
      [theme.breakpoints.up("sm")]: {
        opacity: 0,
        visibility: "hidden",
        transition: [
          theme.transitions.create("opacity", {
            duration: theme.transitions.duration.complex,
          }),
          theme.transitions.create("visibility", {
            duration: theme.transitions.duration.complex,
          }),
        ].join(", "),
        ".MuiCardActionArea-root:hover &": {
          opacity: 1,
          visibility: "visible",
        },
      },
    }),
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(4.5),
    },
  })
)

const RightBadge = styled(Box)<{ showOnHover?: boolean }>(
  ({ theme, showOnHover }) => ({
    padding: theme.spacing(1, 2),
    height: theme.spacing(4),
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
      [theme.breakpoints.up("sm")]: {
        opacity: 0,
        visibility: "hidden",
        transition: [
          theme.transitions.create("opacity", {
            duration: theme.transitions.duration.complex,
          }),
          theme.transitions.create("visibility", {
            duration: theme.transitions.duration.complex,
          }),
        ].join(", "),
        ".MuiCardActionArea-root:hover &": {
          opacity: 1,
          visibility: "visible",
        },
      },
    }),
  })
)

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.4)"
      : "rgba(255, 255, 255, 0.4)",
  borderRadius: `0 0 ${theme.spacing(2)} ${theme.spacing(2)}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  flex: "1 1 auto",
}))

const SceneTitle = styled(Box)({
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  wordBreak: "break-word",
})

const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(2),
  },
}))

const AvatarContainer = styled(Box)<{ showOnHover?: boolean }>(
  ({ theme, showOnHover }) => ({
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
    flex: "1 1 auto",
    maxWidth: "50%",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    ...(showOnHover && {
      [theme.breakpoints.up("sm")]: {
        opacity: 0,
        height: 0,
        transition: [
          theme.transitions.create("opacity", {
            duration: theme.transitions.duration.complex,
          }),
          theme.transitions.create("height", {
            duration: theme.transitions.duration.complex,
          }),
        ].join(", "),
        ".MuiCardActionArea-root:hover &": {
          opacity: 1,
          height: "auto",
        },
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

const AvatarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontWeight: theme.typography.fontWeightBold,
  "&:hover": {
    textDecoration: "none",
  },
}))

const AvatarAndLocationRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
  justifyContent: "space-between",
  flex: 1,
  minWidth: 0,
}))

const LocationChipContainer = styled(Box)<{ showOnHover?: boolean }>(
  ({ theme, showOnHover }) => ({
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
      transition: [
        theme.transitions.create("opacity", {
          duration: theme.transitions.duration.complex,
        }),
        theme.transitions.create("height", {
          duration: theme.transitions.duration.complex,
        }),
        theme.transitions.create("transform", {
          duration: theme.transitions.duration.complex,
        }),
      ].join(", "),
      ".MuiCardActionArea-root:hover &": {
        opacity: 1,
        height: "auto",
        transform: "translateX(0)",
      },
    }),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  })
)

const LocationChip = styled(Chip)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.4)"
      : "rgba(255, 255, 255, 0.4)",
  color: theme.palette.text.primary,
  cursor: "pointer",
  borderRadius: theme.spacing(1),
  maxWidth: "100%",
  "& .MuiChip-label": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  "& path:last-child": {
    fill: theme.palette.text.primary,
  },
}))

const JumpInButtonContainer = styled(Box)<{ showOnHover?: boolean }>(
  ({ theme, showOnHover }) => ({
    ...(showOnHover && {
      [theme.breakpoints.up("sm")]: {
        opacity: 0,
        height: 0,
        overflow: "hidden",
        transform: "translateY(20px)",
        transition: [
          theme.transitions.create("opacity", {
            duration: theme.transitions.duration.complex,
          }),
          theme.transitions.create("height", {
            duration: theme.transitions.duration.complex,
          }),
          theme.transitions.create("transform", {
            duration: theme.transitions.duration.complex,
          }),
        ].join(", "),
        ".MuiCardActionArea-root:hover &": {
          opacity: 1,
          height: "auto",
          transform: "translateY(0)",
        },
      },
    }),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  })
)

const JumpInMobileButton = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    width: "fit-content",
    flexShrink: 0,
  },
  "& .MuiButton-root": {
    height: "fit-content",
  },
}))

export {
  AvatarAndLocationRow,
  AvatarContainer,
  AvatarLink,
  AvatarTextContainer,
  BadgesContainer,
  CardContainer,
  ContentContainer,
  JumpInButtonContainer,
  JumpInMobileButton,
  LeftBadge,
  LocationChip,
  LocationChipContainer,
  MediaContainer,
  RightBadge,
  SceneTitle,
  StyledCardActionArea,
  StyledCardContent,
  StyledCardMedia,
}
