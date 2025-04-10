import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CookiesProvider>
      <App />
    </CookiesProvider>
    <ToastContainer
      autoClose={3000}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
    />
  </BrowserRouter>
)
