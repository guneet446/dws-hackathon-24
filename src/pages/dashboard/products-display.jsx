import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Updated sample data with more products
const products = [
  {
    fundID: 1,
    fundName: "DWS Global Equity Fund",
    type: "Equity",
    rating: 4.5,
    riskLevel: "Moderate",
    year1Return: 8,
    year3Return: 10,
    year5Return: 12,
    aum: 10000000,
    expenseRatio: 0.5,
    inceptionDate: "2015-01-01",
    fundManager: "Manager A",
    predicted5YearReturn: 14
  },
  {
    fundID: 2,
    fundName: "DWS U.S. Government Securities Fund",
    type: "Bond",
    rating: 4.0,
    riskLevel: "Low",
    year1Return: 4,
    year3Return: 5,
    year5Return: 6,
    aum: 15000000,
    expenseRatio: 0.3,
    inceptionDate: "2018-05-15",
    fundManager: "Manager B",
    predicted5YearReturn: 7
  },
  {
    fundID: 3,
    fundName: "DWS Invest Global Focus",
    type: "Real Estate",
    rating: 4.2,
    riskLevel: "Moderate",
    year1Return: 6,
    year3Return: 7,
    year5Return: 9,
    aum: 20000000,
    expenseRatio: 0.4,
    inceptionDate: "2017-09-01",
    fundManager: "Manager C",
    predicted5YearReturn: 10
  },
  {
    fundID: 4,
    fundName: "DWS Invest Global Real Estate Securities",
    type: "Commodities",
    rating: 4.7,
    riskLevel: "High",
    year1Return: 12,
    year3Return: 15,
    year5Return: 18,
    aum: 50000000,
    expenseRatio: 0.6,
    inceptionDate: "2012-11-23",
    fundManager: "Manager D",
    predicted5YearReturn: 20
  },
  {
    fundID: 5,
    fundName: "DWS Global High Yield Bond Fund",
    type: "Mixed Assets",
    rating: 4.3,
    riskLevel: "Moderate",
    year1Return: 7,
    year3Return: 9,
    year5Return: 11,
    aum: 30000000,
    expenseRatio: 0.5,
    inceptionDate: "2019-03-10",
    fundManager: "Manager E",
    predicted5YearReturn: 13
  },
  {
    fundID: 6,
    fundName: "DWS Invest Global Focus",
    type: "Technology",
    rating: 4.8,
    riskLevel: "High",
    year1Return: 15,
    year3Return: 18,
    year5Return: 22,
    aum: 25000000,
    expenseRatio: 0.7,
    inceptionDate: "2014-07-21",
    fundManager: "Manager F",
    predicted5YearReturn: 25
  },
];

const ProductList = () => {
  const [returnPeriod, setReturnPeriod] = useState('year1');

  const handleReturnPeriodChange = (e) => {
    setReturnPeriod(e.target.value);
  };

  const getReturnValue = (product) => {
    switch (returnPeriod) {
      case 'year3':
        return product.year3Return;
      case 'year5':
        return product.year5Return;
      default:
        return product.year1Return;
    }
  };

  const navigate = useNavigate();

  const handleFundClick = (fundID) => {
    navigate(`/fund-details/${fundID}`);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-indigo-600">Recommended Funds</h2>
        <select
          className="border border-gray-300 rounded-lg p-2"
          value={returnPeriod}
          onChange={handleReturnPeriodChange}
        >
          <option value="year1">1 Year Return</option>
          <option value="year3">3 Year Return</option>
          <option value="year5">5 Year Return</option>
        </select>
      </div>
      
      {/* 3x2 grid for the products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.fundID} className="bg-white shadow-md rounded-lg p-4"  onClick={() => handleFundClick(product.fundID)}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.fundName}</h3>
            <div className="flex flex-col md:flex-row space-x-4">
              {/* Column 1 */}
              <div className="flex-1 mb-4">
                <p className="text-gray-600">Rating: {product.rating}</p>
                <p className="text-gray-600">Type: {product.type}</p>
              </div>

              {/* Column 2 */}
              <div>
                <p className="flex-1 text-gray-600">
                  Return: {getReturnValue(product)}%
                </p>
                <p className="text-gray-600 mb-2">Risk: {product.riskLevel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;