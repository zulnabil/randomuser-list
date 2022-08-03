import THEME_COLORS from "common/constants/color.constant"

export type ColorType = keyof typeof THEME_COLORS

export interface ColorInterface {
  color?: ColorType | string
}

export type DefaultThemeType =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "text"

export type DefaultSizeType = "large" | "default" | "small"

export type Nullable<T> = T | null | undefined
