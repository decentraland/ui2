import { memo, useCallback } from "react"
import { useMobileMediaQuery } from "../Media"
import { BaseRow, TableProps } from "./Table.types"
import {
  BorderOverlay,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableContainer,
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableRow,
} from "./Table.styled"

const TableComponent = <T extends BaseRow>(props: TableProps<T>) => {
  const { columns, rows, hoverEffect = true, onMobileRowClick } = props

  const isMobile = useMobileMediaQuery()

  const visibleColumns = isMobile
    ? columns.filter((col) => !col.hideOnMobile)
    : columns

  const handleRowClick = useCallback(
    (row: T, index: number) => {
      if (isMobile && onMobileRowClick) {
        onMobileRowClick(row, index)
      }
    },
    [isMobile, onMobileRowClick]
  )

  return (
    <StyledTableContainer>
      <StyledTable aria-label="table">
        <StyledTableHead>
          <StyledTableHeadRow>
            {visibleColumns.map((column) => (
              <StyledTableCell
                key={column.id}
                cellWidth={column.width}
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
              {visibleColumns.map((column, colIndex) => (
                <StyledTableCell
                  key={column.id}
                  cellWidth={column.width}
                  cellPadding={column.cellPadding}
                >
                  {colIndex === 0 && row.borderColor && (
                    <BorderOverlay borderColor={row.borderColor} />
                  )}
                  {column.render(row, index)}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </StyledTableContainer>
  )
}

TableComponent.displayName = "Table"

const Table = memo(TableComponent) as typeof TableComponent

export { Table }
