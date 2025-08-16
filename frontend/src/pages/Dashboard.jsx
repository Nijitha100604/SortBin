import { assets } from './../assets/assets';
import { FaExclamationTriangle } from 'react-icons/fa'
import BinGraph from '../components/BinGraph';
import BinFull from '../components/BinFull';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const {token, getPlastics, plasticBin, getGeneral, generalBin, getMetal, metalBin, getInfected, infectedBin, hazardous} = useContext(AppContext)

  const navigate = useNavigate()

  useEffect(()=>{
    getPlastics(),
    getGeneral(),
    getMetal(),
    getInfected()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[token])

  return (
    <div className="mx-20 mb-10">

      {/* Header section */}

      <div className="flex gap-2 items-center mb-4">
        <img className="w-10" src={assets.dashboard_icon} alt="dashboard-icon"/>
        <p className="text-lg font-semibold">Dashboard</p>
      </div>

      {/* Bins section */}

      <div className="flex flex-wrap gap-16 lg:mx-18">

        <div className="flex gap-5 items-center bg-sky-200 px-6 rounded-2xl cursor-pointer" onClick={()=>navigate('/bins/plastic-wastes')}>
          <img className="h-20 w-10" src={assets.plastic_bottle} alt="plastic-icon" />
          <div>
            <p className="font-bold text-2xl text-center mb-1">{plasticBin.count ? plasticBin.count : 0}</p>
            <p className="font-medium">Plastics</p>
          </div>
        </div>

        <div className="flex gap-5 items-center bg-lime-200 p-4 rounded-2xl cursor-pointer" onClick={()=>navigate('/bins/general-wastes')}>
          <img className="w-17" src={assets.general_waste} alt="general-icon" />
          <div>
            <p className="font-bold text-2xl text-center mb-1">{generalBin.count ? generalBin.count : 0}</p>
            <p className="font-medium">General</p>
          </div>
        </div>

        <div className="flex gap-2 items-center bg-gray-300 px-4 rounded-2xl cursor-pointer" onClick={()=>navigate('/bins/metal-wastes')}>
          <img className="w-19 h-25" src={assets.needle} alt="needle-icon" />
          <div>
            <p className="font-bold text-2xl text-center mb-1">{metalBin.count ? metalBin.count : 0}</p>
            <p className="font-medium">Metals</p>
          </div>
        </div>

        <div className="flex gap-2 items-center bg-red-300 rounded-2xl px-4 cursor-pointer" onClick={()=>navigate('/bins/infected-wastes')}>
          <img className=" h-20 w-16" src={assets.blood} alt="blood-icon" />
          <div>
            <p className="font-bold text-2xl text-center mb-1">{infectedBin.count ? infectedBin.count : 0}</p>
            <p className="font-medium">Infectious</p>
          </div>
        </div>

      </div>

      {/* details section */}

      <div className="mt-12 flex flex-col md:flex-row gap-6 lg:mx-18">

        {/* Left section */}
        <div className="w-full md:w-1/2">

          {/* Warning section */}

          <div className="border bg-orange-200 px-6 py-4 rounded-2xl">

            <div className="flex gap-3 items-center mb-4">
              <FaExclamationTriangle size={30} color="orange" />
              <p className="text-lg font-semibold">Warning details</p>
            </div>

            <div className="flex flex-col gap-2">

            {
                hazardous.length > 0 ?

                hazardous.map((item, index)=>(
                    <div key={index} className="flex border justify-between p-2 rounded-xl items-center bg-gray-200 px-8">
                        <p className="font-medium text-m">{item.binName}</p>
                        <button className="border px-2 py-1 rounded-xl bg-orange-400 text-white">Hazardous gas found</button>
                    </div>
                ))

                : <p className="text-gray-700 text-lg mx-10">No Data found</p>
            }

          </div>

          </div>

          {/* Bar graph section */}
          <div className="mt-4">
            <BinFull />
          </div>
          

        </div>

        {/* Right section */}
        

        <div className="w-full md:w-1/2 bg-gray-200 p-4 rounded-md shadow-sm" >
            <BinGraph />
        </div>

      </div>



    </div>
  )
}

export default Dashboard