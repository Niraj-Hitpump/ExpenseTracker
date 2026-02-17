# 💰 Expense Tracker

A simple and intuitive expense tracking application built with React. Track your daily expenses, categorize them, and visualize your spending patterns.

## Features

- ✅ Add expenses with amount, category, date, and description
- 📊 View expenses in a clean, organized list
- 🔍 Filter expenses by category
- 📈 Visual chart showing spending by category
- 💯 Summary view with total expenses per category
- 💾 Data persistence using localStorage
- 📱 Fully responsive design

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ExpenseForm.js
│   ├── ExpenseList.js
│   ├── ExpenseSummary.js
│   └── ChartComponent.js
├── pages/              # Page-level views (future expansion)
├── services/           # API calls and data handling
│   └── ExpenseService.js
├── utils/              # Helper functions
│   ├── dateUtils.js
│   ├── calculationUtils.js
│   └── categoryUtils.js
├── assets/             # Images and styles
│   └── styles/
│       ├── App.css
│       ├── ExpenseForm.css
│       ├── ExpenseList.css
│       ├── ExpenseSummary.css
│       └── ChartComponent.css
├── App.js
└── index.js
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Adding an Expense
1. Fill in the amount, select a category, choose a date, and add a description
2. Click "Add Expense" to save

### Viewing Expenses
- All expenses are displayed in the Expense History section
- Use the filter dropdown to view expenses by specific category

### Understanding Your Spending
- The Summary section shows total expenses and breakdown by category
- The Spending Overview chart visualizes your expenses with colored bars

## Technologies Used

- React 18
- CSS3 (No external CSS framework)
- localStorage for data persistence

## Best Practices Implemented

- **Component-based architecture**: Modular, reusable components
- **Separation of concerns**: Services, utils, and components are separated
- **Naming conventions**: PascalCase for components, camelCase for functions
- **JSDoc comments**: Function documentation for better code understanding
- **Responsive design**: Works on desktop, tablet, and mobile devices
- **Clean code**: Readable, maintainable, and well-structured

## Future Enhancements

- Export data to CSV
- Monthly/yearly expense reports
- Budget setting and alerts
- Multiple currency support
- Dark mode

## License

This project is open source and available for educational purposes.
