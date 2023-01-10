import { json, Link, Outlet, useLoaderData } from 'react-router-dom'
import { Container } from '../components/container'
import type { Config } from '../types/config'
import { getConfig } from '../models/config'

export async function loader() {
  const config = await getConfig()
  return json({ config })
}

type LoaderData = {
  config: Config
}

export default function Root() {
  const { config } = useLoaderData() as LoaderData

  return (
    <>
      <main className="max-w-4xl m-auto p-4 md:p-0 antialiased">
        <header>
          <h1 className="my-6 text-3xl font-bold tracking-tight text-indigo-500">
            <Link to=".">{config.name}</Link>
          </h1>
        </header>
        <Outlet />
      </main>
    </>
  )
}
