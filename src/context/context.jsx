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
        case "DELETE_NOTE":

            const newNotes = state.notes.filter(note => note._id !== action.data)


            return (
                {
                    ...state,
                    notes: newNotes
                }
            )
        case "SELECT_FOLDER":
            return {
                ...state,
                selectedFolder: action.data
            }

        case "SET_TODOS":
            return {
                ...state,
                todos: action.data
            }

        case "DELETE_TODO":

            const newDataTodo = state.todos
            const todos = newDataTodo.filter(todo => todo._id !== action.data)
            return {
                ...state,
                todos
            }

        case "UPDATE_TODO":
            const newState = state.todos
            const getTodo = newState.findIndex(note => note._id === action.data._id)
            newState[getTodo] = action.data
            return (state)
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
        setOpen(prev => !prev)
    }
    return (
        <LoadingContext.Provider value={{ open, changeStatus }}>
            {children}
        </LoadingContext.Provider>
    )
}