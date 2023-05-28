import React from 'react';
import './chart.css';

const Chart = () => {
  const data = [
    { label: 'Apple', value: 50, color: '#FF6384' },
    { label: 'Banana', value: 30, color: '#36A2EB' },
    { label: 'Cherry', value: 20, color: '#FFCE56' },
  ];

  const total = data.reduce((sum, { value }) => sum + value, 0);

  const renderSlice = ({ label, value, color }, index) => {
    const angle = (value / total) * 180;
    const transform = index === 0 ? `rotate(${angle / 2})` : `rotate(${(angle / 2) + 180})`;
    return (
      <g key={index}>
        <path d={`M0,-50 A50,50 0 ${angle > 180 ? 1 : 0} 1 ${Math.sin(angle * Math.PI / 180) * 50},${-Math.cos(angle * Math.PI / 180) * 50}`} fill={color} transform={transform} />
        {index === 0 && (
          <g transform={`rotate(${angle / 2})`}>
            <path d="M0,-50 L0,-75 L20,-75 L0,-95 L-20,-75 L0,-75 L0,-50" fill="#333" />
          </g>
        )}
      </g>
    );
  };

  return (
    <svg viewBox="-50 -50 100 100" className="chart">
      {data.map(renderSlice)}
    </svg>
  );
};

export default Chart;
