import { CardProps } from "common/components/card/types/card.type"
import { objToString } from "common/helper/string.helper"
import { FC } from "react"

import "./styles/card.style.scss"

/**
 * Card Component
 * @param {CardProps} props
 * @returns {FC}
 */
const CardComponent: FC<CardProps> = ({
  children,
  className: classNameInitial,
}) => {
  const className = {
    "ui-card": true,
    [classNameInitial as string]: Boolean(classNameInitial),
  }
  return <div className={objToString(className)}>{children}</div>
}

export default CardComponent
