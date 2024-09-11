import React, { useState } from 'react';

// Updated sample data with more products
const products = [
  {
    fundID: 1,
    fundName: "Fund A",
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
    fundName: "Fund B",
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
    fundName: "Fund C",
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
    fundName: "Fund D",
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
    fundName: "Fund E",
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
    fundName: "Fund F",
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
  {
    fundID: 7,
    fundName: "Fund G",
    type: "Healthcare",
    rating: 4.6,
    riskLevel: "Moderate",
    year1Return: 9,
    year3Return: 11,
    year5Return: 14,
    aum: 35000000,
    expenseRatio: 0.4,
    inceptionDate: "2016-12-05",
    fundManager: "Manager G",
    predicted5YearReturn: 16
  },
  {
    fundID: 8,
    fundName: "Fund H",
    type: "Utilities",
    rating: 4.1,
    riskLevel: "Low",
    year1Return: 5,
    year3Return: 6,
    year5Return: 8,
    aum: 12000000,
    expenseRatio: 0.3,
    inceptionDate: "2020-08-15",
    fundManager: "Manager H",
    predicted5YearReturn: 9
  },
  {
    fundID: 9,
    fundName: "Fund I",
    type: "Consumer Goods",
    rating: 4.4,
    riskLevel: "Moderate",
    year1Return: 8,
    year3Return: 10,
    year5Return: 13,
    aum: 18000000,
    expenseRatio: 0.5,
    inceptionDate: "2013-06-30",
    fundManager: "Manager I",
    predicted5YearReturn: 15
  },
  {
    fundID: 10,
    fundName: "Fund J",
    type: "Financials",
    rating: 4.3,
    riskLevel: "Moderate",
    year1Return: 7,
    year3Return: 9,
    year5Return: 11,
    aum: 22000000,
    expenseRatio: 0.4,
    inceptionDate: "2018-04-22",
    fundManager: "Manager J",
    predicted5YearReturn: 13
  }
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

  // Limit to 6 products for display
  const displayedProducts = products.slice(0, 6);

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
        {displayedProducts.map((product) => (
          <div key={product.fundID} className="bg-white shadow-md rounded-lg p-4">
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