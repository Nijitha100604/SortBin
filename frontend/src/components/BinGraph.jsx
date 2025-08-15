import React, { useContext } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { AppContext } from '../context/AppContext';

const BinGraph = () => {

    const {totPlastics, totGeneral, totMetal, totInfected} = useContext(AppContext)

    const data = [
        {name: "Plastics", value: totPlastics},
        {name: "General", value: totGeneral},
        {name: "Metals", value: totMetal},
        {name: "Infectious", value: totInfected}
    ]

    const colors = [
     "#80a3dbff", // blue-500
    "#69e153ff", // green-500
    "#4b4a48ff", // yellow-400
    "#e56565ff", // red-500
  ];


  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={false} />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BinGraph