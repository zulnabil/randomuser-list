import { PaginationHooksOutput } from "common/components/pagination/types/pagination.type"
import { useMemo, useState } from "react"

const DEFAULT_RANGE = 3

/**
 * Function to get the pages with the range
 * @param current current page
 * @param range range of pages
 * @param step range step
 * @returns {boolean}
 */
const isInSlicedPages = (
  current: number,
  range: number,
  step: number
): boolean => {
  const bottom = range * step - range
  const top = range * step

  if (bottom < current && current <= top) {
    return true
  }

  return false
}

/**
 * Pagination custom hook
 * @param {{ page, range, totalPage }}
 * @returns {PaginationHooksOutput}
 */
export default function usePagination({
  page = 1,
  range = DEFAULT_RANGE,
  totalPage = 10,
}): PaginationHooksOutput {
  const [currentPage, setCurrentPage] = useState(page)
  const pages = useMemo(
    () =>
      Array(totalPage)
        .fill(0)
        .map((_, key) => key + 1),
    [totalPage]
  )

  const step = useMemo(
    () => Math.ceil(currentPage / range),
    [currentPage, range]
  )

  const slicedPages = useMemo(() => {
    if (totalPage > range) {
      return pages.filter((value) => isInSlicedPages(value, range, step))
    }
    return pages
  }, [totalPage, range, step, pages])

  /**
   * Go to page by number
   * @param {number} page
   */
  const goToPage = (page: number): void => {
    const pageNumber = Math.max(1, page)
    setCurrentPage(Math.min(pageNumber, totalPage))
  }

  /**
   * Go to next page
   */
  const nextPage = (): void => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPage))
  }

  /**
   * Go to previous page
   */
  const prevPage = (): void => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  /**
   * Go to next step
   */
  const nextStep = (): void => {
    const toPage = Math.min(slicedPages[slicedPages.length - 1] + 1, totalPage)
    setCurrentPage(toPage)
  }

  /**
   * Go to next step
   */
  const prevStep = (): void => {
    const toPage = Math.max(slicedPages[0] - 1, 1)
    setCurrentPage(toPage)
  }

  return {
    currentPage,
    goToPage,
    nextPage,
    nextStep,
    prevPage,
    prevStep,
    slicedPages,
  }
}
