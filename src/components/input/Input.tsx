import React from 'react'

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(props, forwardedRef) {
  const { type = 'text', error, label, disabled, ...rest } = props

  return (
    <label className="flex flex-col mb-4 text-sm font-medium text-gray-700">
      {label}
      <input
        ref={forwardedRef}
        type={type}
        {...rest}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </label>
  )
})
