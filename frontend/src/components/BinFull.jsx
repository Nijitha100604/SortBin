import { assets } from './../assets/assets';

const BinFull = () =>{
    return(
    <div className="border p-5 rounded-2xl">
        <div className="flex gap-3 items-center mb-5">
            <img className="w-5" src={assets.bin_full} alt="bin-full-icon" />
            <p className="text-lg font-semibold">Bin Full</p>
        </div>

        <div className="flex flex-col gap-2">
            <div className="flex border justify-between p-2 rounded-xl bg-gray-200 px-8">
                <p className="font-medium text-m">Plastics</p>
                <p className="text-gray-700 text-sm">100%</p>
                <button className="border px-2 rounded-xl bg-green-600 text-white">FULL</button>
            </div>

            <div className="flex border justify-between p-2 rounded-xl bg-gray-200 px-8">
                <p className="font-medium text-m">General</p>
                <p className="text-gray-700 text-sm">100%</p>
                <button className="border px-2 rounded-xl bg-green-600 text-white">FULL</button>
            </div>

            <div className="flex border justify-between p-2 rounded-xl bg-gray-200 px-8">
                <p className="font-medium text-m">Sharps</p>
                <p className="text-gray-700 text-sm">100%</p>
                <button className="border px-2 rounded-xl bg-green-600 text-white">FULL</button>
            </div>

        </div>
    </div>
    )
}

export default BinFull