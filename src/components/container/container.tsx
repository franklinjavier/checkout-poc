type BoxProps = {
  children: React.ReactNode[] | React.ReactElement
}
export function Container(props: BoxProps) {
  return (
    <div
      style={{
        maxWidth: '1220px',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        padding: '20px 0px',
      }}
      {...props}
    />
  )
}
