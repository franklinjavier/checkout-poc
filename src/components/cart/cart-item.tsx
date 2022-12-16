import { UnpackData } from 'domain-functions'
import { getCart } from '../../models/cart'

type CartItemProps = {
  item: UnpackData<typeof getCart>['cart']['items'][number]
}
export function CartItem({ item }: CartItemProps) {
  return (
    <div style={{ display: 'flex' }}>
      <figure>
        <img src={item.product.imageObjects[0].small} alt={item.product.name} />
      </figure>
      <div>
        <p>{item.product.name}</p>
        <small style={{ color: 'gray' }}>Cod {item.product.sku}</small>
      </div>
    </div>
  )
}
