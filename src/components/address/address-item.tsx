import type { AddressItemType } from '../../types/address'

type AddressItemProps = {
  item: AddressItemType
}
export function AddressItem({ item }: AddressItemProps) {
  return (
    <label className="flex items-start mb-4">
      <input type="radio" name="address" value={item.id} defaultChecked={item.main} className="mx-3 mt-2" />

      <address>
        <strong>{item.label}</strong>
        <span>
          {item.givenName} {item.familyName}
        </span>
        <span>
          {item.streetAddress}, {item.number}
        </span>
        <span>{item.complement}</span>
        <span>{item.addressLocality}</span>
      </address>
    </label>
  )
}
