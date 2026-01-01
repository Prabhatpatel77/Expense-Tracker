import React from 'react';
import { Cell, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Legend } from 'recharts';

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
// ];
const RADIAN = Math.PI / 180;
const COLORS = ["#A000FF", "#FF9304", "#FDE006"];

const renderCustomizedLabel = ({ 
  cx, cy, midAngle, innerRadius, outerRadius, percent,
 }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text 
    x={x}
     y={y}
      fill="white"
       textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        >
      {`${((percent) * 100).toFixed(0)}%`}
    </text>
  );
};
// width={400} height={400}
export default function Piehart({data}) {
  const filteredData=data.filter(item=>item.value>0);
  return (
    <div style={{width:300, height:250}}>
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart >
        <Pie
          data={filteredData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {filteredData.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
         <Legend iconType="rect" verticalAlign="bottom" />
      </RechartsPieChart>
    </ResponsiveContainer>
     </div>
  );
}