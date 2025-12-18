import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material"
import { hexToRgba } from "../../utils/colors"

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  padding: theme.spacing(0, 3, 3, 3),
  backgroundImage: "none",
}))

const StyledTable = styled(Table)(({ theme }) => ({
  width: "100%",
  tableLayout: "fixed",
  borderCollapse: "separate",
  borderSpacing: `0 ${theme.spacing(1)}`,
}))

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  "& .MuiTableCell-root": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    textAlign: "left",
    ...theme.typography.overline,
    fontSize: "12px",
    color: theme.palette.text.primary,
  },
  "& .MuiTableCell-root:only-of-type": {
    borderRadius: theme.spacing(2),
  },
  "& .MuiTableCell-root:first-of-type:not(:only-of-type)": {
    borderRadius: theme.spacing(2, 0, 0, 2),
  },
  "& .MuiTableCell-root:last-of-type:not(:only-of-type)": {
    borderRadius: theme.spacing(0, 2, 2, 0),
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}))

const StyledTableHeadRow = styled(TableRow)(({ theme }) => ({
  height: "20px",
  "& .MuiTableCell-root": {
    padding: theme.spacing(0.5, 2),
    borderBottom: "none",
  },
}))

type StyledTableBodyProps = {
  hoverEffect?: boolean
}

const StyledTableBody = styled(TableBody, {
  shouldForwardProp: (prop) => prop !== "hoverEffect",
})<StyledTableBodyProps>(({ theme, hoverEffect = true }) => ({
  borderTop: `${theme.spacing(1)} solid transparent`,
  "& .MuiTableCell-root": {
    backgroundColor: hoverEffect ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.7)",
    borderBottom: "none",
    textAlign: "left",
  },
  "& tr td:only-of-type, & tr th:only-of-type": {
    borderRadius: theme.spacing(2),
  },
  ["& tr td:first-of-type:not(:only-of-type)," +
  " & tr th:first-of-type:not(:only-of-type)"]: {
    borderRadius: theme.spacing(2, 0, 0, 2),
  },
  ["& tr td:last-of-type:not(:only-of-type)," +
  " & tr th:last-of-type:not(:only-of-type)"]: {
    borderRadius: theme.spacing(0, 2, 2, 0),
  },
  "& tr": {
    borderRadius: theme.spacing(2),
    transition: theme.transitions.create("box-shadow", {
      duration: theme.transitions.duration.shorter,
    }),
    ...(hoverEffect && {
      "&:hover": {
        boxShadow: `0px 0px 20px 6px ${hexToRgba("#DD56FF", 0.37)}`,
      },
    }),
  },
  [theme.breakpoints.down("sm")]: {
    "& tr:hover": {
      boxShadow: "none",
    },
  },
}))

type ResponsiveWidth =
  | string
  | number
  | { mobile?: string | number; desktop?: string | number }

type StyledTableCellProps = {
  $cellWidth?: ResponsiveWidth
  $cellPadding?: number | string
  $hasBorder?: boolean
}

const isResponsiveWidth = (
  value: ResponsiveWidth
): value is { mobile?: string | number; desktop?: string | number } =>
  typeof value === "object" && ("mobile" in value || "desktop" in value)

const StyledTableCell = styled(TableCell)<StyledTableCellProps>(({
  theme,
  $cellWidth,
  $cellPadding,
  $hasBorder,
}) => {
  const desktopWidth =
    $cellWidth && isResponsiveWidth($cellWidth)
      ? $cellWidth.desktop
      : $cellWidth
  const mobileWidth =
    $cellWidth && isResponsiveWidth($cellWidth) ? $cellWidth.mobile : undefined

  return {
    overflow: $hasBorder ? "visible" : "hidden",
    ...(desktopWidth && { width: desktopWidth }),
    ...($cellPadding !== undefined && { padding: $cellPadding }),
    [theme.breakpoints.down("sm")]: {
      width: mobileWidth ?? "auto",
    },
    ...($hasBorder && {
      position: "relative",
    }),
  }
})

type StyledTableRowProps = {
  mobileClickable?: boolean
  withBorder?: boolean
}

const StyledTableRow = styled(TableRow, {
  shouldForwardProp: (prop) =>
    prop !== "mobileClickable" && prop !== "withBorder",
})<StyledTableRowProps>(({ theme, mobileClickable, withBorder }) => ({
  ...(mobileClickable && {
    [theme.breakpoints.down("sm")]: {
      cursor: "pointer",
      "&:active": {
        opacity: 0.7,
      },
    },
  }),
  ...(withBorder && {
    position: "relative",
  }),
}))

type TableCellBorderContainerProps = {
  $borderColor: string
  $width: number
}

const TableCellBorderContainer = styled(Box)<TableCellBorderContainerProps>(
  ({ theme, $borderColor, $width }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: $width || "100%",
    height: "100%",
    borderRadius: theme.spacing(2),
    pointerEvents: "none",
    zIndex: 1,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: theme.spacing(2),
      padding: "3px",
      boxSizing: "border-box",
      background: $borderColor,
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
      pointerEvents: "none",
    },
  })
)

export {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableContainer,
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableRow,
  TableCellBorderContainer,
}
