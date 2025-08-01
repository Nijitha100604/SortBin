import { coreFeatures } from "../assets/assets"

const CoreFeatures = () => {

  return (
    <div className="mx-20">
        <p className="text-xl font-medium">Core Features of SortBin</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-6 mb-6">
        {
            coreFeatures.map((item, index)=>(
                <div className="flex flex-col gap-4 w-50 items-center border p-4 rounded-2xl bg-sky-50 border-sky-300 border-2 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out" key={index}>
                    <img className="w-20" src={item.image} alt="core-feature-images"/>
                    <p className="text-center font-medium">{item.data}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default CoreFeatures