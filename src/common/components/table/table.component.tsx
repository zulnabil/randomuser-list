import { FC, useState } from "react"
import CardComponent from "common/components/card/card.component"
import {
  TableHeadingProps,
  TableProps,
} from "common/components/table/types/table.type"

import "./styles/table.style.scss"
import ShimmerComponent from "common/components/shimmer/shimmer.component"
import IconComponent from "common/components/icon/icon.component"
import { objToString } from "common/helper/string.helper"

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
  onChangeSort,
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
              <TableHeading
                key={`th-${key}-${index}`}
                name={key}
                label={label}
                onChangeSort={onChangeSort}
              />
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

const TableHeading: FC<TableHeadingProps> = ({
  name,
  label,
  sortAsc = true,
  onChangeSort,
}) => {
  const [isSortAsc, setSortAsc] = useState(sortAsc)

  const className = {
    "icon-sort-asc": isSortAsc,
    "icon-sort-desc": !isSortAsc,
  }

  const handleClickSort = () => {
    setSortAsc((prev) => !prev)
    onChangeSort && name && onChangeSort(name, isSortAsc ? "desc" : "asc")
  }

  return (
    <th onClick={handleClickSort}>
      {label}
      &nbsp;
      <IconComponent
        className={objToString(className)}
        color="blackSoft"
        size={16}
      >
        chevron-down
      </IconComponent>
    </th>
  )
}

export default TableComponent
