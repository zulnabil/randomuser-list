import { DropdownProps } from "common/components/dropdown/types/dropdown.type"
import { objToString } from "common/helper/string.helper"
import { FC } from "react"

import "./styles/dropdown.style.scss"

/**
 * Dropdown Component
 * @param {DropdownProps} props
 * @returns {FC}
 */
const DropdownComponent: FC<DropdownProps> = ({
  children,
  className: classNameInitial,
  ...rest
}) => {
  const className = {
    "ui-dropdown": true,
    [classNameInitial as string]: Boolean(classNameInitial),
  }
  return (
    <select className={objToString(className)} {...rest}>
      {children}
    </select>
  )
}

export default DropdownComponent
