import type { AddressItemType } from '../../types/address'

type AddressItemProps = {
  item: AddressItemType
}
export function AddressItem({ item }: AddressItemProps) {
  return (
    <label style={{ display: 'flex', alignItems: 'flex-start' }}>
      <input
        type="radio"
        name="address"
        id="address"
        value={item.id}
        defaultChecked={item.main}
        style={{ margin: '8px 10px' }}
      />
      <address>
        <span>{item.label}</span>
        <span>
          {item.givenName} {item.familyName}
        </span>
      </address>
    </label>
  )
}
