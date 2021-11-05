import React, { useState } from 'react'

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//function ExpenseItem(props) {}
const ExpenseItem = (props) => {

  //"title" is the variable, setTitle is the function to update "title"
  const [title, setTitle] = useState(props.title);
  console.log('eval me');

  const clickHandler = () => {
    console.log('me');
    setTitle('come on');
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;