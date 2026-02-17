import React from 'react';
import { getCategoryIcon } from '../utils/categoryUtils';
import '../assets/styles/ExpenseList.css';

const CATEGORIES = ['all', 'Food', 'Transport', 'Shopping', 'Bills', 'Entertainment', 'Health', 'Other'];

function ExpenseList({ expenses, onDeleteExpense, filterCategory, onFilterChange }) {
  return (
    <div className="expense-list-card">
      <div className="list-header">
        <h2>Expense History</h2>
        <div className="filter-group">
          <label htmlFor="filter">Filter by:</label>
          <select
            id="filter"
            value={filterCategory}
            onChange={(e) => onFilterChange(e.target.value)}
            className="filter-select"
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {expenses.length === 0 ? (
        <div className="empty-state">
          <p>No expenses found. Start tracking your spending!</p>
        </div>
      ) : (
        <div className="expense-list">
          {expenses.map(expense => (
            <div key={expense.id} className="expense-item">
              <div className="expense-icon">
                {getCategoryIcon(expense.category)}
              </div>
              <div className="expense-details">
                <div className="expense-main">
                  <span className="expense-description">{expense.description}</span>
                  <span className="expense-amount">${expense.amount.toFixed(2)}</span>
                </div>
                <div className="expense-meta">
                  <span className="expense-category">{expense.category}</span>
                  <span className="expense-date">{expense.date}</span>
                </div>
              </div>
              <button
                onClick={() => onDeleteExpense(expense.id)}
                className="btn-delete"
                aria-label="Delete expense"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
