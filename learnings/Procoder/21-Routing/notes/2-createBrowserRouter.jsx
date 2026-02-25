/**
 * =========================================================
 * createBrowserRouter – Explained Clearly
 * =========================================================
 *
 * 🔹 What is createBrowserRouter?
 * ---------------------------------------------------------
 * createBrowserRouter is a FUNCTION provided by
 * "react-router-dom".
 *
 * Its job is:
 * - To map URLs (paths) to React components
 * - To define which component should render for which URL
 *
 * In simple words:
 * createBrowserRouter = URL → Component mapper
 *
 * =========================================================
 * Why is it called "Browser" Router?
 * ---------------------------------------------------------
 *
 * It is called Browser Router because:
 * - It uses the browser's History API
 *   (window.history.pushState, popState)
 * - It changes the URL WITHOUT reloading the page
 *
 * That is why it works perfectly for SPA
 * (Single Page Applications).
 *
 * =========================================================
 * Basic Syntax of createBrowserRouter
 * =========================================================
 *
 * createBrowserRouter takes:
 * - An ARRAY
 * - Each item in the array is a ROUTE OBJECT
 *
 * Syntax:
 *
 * const router = createBrowserRouter([
 *   {
 *     path: "/",
 *     element: <App />
 *   }
 * ])
 *
 * =========================================================
 * Route Object Properties
 * =========================================================
 *
 * Each route object can have:
 *
 * - path          → URL path
 * - element       → Component to render
 * - errorElement  → Component to show on error
 * - children      → Nested routes
 *
 * =========================================================
 * Corrected Demo Code
 * =========================================================
 */

import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import Error from './components/Error'
import CountryDetail from './components/CountryDetail'

const router = createBrowserRouter([
  {
    path: '/',                 // URL: "/"
    element: <App />,          // Layout component
    errorElement: <Error />,   // Shown on wrong route / error

    /*
     * children means:
     * These routes will render INSIDE <Outlet /> of App.jsx
     */
    children: [
      {
        index: true,           // default route for "/"
        element: <Home />,
      },
      {
        path: 'country/:name', // dynamic route
        element: <CountryDetail />,
      },
    ],
  },
])

export default router

/**
 * =========================================================
 * FULL FLOW OF createBrowserRouter (MENTAL MODEL)
 * =========================================================
 *
 * createBrowserRouter()
 *        ↓
 * returns router configuration object
 *        ↓
 * <RouterProvider router={router} />
 *        ↓
 * Router starts watching the URL
 *        ↓
 * URL changes (Link / back / forward)
 *        ↓
 * Router finds matching route
 *        ↓
 * Corresponding component is rendered
 *
 * =========================================================
 * IMPORTANT THINGS TO REMEMBER
 * =========================================================
 *
 * ❌ element: </App>        (WRONG)
 * ✅ element: <App />      (CORRECT)
 *
 * ❌ path and element missing commas
 * ❌ spelling mistakes like:
 *    - errorElet
 *    - chilre
 *
 * =========================================================
 * ONE-LINE SUMMARY (INTERVIEW READY)
 * =========================================================
 *
 * createBrowserRouter is used to define route configuration
 * that maps browser URLs to React components using the
 * browser history API without reloading the page.
 */