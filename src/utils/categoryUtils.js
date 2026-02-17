/**
 * Returns an emoji icon for a given category
 * @param {string} category - The expense category
 * @returns {string} Emoji icon
 */
export const getCategoryIcon = (category) => {
  const icons = {
    Food: '🍔',
    Transport: '🚗',
    Shopping: '🛍️',
    Bills: '📄',
    Entertainment: '🎬',
    Health: '💊',
    Other: '📦'
  };
  return icons[category] || '📦';
};

/**
 * Returns a color for a given category
 * @param {string} category - The expense category
 * @returns {string} Color hex code
 */
export const getCategoryColor = (category) => {
  const colors = {
    Food: '#FF6B6B',
    Transport: '#4ECDC4',
    Shopping: '#FFE66D',
    Bills: '#95E1D3',
    Entertainment: '#C7CEEA',
    Health: '#FF8B94',
    Other: '#B4A7D6'
  };
  return colors[category] || '#B4A7D6';
};
