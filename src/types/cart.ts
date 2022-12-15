export type CartItemType = {
  quantity: number
  product: {
    sku: string
    name: string
    imageObjects: ImageObjectsType[]
    priceSpecification: PriceSpecificationType
  }
}

type ImageObjectsType = {
  featured: boolean
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
  valid: boolean
}

type PriceSpecificationType = {
  sku: string
  price: number
  originalPrice: number
  maxPrice: number
  percent: number
  discount: number
}

export type CartType = {
  discount: number
  id: string
  items: CartItemType[]
  shippingTotal: number
  subTotal: number
  total: number
}
