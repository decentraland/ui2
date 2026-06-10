import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useMobileMediaQuery } from '../Media'
import { BaseRow, TableProps } from './Table.types'
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableContainer,
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableRow,
  TableCellBorderContainer
} from './Table.styled'

type TableCellBorderProps = {
  borderColor: string
}

const TableCellBorder = ({ borderColor }: TableCellBorderProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [rowWidth, setRowWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      const cell = ref.current?.closest('td')
      const row = cell?.closest('tr')
      if (row) {
        setRowWidth(row.offsetWidth)
      }
    }

    updateWidth()

    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return <TableCellBorderContainer ref={ref} $borderColor={borderColor} $width={rowWidth} />
}

const TableComponent = <T extends BaseRow>(props: TableProps<T>) => {
  const { columns, rows, hoverEffect = true, headerVisible = true, onMobileRowClick } = props

  const isMobile = useMobileMediaQuery()

  const visibleColumns = isMobile ? columns.filter(col => !col.hideOnMobile) : columns

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
        {headerVisible && (
          <StyledTableHead>
            <StyledTableHeadRow>
              {visibleColumns.map(column => (
                <StyledTableCell key={column.id} $cellWidth={column.width} $cellPadding={column.cellPadding}>
                  {column.header}
                </StyledTableCell>
              ))}
            </StyledTableHeadRow>
          </StyledTableHead>
        )}
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
                  $cellWidth={column.width}
                  $cellPadding={column.cellPadding}
                  $hasBorder={colIndex === 0 && !!row.borderColor}
                >
                  {colIndex === 0 && row.borderColor && <TableCellBorder borderColor={row.borderColor} />}
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

TableComponent.displayName = 'Table'

const Table = memo(TableComponent) as typeof TableComponent

export { Table }
