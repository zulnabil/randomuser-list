import { FC } from "react"
import { LayoutProps } from "layouts/types/layout.type"
import { HeaderLayout } from "layouts/header/header.layout"

import "./styles/layout.style.scss"

const LayoutComponent: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="ui-layout background">
      <HeaderLayout />
      <div className="ui-layout__body container container--full flex flex-align-start">
        {children}
      </div>
    </main>
  )
}

export default LayoutComponent
