import { makeDomainFunction } from 'domain-functions'

export const getConfig = makeDomainFunction()(async () => ({
  config: {
    organizationId: 1,
    organization: 'blzstore',
    name: 'Beleza Na Web',
  },
}))
