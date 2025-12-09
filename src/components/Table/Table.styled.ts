import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material"
import { hexToRgba } from "../../utils/colors"

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
  "& .MuiTableCell-root:first-of-type": {
    borderRadius: `${theme.spacing(2)} 0 0 ${theme.spacing(2)}`,
  },
  "& .MuiTableCell-root:last-of-type": {
    borderRadius: `0 ${theme.spacing(2)} ${theme.spacing(2)} 0`,
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}))

const StyledTableHeadRow = styled(TableRow)(({ theme }) => ({
  height: "20px",
  "& .MuiTableCell-root": {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
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
  "& tr td:first-of-type, & tr th:first-of-type": {
    borderRadius: `${theme.spacing(2)} 0 0 ${theme.spacing(2)}`,
  },
  "& tr td:last-of-type, & tr th:last-of-type": {
    borderRadius: `0 ${theme.spacing(2)} ${theme.spacing(2)} 0`,
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

type StyledTableCellProps = {
  cellWidth?: string | number
  cellPadding?: number | string
}

const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== "cellWidth" && prop !== "cellPadding",
})<StyledTableCellProps>(({ theme, cellWidth, cellPadding }) => ({
  overflow: "hidden",
  ...(cellWidth && { width: cellWidth }),
  ...(cellPadding !== undefined && { padding: cellPadding }),
  [theme.breakpoints.down("sm")]: {
    width: "auto",
  },
}))

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

type BorderOverlayProps = {
  borderColor?: string
}

const BorderOverlay = styled(Box, {
  shouldForwardProp: (prop) => prop !== "borderColor",
})<BorderOverlayProps>(({ theme, borderColor }) => ({
  position: "absolute",
  inset: 0,
  borderRadius: theme.spacing(2),
  pointerEvents: "none",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: theme.spacing(2),
    padding: "3px",
    background: borderColor,
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
    pointerEvents: "none",
  },
}))

export {
  BorderOverlay,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableRow,
}
