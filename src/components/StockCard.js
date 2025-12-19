import React from 'react';
import './StockCard.css';

const StockCard = ({ stockData }) => {
  const isPositive = stockData.changeAmount >= 0;
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

  const formatVolume = (volume) => {
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(1)}M`;
    }
    if (volume >= 1000) {
      return `${(volume / 1000).toFixed(1)}K`;
    }
    return volume.toLocaleString();
  };

  return (
    <div className="stock-card">
      <div className="stock-header">
        <div className="stock-title">
          <h2 className="stock-symbol">{stockData.symbol}</h2>
          <p className="company-name">{stockData.companyName}</p>
        </div>
        <div className="market-cap">
          <span className="market-cap-label">Market Cap</span>
          <span className="market-cap-value">{stockData.marketCap}</span>
        </div>
      </div>

      <div className="price-section">
        <div className="current-price">
          <span className="price">{formatPrice(stockData.currentPrice)}</span>
          <div className={`price-change ${isPositive ? 'positive' : 'negative'}`}>
            <span className="change-amount">
              {isPositive ? '+' : ''}{formatPrice(stockData.changeAmount)}
            </span>
            <span className="change-percent">
              ({isPositive ? '+' : ''}{stockData.changePercent}%)
            </span>
          </div>
        </div>
      </div>

      <div className="stock-details">
        <div className="detail-row">
          <div className="detail-item">
            <span className="detail-label">Open</span>
            <span className="detail-value">{formatPrice(stockData.openPrice)}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">High</span>
            <span className="detail-value">{formatPrice(stockData.dayHigh)}</span>
          </div>
        </div>
        
        <div className="detail-row">
          <div className="detail-item">
            <span className="detail-label">Low</span>
            <span className="detail-value">{formatPrice(stockData.dayLow)}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Volume</span>
            <span className="detail-value">{formatVolume(stockData.volume)}</span>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-item">
            <span className="detail-label">52W High</span>
            <span className="detail-value">{formatPrice(stockData.fiftyTwoWeekHigh)}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">52W Low</span>
            <span className="detail-value">{formatPrice(stockData.fiftyTwoWeekLow)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockCard;