import {
  useLoaderData,
  useRouteLoaderData,
  json,
  Form,
  ActionFunctionArgs,
  useActionData,
  redirect,
  useNavigation,
} from 'react-router-dom'
import { Box } from '../components/box/box'
import { CartSummary } from '../components/cart/cart-summary'
import { Input } from '../components/input'
import type { AddressType } from '../types/address'
import { getAddress } from '../models/address'
import type { CartType } from '../types/cart'
import { getCart } from '../models/cart'
import { PaymentType } from '../types/payment'
import { makePayment } from '../models/payment'

export async function loader() {
  const [cart, address] = await Promise.all([getCart(), getAddress()])
  return json({ cart, address })
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData())
  const errors: PaymentType = {}

  if (!formData.card) {
    errors.card = 'Informe um número de cartão de crédito'
  }
  if (!formData.name) {
    errors.name = 'Informe um títular'
  }

  if (Object.keys(errors).length) return json({ errors }, { status: 422 })

  try {
    await makePayment(formData)
    return redirect('../transacional/sucesso')
  } catch (e) {
    return json({ e }, { status: 500 })
  }
}

type DataLoader = {
  address: AddressType
  cart: CartType
}

type DataAction = {
  errors?: PaymentType
}

export default function Address() {
  const data = useLoaderData() as DataLoader
  const config = useRouteLoaderData('root')
  const actionData = useActionData() as DataAction
  const navigation = useNavigation()
  const isPending = navigation.state === 'submitting'
  console.log({ config, data, actionData })

  return (
    <fieldset style={{ display: 'flex', gap: '16px' }} disabled={isPending}>
      <Box style={{ width: '75%' }}>
        <h2>Pagamento</h2>
        <Form method="post" id="payment">
          <Input type="tel" name="card" label="Número de cartão" error={actionData?.errors?.card} />
          <Input type="text" name="name" label="Nome do títular" error={actionData?.errors?.name} />
          <Input type="text" name="expire" label="Data de validade" error={actionData?.errors?.expire} />
        </Form>
      </Box>

      <aside style={{ width: '25%' }}>
        <button type="submit" className="btn" style={{ marginBlock: 10 }} form="payment">
          {isPending ? 'Pagando...' : 'Finalizar Pedido'}
        </button>
        <CartSummary cart={data.cart} />
      </aside>
    </fieldset>
  )
}
