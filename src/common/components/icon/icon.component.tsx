import { FC } from "react"
import ICONS from "common/components/icon/constant/icon.constant"
import { IconProps } from "common/components/icon/types/icon.type"
import { createElement } from "react"
import { ReactNode } from "react"
import THEME_COLORS from "common/constants/color.constant"

const IconComponent: FC<IconProps> = ({
  children,
  color = THEME_COLORS["blackSoft"],
  size = 14,
}) => {
  if (!ICONS[children]) return null

  const { path, translate, viewBox } = ICONS[children]
  const renderSvg = (): ReactNode => {
    return (
      <g
        id="icon"
        stroke="none"
        strokeWidth="1"
        fill={color}
        fillRule="evenodd"
      >
        <g transform={translate} fill={color}>
          <path fill={color} d={path} />
        </g>
      </g>
    )
  }

  return createElement("svg", {
    children: renderSvg(),
    height: `${size}px`,
    viewBox,
    width: `${size}px`,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
  })
}

export default IconComponent
