import React from 'react';
import DiversificationChart from '../dashboard/diversification-chart';
import Header from '../dashboard/header';

// Sample data for the portfolio overview
const portfolioData = {
  totalValue: 1200000,
  totalInvestments: 25,
  topPerformingAsset: {
    name: "Product 2",
    return: 12
  },
  overallReturn: 8.5,
  recentActivity: [
    { date: "2024-09-01", description: "Purchased Product 4", amount: 50000 },
    { date: "2024-08-15", description: "Sold Product 1", amount: -30000 },
    { date: "2024-07-20", description: "Purchased Product 3", amount: 45000 }
  ],
  recentPurchases: [
    { date: "2024-09-01", description: "Product 4", amount: 50000 },
    { date: "2024-07-20", description: "Product 3", amount: 45000 }
  ]
};

const PortfolioDetails = () => {
  return (
    <> 
    <Header/>
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Portfolio Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Total Value</h3>
            <p className="text-2xl font-bold text-gray-900">${portfolioData.totalValue.toLocaleString()}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Total Investments</h3>
            <p className="text-xl font-bold text-gray-900">{portfolioData.totalInvestments}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Top Performing Asset</h3>
            <p className="text-xl font-bold text-gray-900">{portfolioData.topPerformingAsset.name}</p>
            <p className="text-gray-700">Return: {portfolioData.topPerformingAsset.return}%</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Overall Return</h3>
            <p className="text-xl font-bold text-gray-900">{portfolioData.overallReturn}%</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Recent Activity</h3>
            <ul className="list-disc list-inside">
              {portfolioData.recentActivity.map((activity, index) => (
                <li key={index} className="text-gray-700 mb-1">
                  <span className="font-semibold">{activity.date}:</span> {activity.description} (${activity.amount.toLocaleString()})
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <DiversificationChart />
          <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Recent Purchases</h3>
          <ul className="list-disc list-inside">
            {portfolioData.recentPurchases.map((purchase, index) => (
              <li key={index} className="text-gray-700 mb-1">
                <span className="font-semibold">{purchase.date}:</span> {purchase.description} (${purchase.amount.toLocaleString()})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default PortfolioDetails;
