import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseDate from './ExpenseDate';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2019');

  const changeYearHandler = (selectedYear) => {
    console.log('in Expense');
    console.log(selectedYear);
    setSelectedYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(
    (f) => f.date.getFullYear().toString() == selectedYear)

  let expensesContent = <p>No expenses</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((exp) => (
      <ExpenseItem
        key={exp.id}
        title={exp.title}
        amount={exp.amount}
        date={exp.date}
      />
    ))
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYearInit={selectedYear} onChangeYear={changeYearHandler} />
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expenses;