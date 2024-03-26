import { UserButton, useAuth } from "@clerk/clerk-react"
import React from "react";
import {  Link, Route, Routes, useNavigate} from "react-router-dom";
import Sidebar from "./MultiStepForm/Sidebar";
import ThankYou from "./MultiStepForm/pages/ThankYou"

import './UserDashboard.css';

import Step1 from "./MultiStepForm/pages/Step1";
import Step2 from "./MultiStepForm/pages/Step2";
import Step3 from "./MultiStepForm/pages/Step3";
import Summary from "./MultiStepForm/pages/Summary";


import { GiAstronautHelmet } from 'react-icons/gi'

const UserDashboard = () => {

  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate()
  


  React.useEffect(()=>{
    if(!userId){
      // navigate('/login')
    }
  }, [])

  if (!isLoaded) return "Loading..."



  return (
    <>

    <div style={{ backgroundColor: '#2b4a70' }}  className="w-full bg-purple-600 py-4">
          <div className="mx-auto flex  w-10/12 items-center justify-between">
            <Link href={'/'}>
              <a>
                <h4 className="flex items-center text-2xl font-bold text-white">
                  <GiAstronautHelmet className="mr-4" />
                  
                  Welcome
                </h4>
          </a>
        </Link>
        <div>
          <UserButton userProfileUrl="/viewProfile" />
        </div>
      </div>
    </div>
    
     {/* <Link to='/viewProfile'>
          <a>
            <button style={{ backgroundColor: '#2b4a70' }}  className="mt-2 bg-600 px-4 py-2 font-bold text-white transition-all hover:bg-purple-800">
              View Profile
            </button>
          </a>
        </Link> */}

   <div className="bg-indigo-100 h-screen flex justify-center items-center text-right font-sans">
    <div className="bg-white sm:w-[60rem] h-[35rem] mt-[80px] sm:mt-0 rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between">
      
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
    </>
  )
}
export default UserDashboard