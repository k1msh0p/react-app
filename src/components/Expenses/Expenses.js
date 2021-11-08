import React, { useState } from 'react'
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseDate from './ExpenseDate';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2019');

  const changeYearHandler = (selectedYear) => {
    console.log('in Expense');
    console.log(selectedYear);
    setSelectedYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(
    (f) => f.date.getFullYear().toString() == selectedYear)

    return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYearInit={selectedYear} onChangeYear={changeYearHandler} />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses;