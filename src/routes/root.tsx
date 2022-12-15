import { Outlet, useLoaderData } from 'react-router-dom'
import { Container } from '../components/container/container'
import { Config, getConfig } from '../models/config'

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
          <h1>{config.name}</h1>
        </header>
        <Outlet />
      </Container>
    </>
  )
}
