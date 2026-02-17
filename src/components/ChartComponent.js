import React from 'react';
import { calculateCategoryTotals } from '../utils/calculationUtils';
import { getCategoryColor } from '../utils/categoryUtils';
import '../assets/styles/ChartComponent.css';

function ChartComponent({ expenses }) {
  const categoryTotals = calculateCategoryTotals(expenses);

  if (categoryTotals.length === 0) {
    return null;
  }

  // Find max value for scaling
  const maxValue = Math.max(...categoryTotals.map(item => item.total));

  return (
    <div className="chart-card">
      <h2>Spending Overview</h2>
      <div className="bar-chart">
        {categoryTotals.map(({ category, total, percentage }) => (
          <div key={category} className="bar-container">
            <div className="bar-label">{category}</div>
            <div className="bar-wrapper">
              <div
                className="bar"
                style={{
                  width: `${(total / maxValue) * 100}%`,
                  backgroundColor: getCategoryColor(category)
                }}
              >
                <span className="bar-value">${total.toFixed(0)}</span>
              </div>
            </div>
            <div className="bar-percentage">{percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChartComponent;
