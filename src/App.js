import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseSummary from './components/ExpenseSummary';
import { getExpenses, saveExpenses } from './services/ExpenseService';
import './assets/styles/App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage on mount
  useEffect(() => {
    const loadedExpenses = getExpenses();
    setExpenses(loadedExpenses);
  }, []);

  /**
   * Adds a new expense to the list
   * @param {Object} expense - The expense object containing amount, category, date, and description
   */
  const handleAddExpense = (expense) => {
    const newExpense = {
      id: Date.now(),
      ...expense
    };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    saveExpenses(updatedExpenses);
  };



  return (
    <div className="app">
      <header className="app-header">
        <h1>💰 Expense Tracker</h1>
        <p>Track your daily expenses and manage your budget</p>
      </header>

      <div className="container">
        <div className="main-content">
          <ExpenseForm onAddExpense={handleAddExpense} />
          
          <ExpenseSummary expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
