import React from 'react'
import { assets } from '../assets/assets'

const BinFull = () => {
  return (
    <div className="mt-4 mx-10">
      <div className="flex items-center gap-1">
        <img className="h-9 w-12" src={assets.bin_full} alt="bin_full_icon"/>
        <p className="font-medium text-lg">Bin Full Status</p>
      </div>

      <div className="mt-5 bg-gray-200 p-4 rounded-xl w-170">

        <div className="flex gap-3 items-center">
          <img className="w-10 rounded-full border border-green-700" src={assets.bin_full_warning} alt="bin-full-warning"/>
          <p className="font-medium text-lg">Bin Fill Level Reached</p>
        </div>

        <div className="mt-5">
          <div className="grid grid-cols-[2fr_2fr_2fr_2fr_1fr] items-center gap-x-4 border-b-1 py-1 mb-4 text-gray-900">
            <p>Bin Name</p>
            <p>User name</p>
            <p>Fill Level</p>
            <p>Updated At</p>
            <p>Clean</p>
          </div>

          <div className="grid grid-cols-[2fr_2fr_2fr_2fr_1fr] items-center gap-x-4 bg-white rounded-xl border p-2">
            <p>Plastics</p>
            <p>Test</p>
            <p>90%</p>
            <p>18 July 2025</p>
            <button className="bg-green-700 text-white rounded-xl px-2 py-1 hover:scale-110 active:scale-95 transition-transform duration-200 ease-in-out hover:cursor-pointer">Clean</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default BinFull