import { makeDomainFunction, pipe } from 'domain-functions'
import * as z from 'zod'

const imageObjectSchema = z.object({
  featured: z.boolean(),
  thumbnail: z.string(),
  small: z.string(),
  medium: z.string(),
  large: z.string(),
  extraLarge: z.string(),
  valid: z.boolean(),
})

const priceSpecificationSchema = z.object({
  sku: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  maxPrice: z.number(),
  percent: z.number(),
  discount: z.number(),
})

const cartItemSchema = z.object({
  quantity: z.number(),
  product: z.object({
    sku: z.string(),
    name: z.string(),
    imageObjects: z.array(imageObjectSchema),
    priceSpecification: priceSpecificationSchema,
  }),
})

const cartSchema = z.object({
  discount: z.number(),
  id: z.string(),
  items: z.array(cartItemSchema),
  shippingTotal: z.number(),
  subTotal: z.number(),
  total: z.number(),
})

const fetchCart = makeDomainFunction()(() =>
  fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07').then((r) => r.json()),
)
const normalizeCart = makeDomainFunction(cartSchema)(async (cart) => ({ cart }))

export const getCart = pipe(fetchCart, normalizeCart)
