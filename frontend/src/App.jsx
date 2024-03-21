import LandingPage from "./pages/LandingPage"
import './App.css'
import { Route, Routes } from "react-router-dom"
import LoginPage from "./components/auth/Login"
import RegisterPage from "./components/auth/Register"
import UserDashboard from "./pages/UserDashboard"
import ForgotPassword from "./components/auth/ForgotPassword"


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/forgotPasword" element={<ForgotPassword/>}/>
      <Route path="UserForm" element={<LandingPage/>}/>
      <Route path= '/dashboard' element={<UserDashboard/>}/>
    </Routes>
  )
}

export default App
