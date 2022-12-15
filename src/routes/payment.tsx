import {
  useLoaderData,
  useRouteLoaderData,
  json,
  Form,
  useSubmit,
  ActionFunctionArgs,
  redirect,
} from 'react-router-dom'
import { Box } from '../components/box/box'
import { Button } from '../components/button/button'
import { CartItem } from '../components/cart/cart-item'
import { CartSummary } from '../components/cart/cart-summary'
import { Input } from '../components/input'
import type { AddressType } from '../types/address'
import { getAddress } from '../models/address'
import type { CartType } from '../types/cart'
import { getCart } from '../models/cart'

export async function loader() {
  const [cart, address] = await Promise.all([await getCart(), await getAddress()])

  return json({ cart, address })
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData())
  console.log(formData)

  return redirect('transacional/pagamento')
}

type DataLoader = {
  address: AddressType
  cart: CartType
}

export default function Address() {
  const data = useLoaderData() as DataLoader
  const config = useRouteLoaderData('root')
  console.log({ config, data })
  const submit = useSubmit()

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Box style={{ width: '75%' }}>
        <h2>Pagamento</h2>
        <Form
          method="post"
          onChange={(event) => {
            submit(event.currentTarget)
          }}
        >
          <Input type="tel" name="card" label="Número de cartão" />
          <Input type="text" name="name" label="N" />
        </Form>
      </Box>

      <aside style={{ width: '25%' }}>
        <Button to="transacional/sucesso" style={{ marginBlock: 10 }}>
          Finalizar Pedido
        </Button>
        <CartSummary cart={data.cart} />
      </aside>
    </div>
  )
}
