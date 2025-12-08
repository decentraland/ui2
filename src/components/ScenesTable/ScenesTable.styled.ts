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
}))

const StyledTableHeadRow = styled(TableRow)(({ theme }) => ({
  height: "20px",
  "& .MuiTableCell-root": {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    borderBottom: "none",
  },
}))

const StyledTableBody = styled(TableBody)(({ theme }) => ({
  borderTop: `${theme.spacing(1)} solid transparent`,
  "& .MuiTableCell-root": {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderBottom: "none",
    textAlign: "left",
  },
  "& tr td:first-child, & tr th:first-child": {
    borderRadius: `${theme.spacing(2)} 0 0 ${theme.spacing(2)}`,
    overflow: "hidden",
  },
  "& tr td:last-child, & tr th:last-child": {
    borderRadius: `0 ${theme.spacing(2)} ${theme.spacing(2)} 0`,
  },
  "& tr": {
    borderRadius: theme.spacing(2),
    transition: theme.transitions.create("box-shadow", {
      duration: theme.transitions.duration.shorter,
    }),
    "&:hover": {
      boxShadow: `0px 0px 20px 6px ${hexToRgba("#DD56FF", 0.37)}`,
    },
  },
}))

const SceneCell = styled(TableCell)({
  padding: 0,
})

const ActionCellContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  position: "relative",
  width: "100%",
  minWidth: 100,
  "& .jump-in-button": {
    opacity: 0,
    visibility: "hidden",
    position: "absolute",
    right: 0,
    height: 40,
    transition: theme.transitions.create(["opacity", "visibility"], {
      duration: theme.transitions.duration.shortest,
    }),
  },
  "tr:hover & .jump-in-button": {
    opacity: 1,
    visibility: "visible",
  },
}))

export {
  ActionCellContainer,
  SceneCell,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableHeadRow,
}
