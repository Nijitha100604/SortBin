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
                setUsers(data.users)
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
        users
    }
    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider