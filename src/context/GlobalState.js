import React, {createContext, useReducer} from 'react'
import {AppReducer} from "./AppReducer";

const initialState = {
    users: [
        {id: 1, name: 'user one'},
        {id: 2, name: 'user two'},
        {id: 3, name: 'user three'},
    ]
}

export const GlobalState = createContext(initialState)


export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const removeUser = (id) => {
        const newUser = state.users.filter(user => user.id !== id)
        dispatch({type: 'REMOVE_USER', payload: newUser})
    }
    const addUser = (user) => {
        dispatch({type: 'ADD_USER', payload: user})
    }
    const editUser = (user) => {

        dispatch({type: 'EDIT_USER', payload: user })
    }
    return (
        <GlobalState.Provider value={{users: state.users, removeUser,addUser,editUser}}>
            {children}
        </GlobalState.Provider>
    )
}
