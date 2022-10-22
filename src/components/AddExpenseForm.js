import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { nanoid } from 'nanoid';

const AddExpenseForm = () => {
   const [name, setName] = useState('');
   const [cost, setCost] = useState('');

   const { dispatch } = useContext(AppContext);

   const onSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_EXPENSE', payload: {
        id: nanoid(),
        name: name,
        cost: parseInt(cost)
    }});
    setName('')
    setCost('')
   }
  return (
    <form onSubmit={onSubmit}>
        <div className="col-sm">
            <label htmlFor='name'>Name</label>
            <input type="text" id='names' value={name} onChange={(e) => setName(e.target.value)} required='required' className='form-control' />
        </div>
        <div className="col-sm mt-3">
        <label htmlFor='cost'>Cost</label>
            <input type="text" id='cost' value={cost} onChange={(e) => setCost(e.target.value)} required='required' className='form-control' />
        </div>
        <div className='col-sm mt-3'>
            <button type='submit' className="btn btn-primary">
                Save
            </button>
        </div>
    </form>
  )
}

export default AddExpenseForm