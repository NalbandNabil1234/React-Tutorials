import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//  we can create our own jsx and import it but the name of the file extension should be . jsx in vite and also the function is that file should start with upper case
// import Hello from './chai.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Hello /> */}
  </StrictMode>,
)
