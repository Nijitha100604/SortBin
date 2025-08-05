import React from 'react'
import { assets } from './../assets/assets';
import { FaExclamationTriangle } from 'react-icons/fa'
import BinGraph from '../components/BinGraph';
import BinFull from '../components/BinFull';

const Dashboard = () => {
  return (
    <div className="mx-20 mb-10">

      {/* Header section */}

      <div className="flex gap-2 items-center mb-4">
        <img className="w-10" src={assets.dashboard_icon} alt="dashboard-icon"/>
        <p className="text-lg font-semibold">Dashboard</p>
      </div>

      {/* Bins section */}

      <div className="flex flex-wrap gap-16 lg:mx-18">

        <div className="flex gap-5 items-center bg-sky-200 px-6 rounded-2xl">
          <img className="h-20 w-10" src={assets.plastic_bottle} alt="plastic-icon" />
          <div>
            <p className="font-bold text-2xl text-center mb-1">8</p>
            <p className="font-medium">Plastics</p>
          </div>
        </div>

        <div className="flex gap-5 items-center bg-lime-200 p-4 rounded-2xl">
          <img className="w-17" src={assets.general_waste} alt="general-icon" />
          <div>
            <p className="font-bold text-2xl text-center mb-1">10</p>
            <p className="font-medium">General</p>
          </div>
        </div>

        <div className="flex gap-2 items-center bg-gray-300 px-4 rounded-2xl">
          <img className="w-19 h-25" src={assets.needle} alt="needle-icon" />
          <div>
            <p className="font-bold text-2xl text-center mb-1">2</p>
            <p className="font-medium">Metals</p>
          </div>
        </div>

        <div className="flex gap-2 items-center bg-red-300 rounded-2xl px-4">
          <img className=" h-20 w-16" src={assets.blood} alt="blood-icon" />
          <div>
            <p className="font-bold text-2xl text-center mb-1">7</p>
            <p className="font-medium">Infectious</p>
          </div>
        </div>

      </div>

      {/* details section */}

      <div className="mt-12 flex flex-col md:flex-row gap-6 lg:mx-18">

        {/* Left section */}
        <div className="w-full md:w-1/2">

          {/* Warning section */}

          <div className="border bg-orange-200 px-6 py-4 rounded-2xl">

            <div className="flex gap-3 items-center mb-4">
              <FaExclamationTriangle size={30} color="orange" />
              <p className="text-lg font-semibold">Warning details</p>
            </div>

            <div>
              <p>No hazardous gas found</p>
            </div>

          </div>

          {/* Bar graph section */}
          <div className="mt-4">
            <BinFull />
          </div>
          

        </div>

        {/* Right section */}
        

        <div className="w-full md:w-1/2 bg-gray-200 p-4 rounded-md shadow-sm" >
            <BinGraph />
        </div>

      </div>



    </div>
  )
}

export default Dashboard