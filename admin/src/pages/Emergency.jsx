import React from 'react'
import { assets } from '../assets/assets'

const Emergency = () => {
  return (
    <div className="mt-4 mx-10">
      <div className="flex items-center gap-2">
        <img className="w-10 h-9" src={assets.emergency_icon} alt="emergency-icon"/>
        <p className="font-medium text-lg">Emergency</p>
      </div>

      <div className="mt-5 bg-gray-200 p-4 rounded-xl w-170">
        <div className="flex gap-3 items-center">
          <img className="w-10 rounded-full border border-orange-300" src={assets.emergency_warning} alt="emergency-warning-icon"/>
          <p className="font-medium text-lg">Need Attention</p>
        </div>

        <div className="mt-5">
          <div className="grid grid-cols-[2fr_2fr_2fr_1fr] items-center gap-x-4 border-b-1 py-1 mb-4 text-gray-900">
            <p>Bin Name</p>
            <p>User name</p>
            <p>Updated At</p>
            <p>Clear</p>
          </div>

          <div className="grid grid-cols-[2fr_2fr_2fr_1fr] items-center gap-x-4 bg-white rounded-xl border p-2">
            <p>Plastics</p>
            <p>Test</p>
            <p>18 July 2025</p>
            <button className="bg-orange-400 text-white rounded-xl px-2 py-1 hover:scale-110 active:scale-95 transition-transform duration-200 ease-in-out hover:cursor-pointer">Clear</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Emergency