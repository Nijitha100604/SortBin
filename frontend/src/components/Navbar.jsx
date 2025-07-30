import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from './../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const {token, setToken} = useContext(AppContext)
  const navigate = useNavigate()

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

      <div className="px-5">
        {
          token
          ? <button onClick={logout} className="bg-fuchsia-500 text-white px-8 py-2 rounded-full font-medium cursor-pointer">Logout</button>
          : <button onClick={()=>navigate('/login')} className="bg-fuchsia-500 text-white px-8 py-2 rounded-full font-medium cursor-pointer">Create Account</button>
        }
        
      </div>
    </div>
  )
}

export default Navbar