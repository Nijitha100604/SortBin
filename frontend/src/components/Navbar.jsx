import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from './../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const {token, setToken, hazardous, binFull} = useContext(AppContext)
  const navigate = useNavigate()
  const [showNotifications, setShowNotifications] = useState(false)

  const logout = () =>{

    const confirmLogout = window.confirm("Are you sure want to Logout ?")
    if(confirmLogout)
    {
      localStorage.removeItem('token')
      setToken('')
      navigate('/login')
    }
    
  }

  return (
    <div className="flex items-center justify-between bg-gray-200 py-1 mb-5 border-b border-b-gray-400">
      <img onClick={()=>navigate('/')} className="px-5 w-44 cursor-pointer" src={assets.logo} alt="logo"/>
      <ul className="flex items-start gap-8 font-semibold">
        <NavLink to='/'>
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 w-5/5 bg-fuchsia-500 m-auto hidden"/>
        </NavLink>

        <NavLink to='/dashboard'>
          <li className="py-1">Dashboard</li>
          <hr className="border-none outline-none h-0.5 w-5/5 bg-fuchsia-500 m-auto hidden"/>
        </NavLink>

        <NavLink to='/about'>
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 w-5/5 bg-fuchsia-500 m-auto hidden"/>
        </NavLink>

        <NavLink to='/contact'>
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 w-5/5 bg-fuchsia-500 m-auto hidden"/>
        </NavLink>
      </ul>

      <div className="flex">
        <div className="relative inline-block">
          <img className="w-10 cursor-pointer" src={assets.notification_icon} alt="notification-icon" onClick={() => setShowNotifications((prev) => !prev)}/>
          {
            (hazardous.length > 0 || binFull.length > 0)
            && <span className="absolute top-1 right-2 block h-3 w-3 rounded-full bg-red-500"></span>           
          }
          {
            showNotifications && (
              <div className="fixed top-[60px] right-5 w-80 bg-gray-300 border border-gray-500 shadow-lg rounded-lg p-3 z-50">
                {hazardous.length > 0 && 
                  hazardous.map((item, index)=>(
                      <div key={index}>
                        <p className="text-red-600 font-medium p-2">Hazardous gas detected in {item.binName} bin!</p>
                      </div>
                    ))}
                {binFull.length > 0 && 
                    binFull.map((item, index)=>(
                      <div key={index}>
                        <p className="text-yellow-600 font-medium p-2">{item.binName} bin almost full !</p>
                      </div>
                    ))
                }
                {hazardous.length == 0 && binFull.length == 0 && <p className="text-gray-900">No new notifications</p>}
              </div>
            )
          }
        </div>

        <div className="px-5">
        {
          token
          ? <button onClick={logout} className="bg-fuchsia-500 text-white px-8 py-2 rounded-full font-medium cursor-pointer">Logout</button>
          : <button onClick={()=>navigate('/login')} className="bg-fuchsia-500 text-white px-8 py-2 rounded-full font-medium cursor-pointer">Create Account</button>
        }
        
        </div>

      </div>

      
    </div>
  )
}

export default Navbar