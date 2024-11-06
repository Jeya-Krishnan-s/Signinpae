import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SigninPage from './SigninPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <SigninPage/>
  </StrictMode>,
)
