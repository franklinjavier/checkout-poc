import { createBrowserRouter, Outlet, redirect, RouterProvider } from 'react-router-dom'

import * as root from './routes/root'
import * as address from './routes/address'
import * as payment from './routes/payment'
import * as success from './routes/success'
import Cart, { loader as cartLoader, action as cartAction } from './routes/cart'

const HOME_PATH = '/sacola'

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect(HOME_PATH),
  },
  {
    path: HOME_PATH,
    element: <root.default />,
    loader: root.loader,
    id: 'root', // usado para recuperar com o hook useRouteLoaderData 🔥
    children: [
      {
        path: '/sacola',
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <Cart />,
            loader: cartLoader,
            action: cartAction,
          },
          {
            path: 'endereco',
            element: <address.default />,
            loader: address.loader,
            action: address.action,
            id: 'address',
          },
          {
            path: 'pagamento',
            element: <payment.default />,
            loader: payment.loader,
            action: payment.action,
            id: 'payment',
          },
          {
            path: 'sucesso',
            element: <success.default />,
            loader: success.loader,
            id: 'success',
          },
        ],
      },
    ],
  },
])

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

export default function App() {
  return <RouterProvider router={router} />
}
