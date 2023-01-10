import { ActionFunctionArgs, json, Link, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { Box } from '../components/box'
import { CartItem } from '../components/cart'
import type { CartType } from '../types/cart'
import { getCart } from '../models/cart'
import { pluralize } from '../utils/pluralize'
import { Container } from '../components/container'
import { Config } from '../types/config'

export async function loader() {
  const cart = await getCart()

  return json({ cart })
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  console.log(formData)

  return null
}

type LoaderData = {
  cart: CartType
}

type ConfigData = {
  config: Config
}

export default function Cart() {
  const { cart } = useLoaderData() as LoaderData
  const { config } = useRouteLoaderData('root') as ConfigData
  const cartLength = cart.items.length

  console.log(config)

  return (
    <Container>
      <Box>
        <h2 className="font-medium text-xl mb-6">
          🛍️ Sacola ({cartLength} {pluralize(cartLength, 'Produto', 'Produtos')})
        </h2>

        <div className="flex gap-4 flex-col">
          {cart.items.map((item) => (
            <CartItem key={item.product.sku} item={item} />
          ))}
        </div>
      </Box>
      <Link className="btn" to="transacional/endereco">
        Continuar
      </Link>
    </Container>
  )
}
