import React, { useState } from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY = [
  { id: 'e1', title: 'Car Insurance', amount: 293.77, date: new Date(2021, 7, 14) },
  { id: 'e2', title: 'Toilet paper', amount: 12.07, date: new Date(2020, 7, 14) },
  { id: 'e3', title: 'Food', amount: 100.37, date: new Date(2020, 7, 14) },
  { id: 'e4', title: 'Grocery', amount: 223.52, date: new Date(2020, 7, 14) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY);
  const [isAddNew, setIsAddNew] = useState(1);

  const addExpenseHandler = (expense) => {
    console.log('in App');
    console.log(expense);

    //MUST use this way to update an array
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }

  const clickNewExpenseHandler = (clickButton) => {
    setIsAddNew(clickButton);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense addNew={isAddNew} onAddExpense={addExpenseHandler} onClickNewExpense={clickNewExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
