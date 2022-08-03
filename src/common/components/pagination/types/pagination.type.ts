export interface PaginationProps {
  page: number
  onChange: (page: number) => void
  range?: number
  totalPage?: number
}

export type PaginationHooksOutput = {
  currentPage: number
  nextPage: () => void
  prevPage: () => void
  goToPage: (page: number) => void
  nextStep: () => void
  prevStep: () => void
  slicedPages: number[]
}
