import React, { useState } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { assets } from './../assets/assets';

const TopNavbar = () => {

  const {aToken, setAToken} = useContext(AdminContext)
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
            notification &&  <span className="absolute top-1 right-2 block h-3 w-3 rounded-full bg-red-500"></span>
          }
          {
            showNotifications && (
              <div>
                <p>Notifications</p>
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