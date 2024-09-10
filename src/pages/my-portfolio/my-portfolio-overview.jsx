import React from 'react';

// Sample data for the portfolio overview
const portfolioData = {
  investedValue: 500000,  // Example invested value
  currentValue: 650000,   // Example current value
  returnPercentage: 30,   // Example return percentage
  recentPurchases: [
    { date: "2024-09-01", description: "Product 4", amount: 50000 },
    { date: "2024-07-20", description: "Product 3", amount: 45000 }
  ]
};

const PortfolioOverview = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-4">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Portfolio Overview</h2>

      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        {/* Details Column */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-600">Invested Value</h3>
              <p className="text-2xl font-bold text-gray-900">${portfolioData.investedValue.toLocaleString()}</p>
            </div>

            <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-600">Current Value</h3>
              <p className="text-2xl font-bold text-gray-900">${portfolioData.currentValue.toLocaleString()}</p>
            </div>

            <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-600">Return Percentage</h3>
              <p className="text-2xl font-bold text-gray-900">{portfolioData.returnPercentage}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;

