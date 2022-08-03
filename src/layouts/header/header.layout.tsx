import { FC } from "react"
import { HeaderProps } from "layouts/header/types/header.type"

import "./styles/header.style.scss"

export const HeaderLayout: FC<HeaderProps> = ({ logoUrl }) => {
  return (
    <div className="header-layout">
      <div className="header-layout__content container flex flex-align-center flex-justify-between">
        {Boolean(logoUrl) && (
          <div className="header-layout__logo">
            <img src={logoUrl} alt="logo" height="32" />
          </div>
        )}
      </div>
    </div>
  )
}
