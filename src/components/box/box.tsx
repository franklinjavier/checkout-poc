type BoxProps = JSX.IntrinsicElements['div']

export function Box(props: BoxProps) {
  return (
    <div
      className="w-full md:w-[65%] p-4 border rounded overflow-hidden bg-white shadow sm:rounded-lg"
      {...props}
    />
  )
}
