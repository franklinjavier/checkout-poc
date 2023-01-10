import type { CartItemType } from '~/types/cart'

type CartItemProps = {
  item: CartItemType
}
export function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex gap-4">
      <figure className="w-20 h-20 shrink-0">
        <img src={item.product.imageObjects[0].small} alt={item.product.name} />
      </figure>
      <div>
        <p>{item.product.name}</p>
        <small className="text-zinc-500">Cod {item.product.sku}</small>
      </div>
    </div>
  )
}
