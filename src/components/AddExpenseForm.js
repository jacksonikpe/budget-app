import React from 'react'

const AddExpenseForm = () => {
  return (
    <form>
        <div className="col-sm">
            <label for='name'>Name</label>
            <input type="text" id='names' required='required' className='form-control' />
        </div>
        <div className="col-sm mt-3">
        <label for='cost'>Cost</label>
            <input type="text" id='cost' required='required' className='form-control' />
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