import { PaymentType } from '../types/payment'

export async function makePayment(payload: PaymentType) {
  await new Promise((res) => setTimeout(res, 3000))

  // api.post()
  console.log(payload)

  return true
}
