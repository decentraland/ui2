import { ReactNode } from "react"

type BaseRow = {
  key: string
  borderColor?: string
}

type Column<T extends BaseRow> = {
  id: string
  header?: string
  width?: string | number
  hideOnMobile?: boolean
  cellPadding?: number | string
  render: (row: T, index: number) => ReactNode
}

type TableProps<T extends BaseRow> = {
  columns: Column<T>[]
  rows: T[]
  hoverEffect?: boolean
  onMobileRowClick?: (row: T, index: number) => void
}

export type { BaseRow, Column, TableProps }
