import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Assignment from './Assignment.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <App />
    <Assignment />
    </>
  </StrictMode>,
)
