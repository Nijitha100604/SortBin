import { useContext } from "react"
import { AdminContext } from "../context/AdminContext"
import { NavLink } from "react-router-dom"


const SideNavbar = () => {

  const {aToken} = useContext(AdminContext)

  return (
    <div className="min-h-screen bg-gray-200 border-r border-gray-200">
      {
        aToken && <ul className="mt-5 font-semibold">

          <NavLink className={({isActive})=> `flex text-gray-700 items-center gap-3 py-2 px-3 md:px-9 md:min-w-50 cursor-pointer ${isActive ? ' border-r-4 text-gray-900 border-fuchsia-500' : ''}`} 
            to={'/'}>
            <p>Home</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex text-gray-700 items-center gap-3 py-2 px-3 md:px-9 md:min-w-50 cursor-pointer ${isActive ? ' border-r-4 text-gray-900 border-fuchsia-500' : ''}`} 
            to={'/admin-dashboard'}>
            <p>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex text-gray-700 items-center gap-3 py-2 px-3 md:px-9 md:min-w-50 cursor-pointer ${isActive ? ' border-r-4 text-gray-900 border-fuchsia-500' : ''}`} 
            to={'/binFull'}>
            <p>Bin Full</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex text-gray-700 items-center gap-3 py-2 px-3 md:px-9 md:min-w-50 cursor-pointer ${isActive ? ' border-r-4 text-gray-900 border-fuchsia-500' : ''}`} 
            to={'/emergency'}>
            <p>Emergency</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex text-gray-700 items-center gap-3 py-2 px-3 md:px-9 md:min-w-50 cursor-pointer ${isActive ? ' border-r-4 text-gray-900 border-fuchsia-500' : ''}`} 
            to={'/feedback'}>
            <p>Feedback</p>
          </NavLink>

        </ul>
      }
    </div>
  )
}

export default SideNavbar