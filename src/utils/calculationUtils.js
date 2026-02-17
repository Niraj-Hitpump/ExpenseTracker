/**
 * Calculates total expenses per category
 * @param {Array} expenses - Array of expense objects
 * @returns {Array} Array of objects with category, total, and percentage
 */
export const calculateCategoryTotals = (expenses) => {
  const totals = {};

  // Sum up expenses by category
  expenses.forEach(expense => {
    if (totals[expense.category]) {
      totals[expense.category] += expense.amount;
    } else {
      totals[expense.category] = expense.amount;
    }
  });

  const grandTotal = Object.values(totals).reduce((sum, val) => sum + val, 0);

  // Convert to array with percentages
  return Object.entries(totals)
    .map(([category, total]) => ({
      category,
      total,
      percentage: grandTotal > 0 ? Math.round((total / grandTotal) * 100) : 0
    }))
    .sort((a, b) => b.total - a.total);
};

/**
 * Calculates the grand total of all expenses
 * @param {Array} expenses - Array of expense objects
 * @returns {number} Total amount
 */
export const calculateGrandTotal = (expenses) => {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
};
