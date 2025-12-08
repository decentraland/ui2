import { memo, useCallback } from "react"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import TableContainer from "@mui/material/TableContainer"
import { TableProps } from "./Table.types"
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableRow,
} from "./Table.styled"

const TableComponent = <T,>(props: TableProps<T>) => {
  const {
    columns,
    rows,
    getRowKey,
    hoverEffect = true,
    onMobileRowClick,
  } = props

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleRowClick = useCallback(
    (row: T, index: number) => {
      if (isMobile && onMobileRowClick) {
        onMobileRowClick(row, index)
      }
    },
    [isMobile, onMobileRowClick]
  )

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
            <StyledTableRow
              key={getRowKey(row, index)}
              mobileClickable={!!onMobileRowClick}
              onClick={() => handleRowClick(row, index)}
            >
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
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  )
}

TableComponent.displayName = "Table"

const Table = memo(TableComponent) as typeof TableComponent

export { Table }

