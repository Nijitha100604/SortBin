import React from 'react'
import { assets } from './../assets/assets';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';

const AdminHome = () => {

  const {aToken, getTotalBins, totalBins, getAllUsers, users} = useContext(AdminContext)

  useEffect(()=>{
    getTotalBins(),
    getAllUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aToken])

  return (
    <div className="mx-8 mt-5">

      {/* Bin details */}
      <div className="flex flex-col gap-5">
        <p className="font-semibold text-gray-700">Total Bins</p>

        <div className="flex flex-wrap gap-8 lg:mx-18">
          
          <div className="flex gap-5 items-center bg-sky-200 px-6 py-2 rounded-2xl cursor-pointer">
            <img className="h-20 w-10" src={assets.plastic_bottle} alt="plastic-bottle"/>
            <div>
              <p className="font-bold text-2xl text-center mb-1">{totalBins.plastics ?? 0}</p>
              <p className="font-medium">Plastics</p>
            </div>
          </div>

          <div className="flex gap-5 items-center bg-lime-200 p-4 rounded-2xl cursor-pointer">
            <img className="w-17" src={assets.general_waste} alt="general-waste"/>
            <div >
              <p className="font-bold text-2xl text-center mb-1">{totalBins.generals ?? 0}</p>
              <p className="font-medium">General</p>
            </div>
          </div>

          <div className="flex gap-2 items-center bg-gray-300 px-4 rounded-2xl cursor-pointer">
            <img className="w-19 h-25" src={assets.needle} alt="needle-icon" />
            <div>
              <p className="font-bold text-2xl text-center mb-1">{totalBins.metals ?? 0}</p>
              <p className="font-medium">Metals</p>
            </div>
          </div>

          <div className="flex gap-2 items-center bg-red-300 rounded-2xl px-4 cursor-pointer" >
            <img className=" h-20 w-16" src={assets.blood} alt="blood-icon" />
            <div>
              <p className="font-bold text-2xl text-center mb-1">{totalBins.infectious ?? 0}</p>
              <p className="font-medium">Infectious</p>
            </div>
          </div>

        </div>
      </div>

      {/* User Details */}

      <div className="w-full max-w-3xl mt-5">
        <p className="font-semibold mb-3 text-gray-700">Users</p>
        <div className="bg-gray-200 border-gray-300 lg:mx-18 rounded-2xl text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll p-3">
          <div className="max-sm:hidden text-center grid grid-cols-[1fr_3fr_2fr] gap-1 py-3 px-6 font-medium">
            <p>Name</p>
            <p>Email</p>
            <p>Phone No</p>
          </div>

          {
            users.map((item, index)=>(
              <div key={index} className=" bg-white rounded-xl mx-2 flex flex-wrap text-center justify-between mb-2 max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[1fr_3fr_2fr] gap-1 items-center text-gray-900 py-3 px-6 border">
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
              </div>
            ))
          }

          

        </div>
      </div>

    </div>
  )
}

export default AdminHome