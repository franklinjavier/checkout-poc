import { makeDomainFunction } from 'domain-functions'
import { z } from 'zod'

export const schema = z.object({
  card: z.string().min(18, 'Informe um número de cartão de crédito'),
  name: z.string().min(1, 'Informe um títular'),
  expire: z.string().min(1),
})

export const makePayment = makeDomainFunction(schema)(async (input) => {
  await new Promise((res) => setTimeout(res, 3000))

  // api.post()
  console.log(input)

  return true
})
