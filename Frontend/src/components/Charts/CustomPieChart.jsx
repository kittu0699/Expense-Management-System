// import React from 'react';
// import CustomTooltip from './CustomTooltip';
// import CustomLegend from './CustomLegend';
// import {
//     PieChart,
//     Pie,
//     Cell,
//     Tooltip,
//     ResponsiveContainer,
//     Legend,
// } from "recharts"; 

// const CustomPieChart = ({ 
//     data, 
//     label,
//     totalAmount,
//     colors, 
//     showTextAnchor
//  }) => {
//   return (
//      <ResponsiveContainer width="100%" height={380}>
//         <PieChart>
//             <Pie
//               data={data}
//               dataKey="amount"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius={130}
//               innerRadius={100}
//               labelLine={false}
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={colors[index%colors.length]} />
//                 ))}
//               </Pie>
//               <Tooltip content={<CustomTooltip />} />
//               <Legend content={<CustomLegend />} />

//               {showTextAnchor && (
//                 <>
//                  <text
//                    x="50%"
//                    y="50%"
//                    dy={-25}
//                    textAnchor="middle"
//                    fill="#666"
//                    fontSize="14px"
//                    >
//                     {label}
//                    </text>

//                    <text
//                    x="50%"
//                    y="50%"
//                    dy={8}
//                    textAnchor="middle"
//                    fill="#333"
//                    fontSize="24px"
//                    fontWeight="semi-bold"
//                    >
//                     {totalAmount}
//                    </text>
//                 </> 
//               )}
//         </PieChart>
//      </ResponsiveContainer>
//      );
// };

// export default CustomPieChart;

import React from 'react';
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor,
}) => {
  return (
    <div style={{ width: '100%', height: 380, position: 'relative' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={130}
            fill="#8884d8"
            paddingAngle={1}
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>

      {/* TEXT MANUALLY OVERLAYED IN CENTER */}
      {showTextAnchor && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mb-7">
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-semibold text-gray-800">{totalAmount}</p>
        </div>
      )}
    </div>
  );
};

export default CustomPieChart;
