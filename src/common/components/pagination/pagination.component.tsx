import { FC, ReactElement, useEffect, useMemo, useRef } from "react"
import IconComponent from "common/components/icon/icon.component"
import { PaginationProps } from "common/components/pagination/types/pagination.type"
import usePagination from "./hooks/pagination.hook"

import "./styles/pagination.style.scss"

/**
 * Pagination Component
 * @param {PaginationProps} props
 * @returns {FC}
 */
const PaginationComponent: FC<PaginationProps> = ({
  onChange,
  page,
  range,
  totalPage = 1,
}) => {
  const { currentPage, goToPage, nextStep, prevStep, slicedPages } =
    usePagination({
      page,
      range,
      totalPage,
    })

  const prevCurrentPage = useRef(page || 1)

  useEffect(() => {
    if (prevCurrentPage.current !== currentPage) {
      onChange(currentPage)
      prevCurrentPage.current = currentPage
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  /**
   * Render page numbers
   * @returns {ReactElement}
   */
  const PageNumbers = (): ReactElement => {
    return (
      <>
        {slicedPages.map((pageNumber) => {
          const isActive = pageNumber === currentPage
          return (
            <button
              key={`page-btn-${pageNumber}`}
              data-active={isActive}
              onClick={(): void => {
                if (isActive) return
                goToPage(pageNumber)
              }}
            >
              {pageNumber}
            </button>
          )
        })}
      </>
    )
  }

  const hasPrevStep = useMemo(() => {
    return Boolean(Math.max(slicedPages[0] - 1, 0))
  }, [slicedPages])

  const hasNextStep = useMemo(() => {
    return slicedPages[slicedPages.length - 1] < totalPage
  }, [slicedPages, totalPage])

  if (totalPage <= 1) return null

  return (
    <div className="ui-pagination">
      {hasPrevStep && (
        <>
          <button onClick={(): void => goToPage(1)}>{1}</button>
          <button onClick={prevStep}>
            <IconComponent color="blackSoft" size={16}>
              three-dots
            </IconComponent>
          </button>
        </>
      )}
      <PageNumbers />
      {hasNextStep && (
        <>
          <button onClick={nextStep}>
            <IconComponent color="blackSoft" size={16}>
              three-dots
            </IconComponent>
          </button>
          <button onClick={(): void => goToPage(totalPage)}>{totalPage}</button>
        </>
      )}
    </div>
  )
}

export default PaginationComponent
