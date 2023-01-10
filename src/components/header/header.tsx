import { Link, NavLink, useRouteLoaderData } from 'react-router-dom'
import { Config } from '../../types/config'

const routes = [
  { href: '.', text: 'Sacola' },
  { href: 'transacional/endereco', text: 'Endereço' },
  { href: 'transacional/pagamento', text: 'Pagamento' },
  { href: 'transacional/sucesso', text: 'Sucesso' },
]

type ConfigData = {
  config: Config
}

export function Header() {
  const { config } = useRouteLoaderData('root') as ConfigData

  return (
    <header className="flex items-center sm:gap-36 flex-col sm:flex-row">
      <h1 className="sm:my-6 text-3xl font-bold tracking-tight text-indigo-500">
        <Link to=".">{config.name}</Link>
      </h1>
      <nav className="flex gap-3 mb-4 sm:mb-0">
        {routes.map((route) => (
          <NavLink
            to={route.href}
            end={route.href === '.'}
            key={route.href}
            className={({ isActive }) => (isActive ? 'text-indigo-500 font-bold' : 'text-zinc-700')}
          >
            {route.text}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
