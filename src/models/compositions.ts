import { merge } from 'domain-functions'
import { getAddress } from './address'
import { getCart } from './cart'

export const getAddressRouteData = merge(getCart, getAddress)
