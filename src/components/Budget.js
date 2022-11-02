import React, {useContext, useState} from 'react'
import { AppContext } from '../context/AppContext'

const Budget = () => {
  const {budget, dispatch} = useContext(AppContext);
  const [toggle, setToggle] = useState(false);
  const [budgetNo, setBudgetNo] = useState(`${budget}`)

  const EditBudget = () => {
    setToggle(!toggle);
    if(toggle === true) {
      dispatch({type:'SETBUDGET', payload:budgetNo})
    }
  }


  const toggleBudget = toggle ? <input id='budget' value={budgetNo} onChange={(e) => setBudgetNo(e.target.value)} /> : <span>Budget: ${budget}</span>;

  return (
    <div className="alert alert-secondary d-flex justify-content-between">
        {toggleBudget}
        <button type="button" onClick={EditBudget} className="btn btn-primary btn-sm ms-1">
          Edit
        </button>
    </div>
  )
}

export default Budget