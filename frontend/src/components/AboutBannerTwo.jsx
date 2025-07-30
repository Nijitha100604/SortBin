import { assets } from "../assets/assets"


const AboutBannerTwo = () => {
  return (
    <div className="border bg-sky-50 mt-8 mb-8 md:flex gap-20 mx-20 p-6 rounded-3xl">
        <div className="flex justify-center md:mx-20">
            <img  className="w-60" src={assets.about_second_banner} alt="about-banner-image-2"/>
        </div>
        <div>
            <p className="text-xl font-medium mb-4 mt-4">Why was sortBin built ?</p>
            <div className="text-gray-700">
                <p className="mt-2">➡️ Improper biomedical waste segregation leads to infections</p>
                <p className="mt-2">✅ Manual handling of waste is risky and error-prone</p>
                <p className="mt-2">❌ No real-time alerts cause delays in waste disposal</p>
                <p className="mt-2">🚮 Overflowing bins create unsanitary environment</p>
            </div>
        </div>
    </div>
  )
}

export default AboutBannerTwo