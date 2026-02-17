import React from 'react';
import { calculateCategoryTotals, calculateGrandTotal } from '../utils/calculationUtils';
import { getCategoryIcon } from '../utils/categoryUtils';
import '../assets/styles/ExpenseSummary.css';

function ExpenseSummary({ expenses }) {
  const categoryTotals = calculateCategoryTotals(expenses);
  const grandTotal = calculateGrandTotal(expenses);

  return (
    <div className="expense-summary-card">
      <h2>Summary</h2>
      
      <div className="grand-total">
        <span>Total Expenses</span>
        <span className="total-amount">${grandTotal.toFixed(2)}</span>
      </div>

      {categoryTotals.length > 0 && (
        <div className="category-totals">
          {categoryTotals.map(({ category, total, percentage }) => (
            <div key={category} className="category-item">
              <div className="category-info">
                <span className="category-icon">{getCategoryIcon(category)}</span>
                <span className="category-name">{category}</span>
              </div>
              <div className="category-stats">
                <span className="category-amount">${total.toFixed(2)}</span>
                <span className="category-percentage">{percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseSummary;
