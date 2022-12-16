import { inputFromForm, UnpackData } from 'domain-functions'
import { useLoaderData, Form, useSubmit, ActionFunctionArgs, Link } from 'react-router-dom'
import { AddressItem } from '../components/address'
import { Box } from '../components/box'
import { getAddressRouteData } from '../models/compositions'
import { loaderResponseOrNotFound } from '../utils/responses'

export async function loader() {
  const result = await getAddressRouteData()
  return loaderResponseOrNotFound(result)
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await inputFromForm(request)
  console.log(formData)

  // await useAddress(formData.address)
  return {} // redirect('transacional/pagamento')
}

export default function Address() {
  const { address, cart } = useLoaderData() as UnpackData<typeof getAddressRouteData>
  const submit = useSubmit()
  console.log(cart)

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Box>
        <h2>Selecione um endereço de envio</h2>
        <Form
          method="post"
          onChange={(event) => {
            submit(event.currentTarget)
          }}
        >
          {address.map((item) => (
            <AddressItem key={item.label} item={item} />
          ))}
        </Form>
      </Box>

      <Link className="btn" style={{ marginTop: 10 }} to="../transacional/pagamento">
        Usar este endereço
      </Link>
    </div>
  )
}
