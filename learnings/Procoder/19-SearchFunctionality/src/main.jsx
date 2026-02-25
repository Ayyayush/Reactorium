import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'     // ⚠️ YOU NEED THIS LINE

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)