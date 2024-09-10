import React from 'react'
import ProductList from './products-display'
import Header from './header'
import PortfolioOverview from '../my-portfolio/my-portfolio-overview'

export const Dashboard = () => {
return (
    <div>
        <Header/>
        <PortfolioOverview/>
        <ProductList/>
    </div>
)
}