export type Config = {
  organizationId: number
  organization: string
  name: string
}

export async function getConfig() {
  return {
    organizationId: 1,
    organization: 'blzstore',
    name: 'Beleza Na Web',
  }
}
