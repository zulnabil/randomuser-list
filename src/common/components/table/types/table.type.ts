export interface TableProps {
  rows: any[]
  columns: ColumnObjectType[]
  rowCount?: number
  isLoading?: boolean
  onChangeSort?: (sortBy: string, sortOrder: SortOrderType) => void
}

export interface TableHeadingProps {
  label: string
  name?: string
  sortAsc?: boolean
  onChangeSort?: (sortBy: string, sortOrder: SortOrderType) => void
}

export type ColumnObjectType = {
  key: string
  label: string
  align?: "left" | "right" | "center"
  width?: number
}

export type SortOrderType = "asc" | "desc" | "noOrder"

export type SortType = {
  sortBy: string
  sortOrder: SortOrderType
}
