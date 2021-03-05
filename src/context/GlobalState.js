import React, {createContext, useEffect,} from 'react'
import {AppReducer} from "./AppReducer";
import axios from "axios";
import {StateInspector, useState, useReducer} from "reinspect";


const API = 'https://jsonplaceholder.typicode.com'

const initialState = {
    users: localStorage.getItem('users')
        ? JSON.parse(localStorage.getItem('users'))
        : []

}

export const GlobalState = createContext(initialState)


export const GlobalProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const getUsers = async () => {
        const response = await axios.get(`${API}/users`)
        const data = await response.data
        setUsers(data)
        // localStorage.setItem('users', (JSON.stringify(data)))
        // dispatch({type: 'FETCH_USER', payload: data})
    }

    useEffect(() => {
        getUsers()
    }, [])

    const removeUser = async (id) => {
        await axios.delete(`${API}/users/${id}`)
        const newUser = users.filter(user => user.id !== id)
        setUsers(newUser)
        // dispatch({type: 'REMOVE_USER', payload: newUser})
    }

    const addUser = async (user) => {
        const response = await axios.post(`${API}/users`,user)
        const data = await response.data
        setUsers([data,...users ])
        // dispatch({type: 'ADD_USER', payload: user})
    }
    const editUser = async (user) => {

        const response = await axios.put(`${API}/users/${user.id}`,user)
        const data = await response.data
          setUsers(users.map(user=>{
            return user.id === data.id ? {...data}: user
        }))
         // dispatch({type: 'EDIT_USER', payload: user})
    }
    return (

            <GlobalState.Provider value={{users, removeUser, addUser, editUser}}>
                <StateInspector>
                {children}
                </StateInspector>
            </GlobalState.Provider>

    )
}
