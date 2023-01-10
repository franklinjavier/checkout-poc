import type { CartType } from '~/types/cart'
import { pluralize } from '~/utils/pluralize'

type CartSummaryProps = {
  cart: CartType
}

export function CartSummary({ cart }: CartSummaryProps) {
  return (
    <>
      <h3 className="font-medium text-lg my-2">{pluralize(cart.items.length, 'Item', 'Itens')} do pedido</h3>
      {cart.items.map((item) => (
        <div key={item.product.sku} className="flex gap-4">
          <figure className="w-10 h-10 shrink-0">
            <img src={item.product.imageObjects[0].thumbnail} alt={item.product.name} />
          </figure>
          <p
            className="overflow-hidden text-sm mb-2"
            style={{
              WebkitLineClamp: 3,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {item.product.name}
          </p>
        </div>
      ))}
    </>
  )
}
