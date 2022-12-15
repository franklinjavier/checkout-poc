import { Link, LinkProps } from 'react-router-dom'

type BoxProps = LinkProps & {
  children: React.ReactNode[] | React.ReactElement | string
}
export function Button(props: BoxProps) {
  return (
    <Link
      className="btn"
      {...props}
    />
  )
}
