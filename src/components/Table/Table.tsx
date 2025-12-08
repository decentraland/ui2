import { memo } from "react"
import Paper from "@mui/material/Paper"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import { TableProps } from "./Table.types"
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableHeadRow,
} from "./Table.styled"

const TableComponent = <T,>(props: TableProps<T>) => {
  const { columns, rows, getRowKey, hoverEffect = true } = props

  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="table">
        <StyledTableHead>
          <StyledTableHeadRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column.id}
                cellWidth={column.width}
                hideOnMobile={column.hideOnMobile}
                cellPadding={column.cellPadding}
              >
                {column.header}
              </StyledTableCell>
            ))}
          </StyledTableHeadRow>
        </StyledTableHead>
        <StyledTableBody hoverEffect={hoverEffect}>
          {rows.map((row, index) => (
            <TableRow key={getRowKey(row, index)}>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  cellWidth={column.width}
                  hideOnMobile={column.hideOnMobile}
                  cellPadding={column.cellPadding}
                >
                  {column.render(row, index)}
                </StyledTableCell>
              ))}
            </TableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  )
}

TableComponent.displayName = "Table"

const Table = memo(TableComponent) as typeof TableComponent

export { Table }

