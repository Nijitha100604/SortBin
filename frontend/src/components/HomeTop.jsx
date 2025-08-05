import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import { ArrowRightIcon } from "@heroicons/react/solid";


const HomeTop = () => {

    const navigate = useNavigate()

  return (
    <div className="mx-30 mt-8 mb-8 py-4 border bg-fuchsia-200 border-fuchsia-500 border-1 rounded-3xl gap-3">
        <div className="flex gap-3 m-8">
            <div>
                <p className="text-2xl leading-10 font-bold">Smart Hospital Waste Segregation and Monitoring <br /> System using Machine Learning and IoT</p>
                <p className="mt-8 text-gray-700 leading-8">A smart system that uses image recognition and sensors to sort waste.<br /> Powered by machine learning and IoT for safe and real-time hospital waste management.</p>
                <button onClick={()=>navigate('/about')} className="flex gap-2 mt-10 bg-fuchsia-500 text-white px-8 py-2 rounded-full font-medium cursor-pointer">Read More <ArrowRightIcon className="h-5 w-5" /></button>
            </div>
            <div>
                <img className="w-70 md:block hidden" src={assets.banner_img} alt="Hometop-image"/>
            </div>
        </div>
    </div>
  )
}

export default HomeTop