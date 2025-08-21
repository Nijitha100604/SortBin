import {createContext, useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

// eslint-disable-next-line react-refresh/only-export-components
export const AdminContext = createContext()

const AdminContextProvider = (props) =>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL 
    const [aToken, setAToken] = useState(localStorage.getItem('aToken')? localStorage.getItem('aToken'):'')

    const [totalBins, setTotalBins] = useState({})
    const [users, setUsers] = useState([])
    const [feedbacks, setFeedbacks] = useState([])

    const threshold = 90

    const fullBins = users.flatMap(user =>{
    const bins = [
      {data: user.plasticsData, name: "Plastics"},
      {data: user.generalsData, name: "General"},
      {data: user.metalsData, name: "Metals"},
      {data: user.infectedsData, name: "Infectious"}
    ]

    return bins.filter(bin=>bin.data && bin.data.fillLevel >= threshold)
    .map(bin => ({
      userName: user.name,
      binName: bin.name,
      email: user.email,
      fillLevel: bin.data.fillLevel,
      updatedAt: bin.data.updatedAt,
      binType: bin.data.binName
    }))
    })


    const hazardousBins = users.flatMap(user =>{
    const bins = [
      {data: user.plasticsData, name: "Plastics"},
      {data: user.generalsData, name: "General"},
      {data: user.metalsData, name: "Metals"},
      {data: user.infectedsData, name: "Infectious"}
    ]

    return bins.filter(bin=> bin.data && bin.data.hazardousGas)
    .map(bin => ({
      userName: user.name,
      binName: bin.name,
      email: user.email,
      updatedAt: bin.data.updatedAt,
      binType: bin.data.binName
    }))
    })


    const getTotalBins = async() =>{
        const {data} = await axios.get(backendUrl + '/api/admin/totalBins', {headers: {aToken}})
        if(data.success)
        {
            setTotalBins(data.bins[0])
        }
        else
        {
            toast.error(data.message)
        }
    }

    const getAllUsers = async() =>{
        try{
            const {data} = await axios.get(backendUrl + '/api/admin/users', {headers: {aToken}})
            if(data.success)
            {
                console.log(data.users)
                setUsers(data.users)
            }
        } catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    const getAllFeedbacks = async() =>{
        try{
            const {data} = await axios.get(backendUrl + '/api/admin/feedbacks', {headers: {aToken}})
            if(data.success)
            {
                setFeedbacks(data.feedbacks)
            }
            else
            {
                toast.error(data.message)
            }
        } catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    const value = {
        backendUrl,
        aToken,
        setAToken,
        getTotalBins,
        totalBins,
        getAllUsers,
        users,
        getAllFeedbacks,
        feedbacks,
        fullBins,
        hazardousBins
    }
    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider