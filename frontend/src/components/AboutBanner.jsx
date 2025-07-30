
import { assets } from './../assets/assets';

const AboutBanner = () => {
  return (
    <div className="border mt-8 mb-8 md:flex gap-5 mx-20 p-5 rounded-3xl">
        <div className="flex flex-col gap-4">
            <p className="text-xl font-medium">What is SortBin ?</p>
            <p className="text-gray-700 leading-8 w-full">SortBin is an AI and IoT-based smart system that classifies and segregates hospital waste automatically. It reduces manual handling, detects hazardous items like sharps or blood-contaminated waste, and alerts staff when bins are full—making hospital waste disposal safe, efficient, and smart.</p>
        </div>
        <div>
            <img className="md:w-200 " src={assets.about_banner} alt="about-image1"/>
        </div>
    </div>
  )
}

export default AboutBanner