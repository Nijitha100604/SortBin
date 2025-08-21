import React from 'react'
import { assets } from '../assets/assets'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'

const AdminDashboard = () => {

  const {aToken, getAllUsers, users} = useContext(AdminContext)

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  useEffect(()=>{
    getAllUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aToken])

  return (
    <div className="mt-5 mx-10">
      <div className="flex items-center gap-2 mb-5">
        <img className="w-12" src={assets.dashboard_icon} alt="dashboard-icon"/>
        <p className="font-medium text-lg">Dashboard</p>
      </div>

      <div className="flex flex-wrap gap-12">
      {
        users.map((item, index)=>{

          const dataSources = [item.plasticsData, item.generalsData, item.metalsData, item.infectedsData].filter(Boolean);
          const latestUpdatedAt = dataSources.length > 0
            ? formatDate(new Date(Math.max(...dataSources.map(source => new Date(source.updatedAt)))))
            : "No Data";
          const latestCleanedAt = dataSources.length > 0
            ? formatDate(new Date(Math.max(...dataSources.map(source => new Date(source.lastCleanedAt)))))
            : "No Data";

          const hasHazardousGas = dataSources.some(source => source.hazardousGas === true);
          const isAnyBinFull = dataSources.some(source => source.fillLevel >= 90);

          return (
          <div key={index} className="bg-gray-200 border max-w-5xl p-4 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <img className="w-12 rounded-full border bg-white" src={assets.profile} alt="profile_icon"/>
              <p className="font-medium text-gray-800">{item.name}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-300 border p-2 w-45 rounded-xl">
                <p className="text-center font-medium">Plastics: {item.plasticsData.count}</p>
              </div>
              <div className="bg-gray-300 border p-2 w-45 rounded-xl">
                <p className="text-center font-medium">General: {item.generalsData.count}</p>
              </div>
              <div className="bg-gray-300 border p-2 w-45 rounded-xl">
                <p className="text-center font-medium">Metal: {item.metalsData.count}</p>
              </div>
              <div className="bg-gray-300 border p-2 w-45 rounded-xl">
                <p className="text-center font-medium">Infectious: {item.infectedsData.count}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <div className="bg-white border p-2 rounded-xl">
                <p className="font-medium text-center">Updated at: {latestUpdatedAt}</p>
              </div>
              <div className="bg-white border p-2 rounded-xl">
                <p className="font-medium text-center">Cleaned at: {latestCleanedAt}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="bg-orange-200 border border-orange-300 rounded-xl p-3 w-45">
                <p className="font-medium">Hazardous Gas</p>
                {hasHazardousGas
                ? <p className="text-red-700 font-medium text-center">Data Found</p> 
                : <p className="text-gray-500 text-center">No data Found</p>
                }
              </div>
              <div className="bg-green-200 border border-green-300 rounded-xl p-3 w-45">
                <p className="font-medium">Bin Full Status</p>
                {
                  isAnyBinFull
                  ? <p className="text-red-700 font-medium text-center">Level Reached</p>
                  : <p className="text-gray-500 text-center">No Data Found</p>
                }               
              </div>
            </div>
          </div>
        )})
      }
      </div>
      
    </div>
  )
}

export default AdminDashboard