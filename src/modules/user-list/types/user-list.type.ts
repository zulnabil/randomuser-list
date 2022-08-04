import { SortOrderType } from "common/components/table/types/table.type"

export type UserListParamsType = {
  gender?: GenderType
  results?: string
  page?: string
  sortBy?: string
  sortOrder?: SortOrderType
}

export type GenderType = "male" | "female" | ""
