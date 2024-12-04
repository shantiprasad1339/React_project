import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SetRoute from './components/Routes/SetRoute.jsx' 
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <SetRoute />
  </StrictMode>,
)
