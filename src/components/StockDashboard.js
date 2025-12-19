import React, { useState, useEffect } from 'react';
import nvdaData from '../data/nvda-stock.json';
import StockCard from './StockCard';
import StockMetrics from './StockMetrics';
import PriceChart from './PriceChart';
import BarChart from './BarChart';
import './StockDashboard.css';

const StockDashboard = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setStockData(nvdaData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading stock data...</p>
      </div>
    );
  }

  return (
    <div className="stock-dashboard">
      <header className="dashboard-header">
        <h1>Stock Dashboard</h1>
        <p className="last-updated">
          Last Updated: {new Date(stockData.lastUpdated).toLocaleString()}
        </p>
      </header>

      <div className="dashboard-content">
        <div className="main-section">
          <StockCard stockData={stockData} />
          <BarChart stockData={stockData} />
          <PriceChart priceHistory={stockData.priceHistory} />
        </div>
        
        <div className="metrics-section">
          <StockMetrics 
            keyMetrics={stockData.keyMetrics} 
            stockData={stockData} 
          />
        </div>
      </div>
    </div>
  );
};

export default StockDashboard;