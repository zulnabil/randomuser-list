import { FC } from "react"
import CardComponent from "common/components/card/card.component"
import { TableProps } from "common/components/table/types/table.type"

import "./styles/table.style.scss"
import ShimmerComponent from "common/components/shimmer/shimmer.component"

/**
 * Table Component
 * @param {TableProps} props
 * @returns {FC}
 */
const TableComponent: FC<TableProps> = ({
  columns,
  rows,
  isLoading,
  rowCount,
}) => {
  if (isLoading) {
    return (
      <CardComponent>
        <div className="shine__rows">
          {new Array(rowCount).fill(null).map((_, index) => (
            <div
              className="flex"
              key={`shimmer-${index}`}
              style={{ gap: 8, width: "100%" }}
            >
              {columns.map(({ key }) => (
                <ShimmerComponent
                  key={`shimmer-${key}-${index}`}
                  style={{ height: 30 }}
                />
              ))}
            </div>
          ))}
        </div>
      </CardComponent>
    )
  }

  if (!rows || !rows.length) return null

  return (
    <CardComponent>
      <table className="ui-table">
        <thead>
          <tr>
            {columns.map(({ key, label }, index) => (
              <th key={`th-${key}-${index}`}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`row-${index}`}>
              {columns.map(({ key }) => (
                <td key={`td-${key}-${index}`}>{row[key] || "-"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </CardComponent>
  )
}

export default TableComponent
