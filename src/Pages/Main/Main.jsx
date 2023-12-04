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

    useEffect(() => {
        if (!id) {
            axios.all([
                axios.get('/api/getallNotes'),
                axios.get('/api/getallTodos')
            ]).then((resp => {
                dispatch({ type: 'SET_NOTES', data: resp[0].data })
                dispatch({ type: 'SET_TODOS', data: resp[1].data })
            }))
        }

    }, [])

    return (
        <>
            <Navbar openNav={openNav} setOpenNav={toggleNav} />
            <div className='main-note'>
                <ShowNotes setOpenNav={toggleNav} title={'title'} />
            </div>
            <TodoList />
            <Outlet />
        </>
    )
}

export default Main
