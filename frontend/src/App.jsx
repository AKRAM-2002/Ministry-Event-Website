import LandingPage from "./pages/LandingPage"
import './App.css'
import { Route, Routes } from "react-router-dom"
import LoginPage from "./components/auth/Login"
import RegisterPage from "./components/auth/Register"
import UserDashboard from "./pages/UserDashboard"
import ForgotPassword from "./components/auth/ForgotPassword"
import NotFound from "./pages/MultiStepForm/pages/NotFound"
import ThankYou from "./pages/MultiStepForm/pages/ThankYou"
import ViewProfile from "./pages/MultiStepForm/pages/ViewProfile"


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/forgotPasword" element={<ForgotPassword/>}/>
      <Route path= '/dashboard/*' element={<UserDashboard/>}/>
      <Route path="*" element={<NotFound/>} />
      <Route path="/thankyou" element={<ThankYou/>}/> 
      <Route path="/viewProfile" element={<ViewProfile/>} />
    </Routes>
  )
}

export default App
