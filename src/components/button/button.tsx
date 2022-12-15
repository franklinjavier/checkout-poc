import React from 'react'

type ButtonProps = React.ComponentPropsWithoutRef<'button'>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, forwardedRef) {
  return <button ref={forwardedRef} className="btn" {...props} />
})
