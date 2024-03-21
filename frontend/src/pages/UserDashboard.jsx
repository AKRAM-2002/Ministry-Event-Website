import { useAuth } from "@clerk/clerk-react"
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const UserDashboard = () => {

  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate()
  console.log('test', userId)


  React.useEffect(()=>{
    if(!userId){
      navigate('/login')
    }
  }, [])

  if (!isLoaded) return "Loading..."



  return (
    <div><Outlet/></div>
  )
}
export default UserDashboard