import { useLoaderData, useRouteLoaderData, json, useNavigation, ActionFunction } from 'react-router-dom'
import { makeDomainFunction } from 'domain-functions'
import { formAction, Form } from '../components/form'

import { Box } from '../components/box'
import { CartSummary } from '../components/cart'
import type { AddressType } from '../types/address'
import { getAddress } from '../models/address'
import type { CartType } from '../types/cart'
import { getCart } from '../models/cart'
import { makePayment, schema } from '../models/payment'

export async function loader() {
  const [cart, address] = await Promise.all([getCart(), getAddress()])
  return json({ cart, address })
}

const mutation = makeDomainFunction(schema)(async (values) => await makePayment(values))

export const action: ActionFunction = async ({ request }) =>
  formAction({
    request,
    schema,
    mutation,
    successPath: '../transacional/sucesso',
  })

type DataLoader = {
  address: AddressType
  cart: CartType
}

export default function Address() {
  const data = useLoaderData() as DataLoader
  const navigation = useNavigation()
  const isPending = navigation.state === 'submitting'

  return (
    <fieldset style={{ display: 'flex', gap: '16px' }} disabled={isPending}>
      <Box style={{ width: '75%' }}>
        <h2>Pagamento</h2>
        <Form schema={schema} method="post" id="payment">
          {({ Field }) => (
            <>
              <Field type="tel" name="card" label="Número de cartão" />
              <Field type="text" name="name" label="Nome do títular" />
              <Field type="text" name="expire" label="Data de validade" />
            </>
          )}
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
