import { createContext, useReducer } from "react"
import { nanoid } from "nanoid";

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {...state, expenses:[...state.expenses, action.payload]}
        case 'DELETE_EXPENSE':
            return {...state, expenses:state.expenses.filter((expense) => {
                return expense.id !== action.payload
              })}
        case 'SETBUDGET':
            return {...state, budget: action.payload}
        default:
            return state;
    }
}

const initialState = {
    budget : 2000,
    expenses: [
        {
            id: nanoid(),
            name: 'Shopping',
            cost: 50
        },
        {
            id: nanoid(),
            name: 'Holiday',
            cost: 50
        },
        {
            id: nanoid(),
            name: 'Transport',
            cost: 50
        },
        {
            id: nanoid(),
            name: 'Fuel',
            cost: 50
        }
    ]
};

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch
            }}
        >
            {children}
        </AppContext.Provider>
    );
}