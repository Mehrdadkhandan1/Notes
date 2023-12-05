import React, { createContext, useReducer, useState } from 'react'

// استیت اولیه
const initialState = {
    notes: [],
    folders: [],
    tags: [],
    todos: [],
    err: ''
}
// فانکشن برای ردیوسر
const reducer = (state, action) => {

    switch (action.type) {
        case "SET_NOTES":
            return {
                ...state,
                notes: action.data
            }
        case "SET_TODOS":
            return {
                ...state,
                todos: action.data
            }
        case "ADD_TODO":
            const newTodos = state.todos
            newTodos.push(action.data)
            return {
                ...state,
                todos: newTodos
            }
            break
        case "SET_FOLDERS":
            return {
                ...state,
                folders: action.data
            }
        case "SET_TAGS":
            return {
                ...state,
                tags: action.data
            }
        default: state
            break;
    }

}
// ساخت کانتکست
export const ContextNote = createContext()

export const ContextNoteProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <ContextNote.Provider value={{ state, dispatch }}   >
            {children}
        </ContextNote.Provider>
    )
}


export const LoadingContext = createContext()

export const LoadingContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const changeStatus = () => {
        console.log('object')
        setOpen(prev => !prev)
    }
    return (
        <LoadingContext.Provider value={{ open, changeStatus }}>
            {children}
        </LoadingContext.Provider>
    )
}