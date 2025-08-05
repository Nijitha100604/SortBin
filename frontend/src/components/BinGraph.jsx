import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const BinGraph = () => {

    const data = [
        {name: "Plastics", value: 8},
        {name: "General", value: 10},
        {name: "Metals", value: 2},
        {name: "Infectious", value: 7}
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