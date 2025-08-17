import { useState } from "react"
import { toast } from "react-toastify"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios'

const AdminLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const {backendUrl, setAToken} = useContext(AdminContext)

  const onSubmitHandler = async(event) =>{
    event.preventDefault()
    try{
      
      const {data} = await axios.post(backendUrl + '/api/admin/admin-login', {email, password})
      if(data.success)
      {
        localStorage.setItem('aToken', data.aToken)
        setAToken(data.aToken)
        setEmail('')
        setPassword('')
      }
      else
      {
        toast.error(data.message)
      }

    } catch(error){
      console.log(error)
      toast.error(error)
    }
  }

  return (
    <form className="min-h-[100vh] flex items-center bg-gray-200" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-center p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm shadow-lg bg-white">
        <p className="text-2xl font-semibold">Admin <span className="text-fuchsia-500 text-2xl font-semibold">Login</span></p>
        
        <div className="w-full">
          <p className="font-medium">Email</p>
          <input className="border border-zinc-700 rounded-md w-full p-2 mt-1" 
                type="email" 
                placeholder="Enter your email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}/>
        </div>

        <div className="w-full relative">
          <p className="font-medium">Password</p>
          <input className="border border-zinc-700 rounded-md w-full p-2 mt-1" 
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}/>
          <button type="button" className="absolute right-3 top-10 transform -translate-y-1/2 text-gray-600" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? (<FaEyeSlash className="h-5 w-5 text-gray-700" />) : (<FaEye className="h-5 w-5 text-gray-700" />)}</button>
        </div>

        <button className="bg-fuchsia-500 text-white w-full py-2 rounded-md text-base font-bold mt-2 cursor-pointer" type="submit">Login</button>

      </div>
    </form>
  )
}

export default AdminLogin