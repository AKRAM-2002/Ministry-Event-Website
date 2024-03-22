import { useAuth } from "@clerk/clerk-react"
import React from "react";
import {  Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./MultiStepForm/Sidebar";
import ThankYou from "./MultiStepForm/pages/ThankYou"

import './UserDashboard.css';

import Step1 from "./MultiStepForm/pages/Step1";
import Step2 from "./MultiStepForm/pages/Step2";
import Step3 from "./MultiStepForm/pages/Step3";
import Summary from "./MultiStepForm/pages/Summary";

const UserDashboard = () => {

  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate()
  console.log('test', userId)


  React.useEffect(()=>{
    if(!userId){
      // navigate('/login')
    }
  }, [])

  if (!isLoaded) return "Loading..."



  return (
   <div className="bg-indigo-100 h-screen flex justify-center items-center text-right font-sans">
    <div className="bg-white sm:w-[60rem] h-[35rem] mt-[100px] sm:mt-0 rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between">
      <Sidebar/>
      <Routes>
          <Route path="/step1" element={<Step1/>}/> 
          <Route path="/step2" element={<Step2/>}/>
          <Route path="/step3" element={<Step3/>}/>
          <Route path="/summary" element={<Summary/>}/>
          <Route path="/thankyou" element={<ThankYou/>}/>
      </Routes>
    </div>
    </div>
  )
}
export default UserDashboard