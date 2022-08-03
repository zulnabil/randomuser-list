import { ButtonProps } from "common/components/button/types/button.type"
import { objToString } from "common/helper/string.helper"
import { FC } from "react"

import "./styles/button.style.scss"

/**
 * Button Component
 * @param {ButtonProps} props
 * @returns {FC}
 */
const ButtonComponent: FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  size = "default",
  theme = "primary",
  variant = "solid",
}) => {
  const className = {
    "ui-button": true,
    [`ui-button--size-${size}`]: Boolean(size),
    [`ui-button--theme-${theme}`]: Boolean(theme),
    [`ui-button--variant-${variant}`]: Boolean(variant),
  }
  return (
    <button className={objToString(className)} onClick={onClick}>
      {Boolean(icon) && <span className="ui-button__icon">{icon}</span>}
      {Boolean(children) && <span className="ui-button__text">{children}</span>}
    </button>
  )
}

export default ButtonComponent
