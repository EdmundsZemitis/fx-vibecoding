import React from 'react';
import './BarChart.css';

const BarChart = ({ stockData, title = "Volume Comparison" }) => {
  if (!stockData || !stockData.volume || !stockData.averageVolume20D) {
    return <div className="bar-chart">No volume data available</div>;
  }

  const todayVolume = stockData.volume;
  const avgVolume = stockData.averageVolume20D;
  
  // Calculate max volume for scaling
  const maxVolume = Math.max(todayVolume, avgVolume);
  
  const formatVolume = (volume) => {
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(1)}M`;
    }
    if (volume >= 1000) {
      return `${(volume / 1000).toFixed(1)}K`;
    }
    return volume.toLocaleString();
  };

  // Create comparison data
  const comparisonData = [
    {
      label: "Today's Volume",
      volume: todayVolume,
      type: 'today'
    },
    {
      label: "20D Average",
      volume: avgVolume,
      type: 'average'
    }
  ];

  const volumeDifference = todayVolume - avgVolume;
  const volumePercentDiff = ((volumeDifference / avgVolume) * 100).toFixed(1);

  return (
    <div className="bar-chart">
      <h3 className="chart-title">{title}</h3>
      
      <div className="chart-container">
        <div className="volume-label">
          <span className="volume-max">{formatVolume(maxVolume)}</span>
          <span className="volume-mid">{formatVolume(maxVolume / 2)}</span>
          <span className="volume-min">0</span>
        </div>
        
        <div className="bars-container comparison-mode">
          {comparisonData.map((item, index) => {
            const height = (item.volume / maxVolume) * 100;
            const isToday = item.type === 'today';
            const isBelowAverage = isToday && todayVolume < avgVolume;
            
            return (
              <div key={index} className="bar-wrapper comparison-bar">
                <div className="bar-container">
                  <div 
                    className={`bar ${isToday ? (isBelowAverage ? 'below-average' : 'above-average') : 'average-volume'}`}
                    style={{ height: `${height}%` }}
                    title={`${item.label}: ${formatVolume(item.volume)}`}
                  >
                    <div className="bar-gradient"></div>
                  </div>
                </div>
                <div className="bar-label">
                  <span className="bar-title">{item.label}</span>
                  <span className="bar-volume">{formatVolume(item.volume)}</span>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="chart-grid">
          <div className="grid-line grid-25"></div>
          <div className="grid-line grid-50"></div>
          <div className="grid-line grid-75"></div>
          <div className="grid-line grid-100"></div>
        </div>
      </div>
      
      <div className="chart-footer">
        <div className="volume-comparison">
          <span className={`comparison-indicator ${volumeDifference >= 0 ? 'positive' : 'negative'}`}>
            {volumeDifference >= 0 ? '↑' : '↓'} {Math.abs(volumePercentDiff)}%
          </span>
          <span className="comparison-text">
            {volumeDifference >= 0 ? 'Above' : 'Below'} 20D Average
          </span>
        </div>
        <span className="chart-info">Difference: {formatVolume(Math.abs(volumeDifference))}</span>
      </div>
    </div>
  );
};

export default BarChart;