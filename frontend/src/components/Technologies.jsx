import { hardwareTechnologies, softwareTechnologies } from "../assets/assets"

const Technologies = () => {
  return (
    <div className="mb-8">
    <p className="mx-20 text-xl font-medium mb-6">Technologies Used</p>
    <div className="mx-20 flex flex-col gap-8">
        <div className="border border-1 bg-sky-50 rounded-2xl p-5">
            <p className="font-semibold mb-4">Hardware</p>
            <div className="flex gap-14 mx-5">
                {
                    hardwareTechnologies.map((item, index)=>(
                        <div  key={index} className="relative flex flex-col group">
                            <img className="rounded-full border-2 border w-20 transition-transform duration-300 group-hover:scale-105 hover:cursor-pointer" src={item.image} alt="Hardware-images"/>
                                <p className="absolute border bottom-[-30px] bg-gray-200 px-3 py-1 rounded text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    {item.name}
                                </p>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="border border-1 bg-sky-50 rounded-2xl p-5">
            <p className="font-semibold mb-4">Software</p>
            <div className="flex gap-12 mx-5">
                {
                    softwareTechnologies.map((item, index)=>(
                        <div  key={index} className="relative flex flex-col group">
                            <img className="rounded-full border-2 border w-20 transition-transform duration-300 group-hover:scale-105 hover:cursor-pointer" src={item.image} alt="Hardware-images"/>
                                <p className="absolute border bottom-[-30px] bg-gray-200 px-3 py-1 rounded text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    {item.name}
                                </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </div>
  )
}

export default Technologies