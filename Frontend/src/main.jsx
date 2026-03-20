import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/authprovider.jsx';
import { CartProvider } from './context/cartprovider.jsx'
import { SearchProvider } from './context/searchprovider.jsx'
import AdminAuthProvider from './context/adminAuthProvider.jsx'
import { AdminSearchProvider } from './context/adminSearchProvider.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <SearchProvider>
            <AdminAuthProvider>
              <AdminSearchProvider>
                <App/>
              </AdminSearchProvider>
            </AdminAuthProvider>
          </SearchProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>

)
