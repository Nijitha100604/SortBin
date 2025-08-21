import React, { useState } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { assets } from './../assets/assets';

const TopNavbar = () => {

  const {aToken, setAToken, fullBins, hazardousBins} = useContext(AdminContext)
  const navigate = useNavigate()
  const [showNotifications, setShowNotifications] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [notification, setNotification] = useState(false)

  const logout = () =>{
    const confirmLogout = window.confirm("Are you sure want to logout ?")
    if(confirmLogout)
    {
      localStorage.removeItem('aToken')
      setAToken('')
      navigate('/admin-login')
    }
  }

  return (
    <div className="flex items-center justify-between bg-gray-200 py-1 border-b border-b-gray-400">
      <img onClick={()=>navigate('/')} className="px-5 w-44 cursor-pointer" src={assets.logo} alt="logo"/>
      <div className="flex">
        <div className="relative inline-block">
          <img className="w-10 cursor-pointer" src={assets.notification_icon} alt="notification-icon" onClick={() => setShowNotifications((prev)=>!prev)}/>
          {
            (fullBins.length > 0 || hazardousBins.length > 0)
            &&  <span className="absolute top-1 right-2 block h-3 w-3 rounded-full bg-red-500"></span>
          }
          {
            showNotifications && (
              <div className="fixed top-[60px] right-5 w-80 bg-gray-300 border border-gray-500 shadow-lg rounded-lg p-3 z-50">
                {
                  fullBins.length > 0 && 
                  <p className="text-yellow-600 font-medium p-2">Some bins level reached</p>
                }
                {
                  hazardousBins.length > 0 &&
                  <p className="text-red-600 font-medium p-2">Hazardous gas detected !</p>
                }
                {fullBins.length == 0 && hazardousBins.length == 0 && <p className="text-gray-900">No new notifications</p>}
              </div>
            )
          }
        </div>
        <div className="px-5">
          {
            aToken
            ? <button onClick={logout} className="bg-fuchsia-500 text-white px-8 py-2 rounded-full font-medium cursor-pointer">Logout</button>
            : <button onClick={()=>navigate('/admin-login')} className="bg-fuchsia-500 text-white px-8 py-2 rounded-full font-medium cursor-pointer">Login</button>
          }
        </div>
      </div>
    </div>
  )
}

export default TopNavbar