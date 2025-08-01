import React, { useContext, useState } from 'react'
import { AppContext } from './../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const {backendUrl, token} = useContext(AppContext)

  const submitHandler = async(e) => {
    e.preventDefault();
    
    try{

      const {data} = await axios.post(backendUrl + '/api/user/user-feedback', {name, email, message}, {headers:{token}})
      if(data.success)
      {
        toast.success(data.message)
        setName('')
        setEmail('')
        setMessage('')
      }
      else{
        toast.error(data.message)
      }

    } catch(error){
      console.log(error)
      toast.error(error.message)
    }

  }

  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-200 border border-black-400 p-8 rounded-2xl shadow-md min-w-[450px]">

        <p className="font-semibold text-lg mb-4">Contact form</p>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">

          <div>
            <p className="font-medium mb-1">Name</p>
            <input 
              type="text" 
              value={name} 
              placeholder="Enter your name" 
              onChange={(e)=>setName(e.target.value)}
              className="border bg-white rounded-full w-full p-2 outline-none"
            />
          </div>

          <div>
            <p className="font-medium mb-1">Email</p>
            <input 
              type="email" 
              value={email} 
              placeholder="Enter your email" 
              onChange={(e)=>setEmail(e.target.value)}
              className="border bg-white rounded-full w-full p-2 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <p className="font-medium mb-1">Message</p>
            <textarea 
              rows="4"
              value={message} 
              placeholder="Enter your message"
              onChange={(e)=>setMessage(e.target.value)}
              className="border bg-white rounded-md w-full p-2 outline-none"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-fuchsia-500 text-white py-2 px-8 rounded-md font-semibold cursor-pointer"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Contact
