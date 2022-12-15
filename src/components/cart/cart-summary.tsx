import type { CartType } from '../../types/cart'
import { pluralize } from '../../utils/pluralize'

type CartSummaryProps = {
  cart: CartType
}

export function CartSummary({ cart }: CartSummaryProps) {
  return (
    <>
      <div>{pluralize(cart.items.length, 'Item', 'Itens')} do pedido</div>
      {cart.items.map((item) => (
        <div style={{ display: 'flex', gap: '4px' }}>
          <figure>
            <img src={item.product.imageObjects[0].thumbnail} alt={item.product.name} />
          </figure>
          <p
            style={{
              fontSize: '14px',
              WebkitLineClamp: 3,
              overflow: 'hidden',
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
