import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Contact from './components/Contact'
import Home from './components/Home'
import Error from './components/Error'
import CountryDetail from './components/CountryDetail'

/*
|--------------------------------------------------------------------------
| Router Configuration
|--------------------------------------------------------------------------
|
| - Root path "/" renders App
| - App must contain <Outlet /> to render children
| - Children routes render inside App
|
*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,          // default route for "/"
        element: <Home />,
      },
      {
        path: 'contact',      // "/contact"
        element: <Contact />,
      },
      {
        path: 'country/:name',   // dynamic route
        element: <CountryDetail />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)