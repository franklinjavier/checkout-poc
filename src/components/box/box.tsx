type BoxProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode[] | React.ReactElement
}

export function Box({ style, ...props }: BoxProps) {
  return (
    <div
      style={{
        padding: '0px 16px 16px',
        border: '1px solid rgb(236, 236, 236)',
        WebkitBoxPack: 'justify',
        justifyContent: 'space-between',
        borderRadius: '4px',
        margin: '10px 7px 15px',
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: 'rgb(236, 236, 236) 0px 1px 2px 0px',
        width: '75%',
        ...style,
      }}
      {...props}
    />
  )
}
