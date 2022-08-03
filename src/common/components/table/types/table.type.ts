export interface TableProps {
  rows: any[]
  columns: ColumnObjectType[]
  rowCount?: number
  isLoading?: boolean
}

export type ColumnObjectType = {
  key: string
  align?: "left" | "right" | "center"
  label?: string
  width?: number
}
