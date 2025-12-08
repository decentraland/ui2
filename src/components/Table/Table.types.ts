import { ReactNode } from "react"

type Column<T> = {
  id: string
  header?: string
  width?: string | number
  hideOnMobile?: boolean
  cellPadding?: number | string
  render: (row: T, index: number) => ReactNode
}

type TableProps<T> = {
  columns: Column<T>[]
  rows: T[]
  getRowKey: (row: T, index: number) => string
  hoverEffect?: boolean
  onMobileRowClick?: (row: T, index: number) => void
}

export type { Column, TableProps }

