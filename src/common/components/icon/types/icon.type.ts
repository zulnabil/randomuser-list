import { ColorInterface } from "../../../types/common.type"

export type IconProps = ColorInterface & {
  children: string
  className?: string
  size?: number
}

export interface IconType {
  [key: string]: {
    path: string
    viewBox: string
    translate: string
  }
}
