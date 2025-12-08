import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material"

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
  },
  "& tr td:last-child, & tr th:last-child": {
    borderRadius: `0 ${theme.spacing(2)} ${theme.spacing(2)} 0`,
  },
}))

const SceneCell = styled(TableCell)({
  padding: 0,
})

export {
  SceneCell,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableHeadRow,
}
