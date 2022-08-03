import { ButtonHTMLAttributes } from "react"
import { DefaultSizeType, DefaultThemeType } from "./../../../types/common.type"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode
  icon?: React.ReactNode
  size?: DefaultSizeType
  theme?: DefaultThemeType
  variant?: ButtonVariantType
}

export type ButtonVariantType = "solid" | "outline" | "text"
