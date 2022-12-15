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
import type { AddressType } from '../models/address'
import { getAddress } from '../models/address'
import { CartTypeType, getCart } from '../models/cart'

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
  cart: CartTypeType
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
      </Box>

      <Button to="transacional/sucesso" style={{ marginTop: 10 }}>
        Finalizar Pedido
      </Button>
    </div>
  )
}
