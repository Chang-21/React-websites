import { createRoot } from 'react-dom/client'
import './index.css'
import UserProfile from './UserProfile.jsx'
import Products from './products.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <UserProfile />
    <Products />
  </>
)
