import { json, Outlet } from 'react-router-dom'
import { getConfig } from '~/models/config'
import { Header } from '~/components/header'

export async function loader() {
  const config = await getConfig()
  return json({ config })
}

export default function Root() {
  return (
    <main className="max-w-4xl m-auto p-4 md:p-0 antialiased">
      <Header />
      <Outlet />
    </main>
  )
}
