import { InputHTMLAttributes } from "react"

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  leftAddon?: React.ReactNode
  suggestionElement?: React.ReactNode
  valueInitial?: string
  errorMessage?: string
}
