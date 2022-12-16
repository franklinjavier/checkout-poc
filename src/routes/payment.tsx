import { useLoaderData, useNavigation, ActionFunction } from 'react-router-dom'
import { UnpackData } from 'domain-functions'
import { formAction, Form } from '../components/form'

import { Box } from '../components/box'
import { CartSummary } from '../components/cart'
import { makePayment, schema } from '../models/payment'
import { getAddressRouteData } from '../models/compositions'
import { loaderResponseOrNotFound } from '../utils/responses'

export async function loader() {
  const result = await getAddressRouteData()
  return loaderResponseOrNotFound(result)
}

export const action: ActionFunction = async ({ request }) =>
  formAction({
    request,
    schema,
    mutation: makePayment,
    successPath: '../transacional/sucesso',
  })

export default function Address() {
  const { cart } = useLoaderData() as UnpackData<typeof getAddressRouteData>
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
        <CartSummary cart={cart} />
      </aside>
    </fieldset>
  )
}
