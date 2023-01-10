import { json, Link, NavLink, Outlet, useLoaderData } from 'react-router-dom'
import type { Config } from '../types/config'
import { getConfig } from '../models/config'

export async function loader() {
  const config = await getConfig()
  return json({ config })
}

type LoaderData = {
  config: Config
}

const routes = [
  { href: '.', text: 'Sacola' },
  { href: 'transacional/endereco', text: 'Endereço' },
  { href: 'transacional/pagamento', text: 'Pagamento' },
  { href: 'transacional/sucesso', text: 'Sucesso' },
]

export default function Root() {
  const { config } = useLoaderData() as LoaderData

  return (
    <>
      <main className="max-w-4xl m-auto p-4 md:p-0 antialiased">
        <header className="flex items-center gap-36">
          <h1 className="my-6 text-3xl font-bold tracking-tight text-indigo-500">
            <Link to=".">{config.name}</Link>
          </h1>
          <nav className="flex gap-3">
            {routes.map((route) => (
              <NavLink
                to={route.href}
                end={route.href === '.'}
                className={({ isActive }) => (isActive ? 'text-indigo-500 font-bold' : 'text-zinc-700')}
              >
                {route.text}
              </NavLink>
            ))}
          </nav>
        </header>
        <Outlet />
      </main>
    </>
  )
}
