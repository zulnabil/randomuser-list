import { SortType } from "common/components/table/types/table.type"

export const defaultSort: SortType = {
  sortBy: "username",
  sortOrder: "noOrder",
}

export const defaultParams = {
  gender: "",
  results: "10",
  seed: "ajaib",
  nat: "us",
  page: "1",
  ...defaultSort,
}

export const DEFAULT_LIMIT_PER_PAGE = 10
export const DEFAULT_TOTAL_PAGE = 10

export const COLUMNS = [
  {
    key: "username",
    label: "Username",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "gender",
    label: "Gender",
  },
  {
    key: "registeredDate",
    label: "Registered Date",
  },
]
