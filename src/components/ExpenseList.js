import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {    
    const { expenses } = useContext(AppContext);

  return (
    <ul className='list-group'>
        {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
        ))}
    </ul>
  )
}

export default ExpenseList