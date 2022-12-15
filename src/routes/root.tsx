import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { Container } from '../components/container'
import type { Config } from '../types/config'
import { getConfig } from '../models/config'

export async function loader() {
  return await getConfig()
}

type LoaderData = Config

export default function Root() {
  const config = useLoaderData() as LoaderData

  return (
    <>
      <Container>
        <header>
          <h1>
            <Link to=".">{config.name}</Link>
          </h1>
        </header>
        <Outlet />
      </Container>
    </>
  )
}
