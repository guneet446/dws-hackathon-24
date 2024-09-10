import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Sample data for the pie chart
const diversificationData = {
  labels: ['Stocks', 'Bonds', 'Real Estate', 'Cryptocurrency', 'Commodities'],
  datasets: [
    {
      data: [40, 25, 15, 10, 10],
      backgroundColor: [
        '#4B77BE', // Blue for Stocks
        '#48C9B0', // Teal for Bonds
        '#F39C12', // Orange for Real Estate
        '#E74C3C', // Red for Cryptocurrency
        '#9B59B6'  // Purple for Commodities
      ],
      hoverOffset: 4
    }
  ]
};

const DiversificationChart = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Portfolio Diversification</h2>
      <Pie data={diversificationData} />
    </div>
  );
};

export default DiversificationChart;
