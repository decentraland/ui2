import { memo } from "react"
import Paper from "@mui/material/Paper"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import {
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableHeadRow,
} from "./ScenesTable.styled"

const createData = (
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) => {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
]

const ScenesTable = memo(() => {
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="simple table">
        <StyledTableHead>
          <StyledTableHeadRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </StyledTableHeadRow>
        </StyledTableHead>
        <StyledTableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  )
})

ScenesTable.displayName = "ScenesTable"

export { ScenesTable }
