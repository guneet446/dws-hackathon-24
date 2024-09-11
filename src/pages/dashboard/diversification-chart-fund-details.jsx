import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const DiversificationPieChart = ({ diversificationData }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

  return (
    <PieChart width={450} height={450}>
          <Pie
              data={diversificationData}
              dataKey="percentage"
              nameKey="assetClass"
              outerRadius={150}
              fill="#8884d8"
              label
          >
              {diversificationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Pie>
          <Tooltip />
          <Legend />
      </PieChart>
  );
};

export default DiversificationPieChart;
