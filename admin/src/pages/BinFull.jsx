import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AdminContext } from './../context/AdminContext';
import { useEffect } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'

const BinFull = () => {

  const {aToken, users, getAllUsers, backendUrl, fullBins} = useContext(AdminContext)

  useEffect(()=>{
    getAllUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[aToken])

  const cleanBin = async(type, email) =>{
    try{
      if(type === "Plastics")
      {
        const {data} = await axios.post(backendUrl + '/api/admin/clean-plastics', {email}, {headers: {aToken}})
        if(data.success)
        {
          toast.success(data.message)
          await getAllUsers()
        }
        else
        {
          toast.error(data.message)
        }
      }
      else if(type === "Metals")
      {
        const {data} = await axios.post(backendUrl + '/api/admin/clean-metals', {email}, {headers: {aToken}})
        if(data.success)
        {
          toast.success(data.message)
          await getAllUsers()
        }
        else
        {
          toast.error(data.message)
        }
      }
      else if(type === "Infectious")
      {
        const {data} = await axios.post(backendUrl + '/api/admin/clean-infecteds', {email}, {headers: {aToken}})
        if(data.success)
        {
          toast.success(data.message)
          await getAllUsers()
        }
        else
        {
          toast.error(data.message)
        }
      }
      else
      {
        const {data} = await axios.post(backendUrl + '/api/admin/clean-generals', {email}, {headers: {aToken}})
        if(data.success)
        {
          toast.success(data.message)
          await getAllUsers()
        }
        else
        {
          toast.error(data.message)
        }
      }
    }
    catch(error){
      console.log(error)
      toast.error(error.message)
    } 
  }

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
            <p>Action</p>
          </div>

          {
            fullBins.length > 0 ?
            fullBins.map((item,index)=>(
            <div key={index} className="grid grid-cols-[2fr_2fr_2fr_2fr_1fr] items-center gap-x-4 bg-white rounded-xl border p-2 mb-3">
              <p>{item.binName}</p>
              <p>{item.userName}</p>
              <p>{item.fillLevel}%</p>
              <p>{new Date(item.updatedAt).toLocaleDateString('en-IN', {
                 day: 'numeric',
                 month: 'long',
                 year: 'numeric'
              })}</p>
              <button className="bg-green-700 text-white rounded-xl px-2 py-1 hover:scale-110 active:scale-95 transition-transform duration-200 ease-in-out hover:cursor-pointer" onClick={()=>cleanBin(item.binName, item.email)}>Clean</button>
            </div> ))
            : <p className="text-center p-4 text-gray-600">No data found</p>
          }
          
        </div>
      </div>
      
    </div>
  )
}

export default BinFull