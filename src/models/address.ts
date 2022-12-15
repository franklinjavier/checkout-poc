export async function getAddress() {
  await Promise.resolve(setTimeout(() => {}, 1000))
  return mockAddress
}

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

const mockAddress = {
  items: [
    {
      id: 6028372,
      customerId: 1099605,
      label: 'av paulista',
      givenName: 'Franklin',
      familyName: 'Javier',
      streetAddress: 'Avenida Paulista',
      number: '620',
      district: 'Bela Vista',
      complement: '1120',
      postalCode: '01310100',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      referencePoint: '',
      localityCode: 3550308,
      addressType: 'APARTMENT',
      main: false,
      billing: false,
      updatedAt: '2020-02-03T22:34:29.308+00:00',
      geolocation: { latitude: '-23.5671838', longitude: '-46.6491349' },
      dependencyConnections: [],
    },
    {
      id: 2602305,
      customerId: 1099605,
      label: 'Reserva Mais Jaguaré',
      givenName: 'Franklin',
      familyName: 'Javier',
      streetAddress: 'Avenida Presidente Altino',
      number: '1619',
      district: 'Jaguaré',
      complement: 'Ap 18 Torre 3',
      postalCode: '05323002',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      referencePoint: '',
      localityCode: 3550308,
      addressType: 'APARTMENT',
      main: true,
      billing: true,
      updatedAt: '2022-01-19T15:11:59.218+00:00',
      geolocation: { latitude: '-23.5417276', longitude: '-46.7532157' },
      dependencyConnections: [],
    },
    {
      id: 2806035,
      customerId: 1099605,
      label: 'Beleza Na Web',
      givenName: 'Franklin',
      familyName: 'Javier',
      streetAddress: 'Avenida Jaguaré',
      number: '818',
      district: 'Jaguaré',
      complement: 'Bloco 23',
      postalCode: '05346000',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      referencePoint: '',
      localityCode: 3550308,
      addressType: 'BUSINESS',
      main: false,
      billing: false,
      updatedAt: '2020-03-27T23:07:53.977+00:00',
      dependencyConnections: [],
    },
    {
      id: 1963441,
      customerId: 1099605,
      label: 'Acre',
      givenName: 'Franklin',
      familyName: 'Javier González de Alves',
      streetAddress: 'Av do Acre',
      number: '666',
      district: 'Acre',
      complement: '2222',
      postalCode: '69932000',
      addressLocality: 'Brasiléia',
      addressRegion: 'AC',
      localityCode: 1200104,
      main: false,
      billing: false,
      updatedAt: '2018-12-22T20:26:08.717+00:00',
      dependencyConnections: [],
    },
  ],
}
