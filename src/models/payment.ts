import { z } from 'zod'
import { PaymentType } from '../types/payment'

export async function makePayment(payload: PaymentType) {
  await new Promise((res) => setTimeout(res, 3000))

  // api.post()
  console.log(payload)

  return true
}

export const schema = z.object({
  card: z.string().min(18, 'Informe um número de cartão de crédito'),
  name: z.string().min(1, 'Informe um títular'),
  expire: z.string().min(1),
})
