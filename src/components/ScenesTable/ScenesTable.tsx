import { memo } from "react"
import Paper from "@mui/material/Paper"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import { AvatarRow } from "./rows"
import { ScenesTableProps } from "./ScenesTable.types"
import {
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableHeadRow,
} from "./ScenesTable.styled"

const ScenesTable = memo((props: ScenesTableProps) => {
  const { rows } = props

  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="table">
        <StyledTableHead>
          <StyledTableHeadRow>
            <TableCell>Scene Name</TableCell>
            <TableCell>Creator</TableCell>
            <TableCell>Location</TableCell>
            <TableCell></TableCell>
          </StyledTableHeadRow>
        </StyledTableHead>
        <StyledTableBody>
          {rows.map((row, index) => (
            <TableRow key={`${row.name}-${index}`}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
                <AvatarRow avatar={row.creator} />
              </TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  )
})

ScenesTable.displayName = "ScenesTable"

export { ScenesTable }
