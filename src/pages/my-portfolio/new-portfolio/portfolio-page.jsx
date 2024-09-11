import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Header from '../../dashboard/header';

// Register all the elements
Chart.register(...registerables);

// Sample data for the charts
const barData = {
  labels: ['Equity', 'Bond', 'Debt'],
  datasets: [
    {
      label: 'Return in Investment',
      data: [40, 25, 35],
      backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(153,102,255,0.6)', 'rgba(255,159,64,0.6)'],
    },
  ],
};

const pieData = {
  labels: ['Equity', 'Bonds', 'Debt'],
  datasets: [
    {
      data: [50, 30, 20],
      backgroundColor: ['rgba(255,99,132,0.6)', 'rgba(54,162,235,0.6)', 'rgba(255,206,86,0.6)'],
    },
  ],
};

const PortfolioPage = () => {
  return (
    <><Header /><div className="container mx-auto p-6 font-sans">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">My Portfolio</h2>

          {/* Portfolio Overview and Return on Investment */}
          <div className="grid grid-cols-2 gap-6">
              {/* Portfolio Overview */}
              <div className="border p-6 shadow-lg rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Portfolio Overview</h3>
                  <p>Total Invested: <span className="font-bold">$500,000</span></p>
                  <p>Current Value: <span className="font-bold">$650,000</span></p>
                  <p>Returns: <span className="font-bold">+$150,000</span></p>
                  <p>Return %: <span className="font-bold">30%</span></p>
              </div>

              {/* Return in Investment (Bar Chart) */}
              <div className="border p-6 shadow-lg rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Return on Investment</h3>
                  <Bar data={barData} />
              </div>
          </div>

          {/* Portfolio Diversification and Product-Wise Return */}
          <div className="grid grid-cols-2 gap-6 mt-6">
              {/* Portfolio Diversification (Pie Chart) */}
              <div className="border p-6 shadow-lg rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Portfolio Diversification</h3>
                  <Pie data={pieData} />
              </div>

              {/* Product-Wise Return */}
              <div className="border p-6 shadow-lg rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Product-Wise Return</h3>
                  <table className="table-auto w-full">
                      <thead>
                          <tr>
                              <th className="px-4 py-2">Product</th>
                              <th className="px-4 py-2">Invested Amount</th>
                              <th className="px-4 py-2">Current Value</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="border px-4 py-2">Product 1</td>
                              <td className="border px-4 py-2">$200,000</td>
                              <td className="border px-4 py-2">$250,000</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2">Product 2</td>
                              <td className="border px-4 py-2">$150,000</td>
                              <td className="border px-4 py-2">$200,000</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2">Product 3</td>
                              <td className="border px-4 py-2">$150,000</td>
                              <td className="border px-4 py-2">$200,000</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div></>
  );
};

export default PortfolioPage;
