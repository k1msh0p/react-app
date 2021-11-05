import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log('In newExpense')
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const onClickCancelHandler = () => {
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button type="submit" onClick={startEditingHandler}>Add New Expense</button> }
      {isEditing && 
        <ExpenseForm onClickCancel={onClickCancelHandler} onSaveExpenseData={saveExpenseDataHandler}/>
      }
    </div>
  )

  return (
  <div className="new-expense">
  </div>
  )
}

export default NewExpense;