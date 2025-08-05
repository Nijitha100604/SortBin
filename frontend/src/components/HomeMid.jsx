
const HomeMid = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 mx-30 md:gap-20 gap-10 mb-8">
        <div className="p-4 border bg-fuchsia-200 border-fuchsia-500 border-1 rounded-3xl">
            <p className="text-center p-3 font-semibold text-lg">About the Project</p>
            <p className="text-gray-700 leading-8 text-center">This project uses ESP32-CAM with machine learning YOLOv8 to identify waste types like sharps, plastics, and blood-contaminated items. With the help of sensors and servo motors, it automates waste segregation and uses an IoT dashboard to alert when bins are full or hazardous waste is detected.</p>
        </div>
        <div className="p-4 border bg-fuchsia-200 border-fuchsia-500 border-1 rounded-3xl">
            <p className="text-center p-3 font-semibold text-lg">Key Features</p>
            <ul className="text-gray-700 leading-8 text-center">
                <li>🔎 Image Based Waste Classification</li>
                <li>📸 Sensor-Assisted Accuracy Validation</li>
                <li>🔂 Automated Bin Sorting Mechanism</li>
                <li>🛜 IoT Powered Real-Time Monitoring</li>
                <li>⚠️ Gas & Fill Level Alerts</li>
                <li>🖥️ Interactive React Dashboard</li>
            </ul>
        </div>
    </div>
  )
}

export default HomeMid