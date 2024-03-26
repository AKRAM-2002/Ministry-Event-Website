
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import LandingPage from './pages/LandingPage.jsx'



const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const ClerkWithRoutes = () =>{
  const navigate = useNavigate();
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
    >
      
    <App/>
    

    </ClerkProvider>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkWithRoutes/>
  </BrowserRouter>,
)
