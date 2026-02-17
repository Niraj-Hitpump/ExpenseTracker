const STORAGE_KEY = 'expense_tracker_data';

/**
 * Retrieves expenses from localStorage
 * @returns {Array} Array of expense objects
 */
export const getExpenses = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading expenses:', error);
    return [];
  }
};

/**
 * Saves expenses to localStorage
 * @param {Array} expenses - Array of expense objects to save
 */
export const saveExpenses = (expenses) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  } catch (error) {
    console.error('Error saving expenses:', error);
  }
};

/**
 * Clears all expenses from localStorage
 */
export const clearExpenses = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing expenses:', error);
  }
};
