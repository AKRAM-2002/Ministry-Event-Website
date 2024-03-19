import LandingPage from "./pages/LandingPage"
import './App.css'
import { Route, Routes } from "react-router-dom"
import LoginPage from "./components/auth/Login"
import RegisterPage from "./components/auth/Register"


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
    </Routes>
  )
}

export default App
