import React from 'react'

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(props, forwardedRef) {
  const { type = 'text', label, disabled, ...rest } = props

  return (
    <label style={{ display: 'block' }}>
      {label}
      <input ref={forwardedRef} type={type} {...rest} />
    </label>
  )
})
