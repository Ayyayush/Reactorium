import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Contact from './components/Contact'
import Home from './components/Home'
import Error from './components/Error'
import CountryDetail from './components/CountryDetail'

/*
 * =========================================================
 * Dynamic Routing Configuration
 * =========================================================
 *
 * Dynamic route banane ke liye:
 * - Path mein ":" (colon) use karte hain
 *
 * Example:
 *   path: 'country/:name'
 *
 * Yahan:
 * - "country" → fixed part
 * - ":name"   → dynamic parameter
 *
 * Agar URL ho:
 *   /country/India
 *
 * Toh:
 *   name = "India"
 *
 * Ye value CountryDetail component ke andar
 * useParams() ke through access ki ja sakti hai.
 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        /*
         * =========================================================
         * Dynamic Route Example
         * =========================================================
         *
         * Ye route match karega:
         *   /country/India
         *   /country/Croatia
         *   /country/Brazil
         *
         * ":name" dynamic value hai
         */
        path: 'country/:name',
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