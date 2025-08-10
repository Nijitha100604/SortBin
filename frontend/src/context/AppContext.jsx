import { useState } from 'react';
import {createContext} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const AppContextProvider = (props) =>{

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

  const [plasticBin, setPlasticBin] = useState({})
  const [generalBin, setGeneralBin] = useState({})
  const [metalBin, setMetalBin] = useState({})
  const [infectedBin, setInfectedBin] = useState({})

  const [plastics, setPlastics] = useState(0)
  const [generals, setGenerals] = useState(0)
  const [metals, setMetals] = useState(0)
  const [infecteds, setInfecteds] = useState(0)

  const getPlastics = async() =>{
    try{
      const {data} = await axios.get(backendUrl + '/api/user/plastic-wastes', {headers:{token}})
      if(!data.success)
      {
        toast.error(data.message)
      }
      else{
        setPlasticBin(data.plasticBins[0])
        setPlastics(prev => prev + data.plasticBins[0].count)
      }
    } catch(error){
      console.log(error)
      toast.error(error)
    }
  }

  const getGeneral = async() =>{
    try{
      const {data} = await axios.get(backendUrl + '/api/user/general-wastes', {headers: {token}})
      if(data.success){
        setGeneralBin(data.generalBins[0])
        setGenerals(prev => prev + data.generalBins[0].count)
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

  const getMetal = async() =>{
    try{
      const {data} = await axios.get(backendUrl + '/api/user/metal-wastes', {headers: {token}})
      if(data.success){
        setMetalBin(data.metalBins[0])
        setMetals(prev => prev + data.metalBins[0].count)
      }
      else{
        toast.error(data.message)
      }
    } catch(error){
      console.log(error)
      toast.error(error)
    }
  }

  const getInfected = async() =>{
    try{
      const {data} = await axios.get(backendUrl + '/api/user/infected-wastes', {headers: {token}})
      if(data.success){
        setInfectedBin(data.infectedBins[0])
        setInfecteds(prev => prev + data.infectedBins[0].count)
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

  const value = {
    backendUrl,
    token, setToken,
    getPlastics, plasticBin,
    getGeneral, generalBin,
    getMetal, metalBin,
    getInfected, infectedBin,
    plastics,
    generals,
    metals,
    infecteds
  }
  
  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider