import { createElement, HTMLProps } from 'react'

type ContainerProps = HTMLProps<HTMLElement>

export function Container({ as = 'div', children, ...props }: ContainerProps) {
  return createElement(
    as,
    {
      className: 'flex items-start gap-8 md:flex-row flex-col',
      ...props,
    },
    children,
  )
}
