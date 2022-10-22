import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../context/AppContext'

const ExpenseItem = ({ expense }) => {
  const { expenses, dispatch } = useContext(AppContext)

  const deleteExpense = () => {
    const filteredExpense = expenses.filter((exp) => {
      return expense.id !== exp.id
    });

    dispatch({type:"DELETE_EXPENSE", payload:[...filteredExpense]});
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        {expense.name}
        <div>
            <span className='badge rounded-pill text-bg-primary mr-3'>
                ${expense.cost}
            </span>
            <TiDelete size='1.5em' onClick={deleteExpense}></TiDelete>
        </div>
    </li>
  )
}

export default ExpenseItem