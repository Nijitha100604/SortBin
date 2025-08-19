import React from 'react'
import { assets } from '../assets/assets'

const AdminDashboard = () => {
  return (
    <div className="mt-5 mx-10">
      <div className="flex items-center gap-2 mb-5">
        <img className="w-12" src={assets.dashboard_icon} alt="dashboard-icon"/>
        <p className="font-medium text-lg">Dashboard</p>
      </div>

      <div className="bg-gray-200 max-w-5xl p-4 rounded-2xl">
        <div className="flex items-center gap-4 mb-6">
          <img className="w-12 rounded-full border bg-white" src={assets.profile} alt="profile_icon"/>
          <p className="font-medium text-gray-800">Kavina Sri Devi</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-300 border p-2 w-45 rounded-xl">
            <p className="text-center font-medium">Plastics: 2</p>
          </div>
          <div className="bg-gray-300 border p-2 w-45 rounded-xl">
            <p className="text-center font-medium">General: 2</p>
          </div>
          <div className="bg-gray-300 border p-2 w-45 rounded-xl">
            <p className="text-center font-medium">Metal: 2</p>
          </div>
          <div className="bg-gray-300 border p-2 w-45 rounded-xl">
            <p className="text-center font-medium">Infectious: 2</p>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-2">
          <div className="bg-white border p-2 rounded-xl">
            <p className="font-medium text-center">Updated at: 18 July 2025</p>
          </div>
          <div className="bg-white border p-2 rounded-xl">
            <p className="font-medium text-center">Cleaned at: 18 July 2025</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="bg-orange-200 border border-orange-300 rounded-xl p-3 w-45">
            <p className="font-medium">Hazardous Gas</p>
            <p className="text-gray-500 text-center">No Data Found</p>
          </div>
          <div className="bg-green-200 border border-green-300 rounded-xl p-3 w-45">
            <p className="font-medium">Bin Full Status</p>
            <p className="text-gray-500 text-center">No Data Found</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard