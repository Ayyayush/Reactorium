import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <>
      {/* Header always visible on all pages */}
      <Header />

      {/* 
         Outlet renders child routes here
         Example:
           "/" → Home
           "/contact" → Contact
           "/country/:name" → CountryDetail
      */}
      <Outlet />
    </>
  )
}

export default App