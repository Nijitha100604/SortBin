import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline"
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import  axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [state, setState] = useState('Sign in')
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  const {backendUrl, token, setToken} = useContext(AppContext)

  const [showPassword, setShowPassword] = useState(false)

  const onSubmitHandler = async(event) =>{

    event.preventDefault()

    try{

      if(state === 'Sign in')
      {

        const {data} = await axios.post(backendUrl+'/api/user/register',{name, email, password, phone})
        if(data.success)
        {
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }
        else
        {
          toast.error(data.message)
        }

      }
      else
      {

        const {data} = await axios.post(backendUrl+'/api/user/login',{email, password})
        if(data.success)
        {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        }
        else{
          toast.error(data.message)
        }

      }
      
    } catch(error){
      console.log(error)
      toast.error(error.message)
    }

  }


  useEffect(()=>{
    if(token)
    {
      navigate('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[token])

  return (
    <form className="min-h-[100vh] flex items-center bg-gray-200" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-center p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm shadow-lg bg-white">
        <p className="text-2xl font-semibold">User <span className="text-fuchsia-500 text-2xl font-semibold">{state === 'Sign in' ? "Sign In" : "Login"}</span></p>

        {
          state === 'Sign in' && 
          <div className="w-full">
            <p className="font-medium">Username</p>
            <input className="border border-zinc-700 rounded-md w-full p-2 mt-1" 
                   type="text" 
                   placeholder="Enter your name"
                   onChange ={(e)=>setName(e.target.value)}
                   value={name} />
          </div>
        }

        <div className="w-full">
          <p className="font-medium">Email</p>
          <input className="border border-zinc-700 rounded-md w-full p-2 mt-1" 
                 type="email" 
                 placeholder="Enter your email"
                 onChange={(e)=>setEmail(e.target.value)}
                 value={email} />
        </div>

        {
          state === 'Sign in' &&
          <div className="w-full">
            <p className="font-medium">Phone</p>
            <input className="border border-zinc-700 rounded-md w-full p-2 mt-1" 
                   type="tel" 
                   placeholder="Enter mobile number"
                   onChange={(e)=>setPhone(e.target.value)}
                   value={phone}/>
          </div>
        }

        <div className="w-full relative">
          <p className="font-medium">Password</p>
          <input className="border border-zinc-700 rounded-md w-full p-2 mt-1" 
                 type={showPassword ? "text" : "password"}
                 placeholder="Enter your password"
                 onChange={(e)=>setPassword(e.target.value)}
                 value={password}/>

          <button type="button" className="absolute right-3 top-10 transform -translate-y-1/2 text-gray-600" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? (<EyeOffIcon className="h-5 w-5 text-gray-700"/>) : (<EyeIcon className="h-5 w-5 text-gray-700"/>)}</button>
        </div> 

        <button className="bg-fuchsia-500 text-white w-full py-2 rounded-md text-base font-bold mt-2 cursor-pointer" type="submit">{state === 'Sign in' ? "Sign in" : "Login"}</button>

        {
          state === 'Sign in'
          ? <p>Already have an account ? <span className="text-fuchsia-600 underline cursor-pointer" onClick={()=>setState("Login")}>Login here</span></p>
          : <p>New user ? <span className="text-fuchsia-600 underline cursor-pointer" onClick={()=>setState("Sign in")}>Register here</span></p>     
        }


      </div>
    </form>
    
  )
}

export default Login