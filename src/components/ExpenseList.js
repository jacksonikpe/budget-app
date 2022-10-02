import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const expenses = [
        {
            id: 1234568,
            name: 'Shopping',
            cost: 50
        },
        {
            id: 1234565,
            name: 'Holiday',
            cost: 50
        },
        {
            id: 1234562,
            name: 'Transport',
            cost: 50
        },
        {
            id: 1234561,
            name: 'Fuel',
            cost: 50
        },
    ]
  return (
    <ul className='list-group'>
        {expenses.map((expense) => (
            <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
        ))}
    </ul>
  )
}

export default ExpenseList