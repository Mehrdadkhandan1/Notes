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
        // requst server 
        axios.all([
            // get default folder
            axios.get('/api/getDefaultFolder'),
            // get todos
            // get folders name
            axios.get('/api/getallFolders'),
            // get tags name
            axios.get('/api/getallTags')
        ]).then(resp => {
            // set state
            dispatch({ type: "SELECT_FOLDER", data: resp[0].data })
            dispatch({ type: 'SET_FOLDERS', data: resp[1].data })
            dispatch({ type: 'SET_TAGS', data: resp[2].data })
        })

    }, [])
    return (
        <>
            <Navbar openNav={openNav} setOpenNav={toggleNav} />
            <div className='main-note'>
                <ShowNotes  />
            </div>
            <TodoList />
            <Outlet />
        </>
    )
}

export default Main
