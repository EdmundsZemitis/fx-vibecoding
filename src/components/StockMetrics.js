import React from 'react';
import './StockMetrics.css';

const StockMetrics = ({ keyMetrics, stockData }) => {
  const formatNumber = (num) => {
    if (typeof num === 'string') return num;
    return num.toLocaleString();
  };

  const formatPercent = (num) => {
    return `${num}%`;
  };

  return (
    <div className="stock-metrics">
      <h3 className="metrics-title">Key Metrics</h3>
      
      <div className="metrics-grid">
        <div className="metric-card">
          <span className="metric-label">P/E Ratio</span>
          <span className="metric-value">{stockData.peRatio}</span>
        </div>
        
        <div className="metric-card">
          <span className="metric-label">EPS</span>
          <span className="metric-value">${stockData.eps}</span>
        </div>
        
        <div className="metric-card">
          <span className="metric-label">Beta</span>
          <span className="metric-value">{stockData.beta}</span>
        </div>
        
        <div className="metric-card">
          <span className="metric-label">Div Yield</span>
          <span className="metric-value">{formatPercent(stockData.dividendYield)}</span>
        </div>
        
        <div className="metric-card">
          <span className="metric-label">Revenue</span>
          <span className="metric-value">{keyMetrics.revenue}</span>
        </div>
        
        <div className="metric-card">
          <span className="metric-label">Gross Margin</span>
          <span className="metric-value">{keyMetrics.grossMargin}</span>
        </div>
        
        <div className="metric-card">
          <span className="metric-label">Operating Margin</span>
          <span className="metric-value">{keyMetrics.operatingMargin}</span>
        </div>
        
        <div className="metric-card">
          <span className="metric-label">Net Margin</span>
          <span className="metric-value">{keyMetrics.netMargin}</span>
        </div>
        
        <div className="metric-card">
          <span className="metric-label">ROI</span>
          <span className="metric-value">{formatPercent(keyMetrics.roiPercent)}</span>
        </div>
        
        <div className="metric-card">
          <span className="metric-label">Debt/Equity</span>
          <span className="metric-value">{keyMetrics.debtToEquity}</span>
        </div>
      </div>
    </div>
  );
};

export default StockMetrics;