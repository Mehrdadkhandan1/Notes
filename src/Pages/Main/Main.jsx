import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TodoList from '../../components/TodoList/TodoList'
import ShowNotes from '../ShowNotes/ShowNotes'
import { Outlet, useParams } from 'react-router-dom'
import axios from 'axios'
import { ContextNote } from '../../context/context'




const Main = () => {

    const [openNav, setOpenNav] = useState(false)
    const { id } = useParams()
    const { state, dispatch } = useContext(ContextNote)

    const toggleNav = () => {
        setOpenNav(prev => !prev)
    }

    return (
        <>
            <Navbar openNav={openNav} setOpenNav={toggleNav} />
            <div className='main-note'>
                <ShowNotes />
            </div>
            <TodoList todos={state.todos} />
            <Outlet />
        </>
    )
}

export default Main
