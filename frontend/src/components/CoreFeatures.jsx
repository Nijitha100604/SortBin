import { coreFeatures } from "../assets/assets"

const CoreFeatures = () => {

  return (
    <div className="mx-20">
        <p className="text-xl font-medium">Core Features of SortBin</p>
        {
            coreFeatures.map((item, index)=>(
                <div key={index}>
                    <img src={item.image} alt="core-feature-images"/>
                    <p>{item.data}</p>
                </div>
            ))
        }
    </div>
  )
}

export default CoreFeatures