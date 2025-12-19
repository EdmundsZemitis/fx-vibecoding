import React from 'react';
import './PriceChart.css';

const PriceChart = ({ priceHistory }) => {
  if (!priceHistory || priceHistory.length === 0) {
    return <div className="price-chart">No price data available</div>;
  }

  // Calculate min and max prices for scaling
  const prices = priceHistory.map(item => item.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice;

  // Create SVG path for price line
  const createPath = () => {
    const width = 100; // percentage
    const height = 100; // percentage
    const stepX = width / (priceHistory.length - 1);

    const pathData = priceHistory.map((item, index) => {
      const x = index * stepX;
      const y = 100 - ((item.price - minPrice) / priceRange) * height;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    return pathData;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="price-chart">
      <h3 className="chart-title">7-Day Price History</h3>
      
      <div className="chart-container">
        <div className="price-labels">
          <span className="price-high">{formatPrice(maxPrice)}</span>
          <span className="price-low">{formatPrice(minPrice)}</span>
        </div>
        
        <div className="chart-svg-container">
          <svg viewBox="0 0 100 100" className="price-svg">
            <defs>
              <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
                <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
              </linearGradient>
            </defs>
            
            {/* Grid lines */}
            <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            
            {/* Area under the curve */}
            <path 
              d={`${createPath()} L 100 100 L 0 100 Z`}
              fill="url(#priceGradient)"
            />
            
            {/* Price line */}
            <path 
              d={createPath()} 
              fill="none" 
              stroke="#22c55e" 
              strokeWidth="2"
              className="price-line"
            />
            
            {/* Data points */}
            {priceHistory.map((item, index) => {
              const x = (index / (priceHistory.length - 1)) * 100;
              const y = 100 - ((item.price - minPrice) / priceRange) * 100;
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="1.5"
                  fill="#22c55e"
                  className="price-point"
                />
              );
            })}
          </svg>
        </div>
        
        <div className="date-labels">
          <span>{formatDate(priceHistory[0]?.date)}</span>
          <span>{formatDate(priceHistory[priceHistory.length - 1]?.date)}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceChart;