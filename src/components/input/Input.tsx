import React from 'react'

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(props, forwardedRef) {
  const { type = 'text', error, label, disabled, ...rest } = props

  return (
    <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
      {label}
      <input ref={forwardedRef} type={type} {...rest} />
      {error && <span style={{ color: 'red', fontSize: '14px' }}>{error}</span>}
    </label>
  )
})

export function InputError(props: JSX.IntrinsicElements['span']) {
  return <span style={{ color: 'red', fontSize: '14px' }} {...props} />
}
