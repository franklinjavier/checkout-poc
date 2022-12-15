import { ActionFunctionArgs, json, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { Box } from '../components/box/box'
import { Button } from '../components/button/button'
import { CartItem } from '../components/cart/cart-item'
import { CartTypeType, getCart } from '../models/cart'

export async function loader() {
  const cart = await getCart()

  return json(cart)
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()

  console.log(formData)

  return null
}

type LoaderData = CartTypeType

export default function Cart() {
  const cart = useLoaderData() as LoaderData
  const config = useRouteLoaderData('root')
  const cartLength = cart.items.length

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Box>
        <h2>
          Sacola ({cartLength} Produto{cartLength > 1 ? 's' : ''})
        </h2>

        {cart.items.map((item) => (
          <CartItem key={item.product.sku} item={item} />
        ))}
      </Box>
      <Button to="transacional/endereco" style={{ marginTop: 10 }}>
        Continuar
      </Button>
    </div>
  )
}
