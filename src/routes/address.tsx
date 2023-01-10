import {
  useLoaderData,
  useRouteLoaderData,
  json,
  Form,
  useSubmit,
  ActionFunctionArgs,
  Link,
} from 'react-router-dom'
import { AddressItem } from '~/components/address'
import { Box } from '~/components/box'
import type { AddressType } from '~/types/address'
import { getAddress } from '~/models/address'
import { getCart } from '~/models/cart'
import type { CartType } from '~/types/cart'
import { Container } from '~/components/container'

export async function loader() {
  const [cart, address] = await Promise.all([getCart(), getAddress()])

  return json({ cart, address })
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData())
  console.log(formData)

  // await useAddress(formData.address)
  return {} // redirect('transacional/pagamento')
}

type DataLoader = {
  address: AddressType
  cart: CartType
}

export default function Address() {
  const data = useLoaderData() as DataLoader
  const config = useRouteLoaderData('root')
  // console.log({ config, data })
  const submit = useSubmit()

  return (
    <Container>
      <Box>
        <h2 className="font-medium text-xl mb-6">🏠 Endereço de envio</h2>
        <Form
          method="post"
          onChange={(event) => {
            submit(event.currentTarget)
          }}
        >
          {data.address.items.map((item) => (
            <AddressItem key={item.label} item={item} />
          ))}
        </Form>
      </Box>

      <Link className="btn" to="../transacional/pagamento">
        Usar este endereço
      </Link>
    </Container>
  )
}
