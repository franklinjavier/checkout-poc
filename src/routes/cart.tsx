import { ActionFunctionArgs, json, Link, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { Box } from '../components/box'
import { CartItem } from '../components/cart'
import type { CartType } from '../types/cart'
import { getCart } from '../models/cart'
import { pluralize } from '../utils/pluralize'

export async function loader() {
  const cart = await getCart()

  return json(cart)
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  console.log(formData)

  return null
}

type LoaderData = CartType

export default function Cart() {
  const cart = useLoaderData() as LoaderData
  const config = useRouteLoaderData('root')
  const cartLength = cart.items.length
  console.log(config)

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
