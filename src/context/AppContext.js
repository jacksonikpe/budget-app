import { createContext, useReducer } from "react"
import { nanoid } from "nanoid";

const AppReducer = (state, action) => {
    switch(action.type){
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