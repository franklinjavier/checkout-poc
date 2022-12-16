import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { Container } from '../components/container'
import { getConfig } from '../models/config'
import { loaderResponseOrNotFound } from '../utils/responses'
import { UnpackData } from 'domain-functions'

export async function loader() {
  const result = await getConfig()
  return loaderResponseOrNotFound(result)
}

export default function Root() {
  const { config } = useLoaderData() as UnpackData<typeof getConfig>

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
