import { memo, useCallback } from "react"
import Paper from "@mui/material/Paper"
import { useTheme } from "@mui/material/styles"
import TableContainer from "@mui/material/TableContainer"
import useMediaQuery from "@mui/material/useMediaQuery"
import { BaseRow, TableProps } from "./Table.types"
import {
  BorderOverlay,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableRow,
} from "./Table.styled"

const TableComponent = <T extends BaseRow>(props: TableProps<T>) => {
  const { columns, rows, hoverEffect = true, onMobileRowClick } = props

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
              key={row.key}
              mobileClickable={!!onMobileRowClick}
              withBorder={!!row.borderColor}
              onClick={() => handleRowClick(row, index)}
            >
              {columns.map((column, colIndex) => (
                <StyledTableCell
                  key={column.id}
                  cellWidth={column.width}
                  hideOnMobile={column.hideOnMobile}
                  cellPadding={column.cellPadding}
                >
                  {row.borderColor && (
                    <BorderOverlay borderColor={row.borderColor} />
                  )}
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
