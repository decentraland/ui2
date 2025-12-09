import { ReactNode } from "react"

type BaseRow = {
  key: string
  borderColor?: string
}

type ResponsiveWidth =
  | string
  | number
  | { mobile?: string | number; desktop?: string | number }

type Column<T extends BaseRow> = {
  id: string
  header?: string
  width?: ResponsiveWidth
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
