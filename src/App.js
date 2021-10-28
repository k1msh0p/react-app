import React from 'react'
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 293.77, date: new Date(2020, 7, 14) },
    { id: 'e2', title: 'Toilet paper', amount: 12.07, date: new Date(2020, 7, 14) },
    { id: 'e3', title: 'Food', amount: 100.37, date: new Date(2020, 7, 14) },
    { id: 'e4', title: 'Grocery', amount: 223.52, date: new Date(2020, 7, 14) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
