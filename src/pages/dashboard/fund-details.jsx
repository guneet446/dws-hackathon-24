import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DiversificationPieChart from './diversification-chart-fund-details';
import ShareButton from './share-button';
import Header from './header';

// Sample fund data
const fundData = [
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

const fundDiversificationData = [
    { assetClass: "Equities", percentage: 45 },
    { assetClass: "Bonds", percentage: 25 },
    { assetClass: "Real Estate", percentage: 15 },
    { assetClass: "Commodities", percentage: 10 },
    { assetClass: "Cash", percentage: 5 }
  ];
  

const FundDetailsPage = () => {
    const { fundId } = useParams();
  const navigate = useNavigate();
  
  // Find the fund based on fundId
  const fund = fundData.find((fund) => {
    console.log(fund.fundID)
    if(fund.fundID === parseInt(fundId)){
        console.log('found')
    return fund;
  }});

  if (!fund) {
    return <p>Fund not found</p>;
  }

  return (
    <><Header /><div className="p-6 bg-gray-100">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Column 1 */}
              <div>
                  <h2 className="text-2xl font-bold text-indigo-600 mb-4">{fund.fundName}</h2>
                  <div className="mb-4 flex flex-row space-x-8 items-center">
                      <h3 className="text-lg font-semibold text-gray-800">Type:</h3>
                      <p className="text-gray-700">{fund.type}</p>
                  </div>
                  <div className="mb-4 flex flex-row space-x-8 items-center">
                      <h3 className="text-lg font-semibold text-gray-800">Rating:</h3>
                      <p className="text-gray-700">{fund.rating}</p>
                  </div>
                  <div className="mb-4 flex flex-row space-x-8 items-center">
                      <h3 className="text-lg font-semibold text-gray-800">Risk Level:</h3>
                      <p className="text-gray-700">{fund.riskLevel}</p>
                  </div>
                  <div className="mb-4 flex flex-row space-x-8 items-center">
                      <h3 className="text-lg font-semibold text-gray-800">1-Year Return:</h3>
                      <p className="text-gray-700">{fund.year1Return}%</p>
                  </div>
                  <div className="mb-4 flex flex-row space-x-8 items-center">
                      <h3 className="text-lg font-semibold text-gray-800">3-Year Return:</h3>
                      <p className="text-gray-700">{fund.year3Return}%</p>
                  </div>
                  <div className="mb-4 flex flex-row space-x-8 items-center">
                      <h3 className="text-lg font-semibold text-gray-800">5-Year Return:</h3>
                      <p className="text-gray-700">{fund.year5Return}%</p>
                  </div>
                  <div className="mb-4 flex flex-row space-x-8 items-center">
                      <h3 className="text-lg font-semibold text-gray-800">AUM:</h3>
                      <p className="text-gray-700">${fund.aum.toLocaleString()}</p>
                  </div>
                  <div className="mb-4 flex flex-row space-x-8 items-center">
                      <h3 className="text-lg font-semibold text-gray-800">Expense Ratio:</h3>
                      <p className="text-gray-700">{fund.expenseRatio}%</p>
                  </div>
                  <div className="mb-4 flex flex-row space-x-8 items-center">
                      <h3 className="text-lg font-semibold text-gray-800">Inception Date:</h3>
                      <p className="text-gray-700">{fund.inceptionDate}</p>
                  </div>
                  <div className="mb-4 flex flex-row space-x-8 items-center">
                      <h3 className="text-lg font-semibold text-gray-800">Fund Manager:</h3>
                      <p className="text-gray-700">{fund.fundManager}</p>
                  </div>
                  <div className="mb-4 flex flex-row space-x-8 items-center">
                      <h3 className="text-lg font-semibold text-gray-800">Predicted 5-Year Return:</h3>
                      <p className="text-gray-700">{fund.predicted5YearReturn}%</p>
                  </div>
              </div>

              {/* Column 2 */}

              <div className='justify-center pt-12'>
                  <div className="flex justify-end mb-4">
                      <ShareButton />
                  </div>
                  <DiversificationPieChart diversificationData={fundDiversificationData} />
              </div>
          </div>
      </div></>
  );
};

export default FundDetailsPage;
