import { forwardRef, useState } from "react"
import { TextInputProps } from "common/components/text-input/types/text-input.type"

import "./styles/text-input.style.scss"

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      errorMessage,
      onBlur,
      onFocus,
      leftAddon,
      suggestionElement,
      valueInitial,
      ...props
    },
    ref
  ) => {
    const [isFocus, setIsFocus] = useState(false)

    const value = valueInitial || props.value
    return (
      <div className="ui-text-input__wrapper">
        {Boolean(leftAddon) && (
          <span className="ui-text-input__left-addon">{leftAddon}</span>
        )}
        <input
          autoComplete={suggestionElement ? "off" : props.autoComplete}
          className="ui-text-input"
          data-addon={Boolean(leftAddon)}
          onFocus={(event) => {
            onFocus && onFocus(event)
            setIsFocus(true)
          }}
          onBlur={(event) => {
            onBlur && onBlur(event)
            setTimeout(() => setIsFocus(false), 100)
          }}
          value={value}
          {...props}
          ref={ref}
        />
        {Boolean(errorMessage) && (
          <p className="ui-text-input__error">{errorMessage}</p>
        )}
        {Boolean(suggestionElement) && isFocus && suggestionElement}
      </div>
    )
  }
)

export default TextInput
