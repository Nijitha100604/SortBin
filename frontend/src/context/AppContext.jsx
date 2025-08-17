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

  const [totPlastics, setTotPlastics] = useState(0)
  const [totGeneral, setTotGeneral] = useState(0)
  const [totInfected, setTotInfected] = useState(0)
  const [totMetal, setTotMetal] = useState(0)

  const [hazardous, setHazardous] = useState([])
  const [binFull, setBinFull] = useState([])

  const getPlastics = async() =>{
    try{
      const {data} = await axios.get(backendUrl + '/api/user/plastic-wastes', {headers:{token}})
      if(!data.success)
      {
        toast.error(data.message)
      }
      else{
        setPlasticBin(data.bin[0] ?? {})
        setPlastics(data.bin[0].count ?? 0)
        setTotPlastics(data.bin[0].totalCount ?? 0)
        if(data.bin[0].hazardousGas ?? false)
        {
          setHazardous((prev) => {
            const exists = prev.some((bin) => bin._id === data.bin[0]._id);
            return exists ? prev : [...prev, data.bin[0]];
          })
        }
        if((data.bin[0].fillLevel ?? 0) >= 90)
        {
          setBinFull((prev)=>[...prev, data.bin[0]])
        }
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
        setGeneralBin(data.bin[0] ?? {})
        setGenerals(data.bin[0].count ?? 0)
        setTotGeneral(data.bin[0].totalCount ?? 0)
        if(data.bin[0].hazardousGas ?? false)
        {
          setHazardous((prev) => {
            const exists = prev.some((bin) => bin._id === data.bin[0]._id);
            return exists ? prev : [...prev, data.bin[0]];
          })
        }
        if((data.bin[0].fillLevel ?? 0) >= 90)
        {
          setBinFull((prev)=>[...prev, data.bin[0]])
        }
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
        setMetalBin(data.bin[0] ?? {})
        setMetals(data.bin[0].count ?? 0)
        setTotMetal(data.bin[0].totalCount ?? 0)
        if(data.bin[0].hazardousGas ?? false)
        {
          setHazardous((prev) => {
            const exists = prev.some((bin) => bin._id === data.bin[0]._id);
            return exists ? prev : [...prev, data.bin[0]];
          })
        }
        if((data.bin[0].fillLevel ?? 0) >= 90)
        {
          setBinFull((prev)=>[...prev, data.bin[0]])
        }
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
        setInfectedBin(data.bin[0] ?? {})
        setInfecteds(data.bin[0].count ?? 0)
        setTotInfected(data.bin[0].totalCount ?? 0)
        if(data.bin[0].hazardousGas ?? false)
        {
          setHazardous((prev) => {
            const exists = prev.some((bin) => bin._id === data.bin[0]._id);
            return exists ? prev : [...prev, data.bin[0]];
          })
        }
        if((data.bin[0].fillLevel ?? 0) >= 90)
        {
          setBinFull((prev)=>[...prev, data.bin[0]])
        }
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
    infecteds,
    totGeneral,
    totInfected,
    totMetal,
    totPlastics,
    hazardous,
    binFull
  }
  
  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider