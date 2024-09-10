import React from 'react';
import { FaCar } from 'react-icons/fa'; // You can use any car icon from React Icons

const GoalVisualization = () => {
  // Placeholder data
  const targetAmount = 20000; // Target amount to buy the car
  const currentAmount = 5000; // Current amount invested
  const originalAmount = 4000; // Original amount invested (for profit marker)

  const progressPercentage = Math.min((currentAmount / targetAmount) * 100, 100);
  const originalAmountPercentage = Math.min((originalAmount / targetAmount) * 100, 100);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Investment Goal Visualization</h2>
        
        <div className="mt-6">
          <h3 className="text-xl font-medium text-gray-800 mb-2">Goal: Buy a Car</h3>
          <div className="relative pt-1">
            <div className="flex justify-between text-xs font-medium text-gray-600">
              <span>$0</span>
              <span>${targetAmount}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 relative">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
              <div
                className="absolute top-0 right-0 h-4 flex items-center justify-center w-6 text-gray-700"
                style={{ left: `${progressPercentage}%` }}
              >
                <FaCar className="text-black" />
              </div>
              <div
                className="absolute top-0 left-0 h-4 flex items-center justify-center w-6 bg-red-500 text-white rounded-full"
                style={{ left: `${originalAmountPercentage}%` }}
              >
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
              {progressPercentage.toFixed(0)}%
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-gray-800">Current Amount: ${currentAmount}</p>
            <p className="text-sm text-gray-600">Original Amount Invested: ${originalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalVisualization;
