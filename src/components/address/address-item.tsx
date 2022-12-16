import { UnpackData } from 'domain-functions'
import { getAddress } from '../../models/address'

type AddressItemProps = {
  item: UnpackData<typeof getAddress>['address'][number]
}
export function AddressItem({ item }: AddressItemProps) {
  return (
    <label style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 16 }}>
      <input
        type="radio"
        name="address"
        value={item.id}
        defaultChecked={item.main}
        style={{ margin: '8px 10px' }}
      />

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
