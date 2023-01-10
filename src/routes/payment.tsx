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
import { Box } from '~/components/box'
import { CartSummary } from '~/components/cart'
import { Input } from '~/components/input'
import type { AddressType } from '~/types/address'
import { getAddress } from '~/models/address'
import type { CartType } from '~/types/cart'
import { getCart } from '~/models/cart'
import { PaymentType } from '~/types/payment'
import { makePayment } from '~/models/payment'
import { Container } from '~/components/container'

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
    return redirect('../sucesso')
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
    <Container as="fieldset" disabled={isPending}>
      <Box>
        <h2 className="font-medium text-xl mb-6">🔐 Pagamento</h2>
        <Form method="post" id="payment">
          <Input type="tel" name="card" label="Número de cartão" error={actionData?.errors?.card} />
          <Input type="text" name="name" label="Nome do títular" error={actionData?.errors?.name} />
          <Input type="text" name="expire" label="Data de validade" error={actionData?.errors?.expire} />
        </Form>
      </Box>

      <aside className="w-full md:w-72">
        <button type="submit" className="btn" form="payment">
          {isPending ? 'Pagando...' : 'Finalizar Pedido'}
        </button>
        <CartSummary cart={data.cart} />
      </aside>
    </Container>
  )
}
