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
        const bin = data.user.plasticsData
        setPlasticBin(bin ?? {})
        setPlastics(bin.count ?? 0)
        setTotPlastics(bin.totalCount ?? 0)
        if(bin.hazardousGas ?? false)
        {
          setHazardous((prev) => {
            const exists = prev.some((bin) => bin._id === data.bin[0]._id);
            return exists ? prev : [...prev, data.bin[0]];
          })
        }
        if((bin.fillLevel ?? 0) >= 90)
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
        const bin = data.user.generalsData
        setGeneralBin(bin ?? {})
        setGenerals(bin.count ?? 0)
        setTotGeneral(bin.totalCount ?? 0)
        if(bin.hazardousGas ?? false)
        {
          setHazardous((prev) => {
            const exists = prev.some((bin) => bin._id === data.bin[0]._id);
            return exists ? prev : [...prev, data.bin[0]];
          })
        }
        if((bin.fillLevel ?? 0) >= 90)
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
        const bin = data.user.metalsData
        setMetalBin(bin ?? {})
        setMetals(bin.count ?? 0)
        setTotMetal(bin.totalCount ?? 0)
        if(bin.hazardousGas ?? false)
        {
          setHazardous((prev) => {
            const exists = prev.some((bin) => bin._id === data.bin[0]._id);
            return exists ? prev : [...prev, data.bin[0]];
          })
        }
        if((bin.fillLevel ?? 0) >= 90)
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
        const bin = data.user.infectedsData
        setInfectedBin(bin ?? {})
        setInfecteds(bin.count ?? 0)
        setTotInfected(bin.totalCount ?? 0)
        if(bin.hazardousGas ?? false)
        {
          setHazardous((prev) => {
            const exists = prev.some((bin) => bin._id === data.bin[0]._id);
            return exists ? prev : [...prev, data.bin[0]];
          })
        }
        if((bin.fillLevel ?? 0) >= 90)
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