import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TodoList from '../../components/TodoList/TodoList'
import ShowNotes from '../ShowNotes/ShowNotes'
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='main-note'>
                <ShowNotes />
            </div>
            <TodoList />
            <Outlet />
        </>
    )
}

export default Main
