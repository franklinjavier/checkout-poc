import { ActionFunctionArgs, Link, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { Box } from '../components/box'
import { CartItem } from '../components/cart'
import { getCart } from '../models/cart'
import { pluralize } from '../utils/pluralize'
import { inputFromForm, UnpackData } from 'domain-functions'
import { loaderResponseOrNotFound } from '../utils/responses'
import { getConfig } from '../models/config'

export async function loader() {
  const result = await getCart()
  return loaderResponseOrNotFound(result)
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await inputFromForm(request)
  console.log(formData)

  return null
}

export default function Cart() {
  const { cart } = useLoaderData() as UnpackData<typeof getCart>
  const { config } = useRouteLoaderData('root') as UnpackData<typeof getConfig>
  const cartLength = cart.items.length

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Box>
        <h2>
          Sacola ({cartLength} {pluralize(cartLength, 'Produto', 'Produtos')})
        </h2>

        {cart.items.map((item) => (
          <CartItem key={item.product.sku} item={item} />
        ))}
      </Box>
      <Link className="btn" to="transacional/endereco" style={{ marginTop: 10 }}>
        Continuar
      </Link>
    </div>
  )
}
