export type AddressType = {
  items: AddressItemType[]
}

export type AddressItemType = {
  id: number
  customerId: number
  label: string
  givenName: string
  familyName: string
  streetAddress: string
  number: string
  district: string
  complement: string
  postalCode: string
  addressLocality: string
  addressRegion: string
  referencePoint: string
  localityCode: number
  addressType: string
  main: false
  billing: false
  updatedAt: string
  dependencyConnections: []
}
