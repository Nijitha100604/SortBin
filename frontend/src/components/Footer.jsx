import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return(
    <div className="bg-gray-200 border border-gray-400 mt-4">
      <div className="flex flex-col sm:grid grid-cols-[1fr_1fr_1fr] gap-14 my-5 mt-5 text-sm mx-10">
        <div>
          <p className="text-xl font-medium mb-5 text-center">Project Info</p>
          <p className="w-full text-gray-600 leading-6 text-center">A smart AI + IoT system for automated biomedical waste classification, segregation, and real-time bin monitoring in hospitals.</p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 text-center">Quick Links</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-center">
            <li onClick={()=>navigate('/')} className="cursor-pointer hover:underline hover:text-gray-900 hover:font-medium">Home</li>
            <li onClick={()=>navigate('/dashboard')} className="cursor-pointer hover:underline hover:text-gray-900 hover:font-medium">Dashboard</li>
            <li onClick={()=>navigate('/about')} className="cursor-pointer hover:underline hover:text-gray-900 hover:font-medium">About</li>
            <li onClick={()=>navigate('/contact')} className="cursor-pointer hover:underline hover:text-gray-900 hover:font-medium">Contact us</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 text-center">Contact Info</p>
          <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer text-center">
            <li className="hover:underline hover:text-gray-900 hover:font-medium">SortBin@gmail.com</li>
            <li className="hover:underline hover:text-gray-900 hover:font-medium">github.com</li>
            <li className="hover:underline hover:text-gray-900 hover:font-medium">India 638401</li>
            <li className="hover:underline hover:text-gray-900 hover:font-medium">+91 8778181352</li>
          </ul>
        </div>

      </div>
      <div>

        <div>
          <p className="py-1 text-sm text-center text-gray-900">Copyright 2025@ SortBin - All Rights Reserved</p>
        </div>

      </div>
    </div>
  )
}

export default Footer