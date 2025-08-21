import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import {toast} from 'react-toastify'

const Emergency = () => {

  const {users, getAllUsers, aToken, backendUrl, hazardousBins} = useContext(AdminContext)


  const handleHazardous = async(email, type) =>{
    try{

      if(type === "Plastics")
      {
        const {data} = await axios.post(backendUrl + '/api/admin/plastic-hazardous', {email}, {headers: {aToken}})
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
        const {data} = await axios.post(backendUrl + '/api/admin/metal-hazardous', {email}, {headers: {aToken}})
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
        const {data} = await axios.post(backendUrl + '/api/admin/infected-hazardous', {email}, {headers: {aToken}})
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
        const {data} = await axios.post(backendUrl + '/api/admin/general-hazardous', {email}, {headers: {aToken}})
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

    } catch(error){
      console.log(error)
      res.json({success: false, message: error.message})
    }
  }

  useEffect(()=>{
    getAllUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[aToken])


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
            <p>Action</p>
          </div>

          {
            hazardousBins.length > 0 ?
            hazardousBins.map((item, index)=>(
            <div key={index} className="grid grid-cols-[2fr_2fr_2fr_1fr] items-center gap-x-4 bg-white rounded-xl border p-2">
              <p>{item.binName}</p>
              <p>{item.userName}</p>
              <p>{new Date(item.updatedAt).toLocaleDateString('en-IN', {
                 day: 'numeric',
                 month: 'long',
                 year: 'numeric'
              })}</p>
              <button className="bg-orange-400 text-white rounded-xl px-2 py-1 hover:scale-110 active:scale-95 transition-transform duration-200 ease-in-out hover:cursor-pointer" onClick={()=>handleHazardous(item.email, item.binName)}>Clear</button>
            </div>
            ))
            : <p className="text-center p-4 text-gray-600">No Data Found</p>
          }
          
        </div>
      </div>

    </div>
  )
}

export default Emergency