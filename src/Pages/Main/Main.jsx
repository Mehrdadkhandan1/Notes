import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TodoList from '../../components/TodoList/TodoList'
import ShowNotes from '../ShowNotes/ShowNotes'
import { Outlet, useParams } from 'react-router-dom'
import axios from 'axios'
import { ContextNote } from '../../context/context'



function handelErr(err) {
    return { data: { data: [], message: err.message } }

}


const Main = () => {

    const [openNav, setOpenNav] = useState(false)
    const { id } = useParams()
    const { state, dispatch } = useContext(ContextNote)

    const toggleNav = () => {
        setOpenNav(prev => !prev)
    }

    useEffect(() => {
        const fetchData = async () => {
            // get notes
            const notes = await axios.get('/api/getallNotes').catch(err => {
                return { data: { data: [], message: err.message } }
            })
            dispatch({ type: "SET_NOTES", data: notes.data.data })

            // get folders
            const folders = await axios.get('/api/getallFolders', {
                headers: {
                    "token": JSON.parse(localStorage.getItem('token'))
                }
            }).catch(err => handelErr(err))
            dispatch({ type: 'SET_FOLDERS', data: folders.data.data })
            // get tags 
            const tags = await axios.get('/api/getallTags').catch(err => handelErr(err))
            dispatch({ type: 'SET_TAGS', data: tags.data.data })

            //
            const todos = await axios.get('/api/getallTodos').catch(err => handelErr(err))
            console.log(todos)
            dispatch({ type: 'SET_TODOS', data: todos.data.data })


        }
        fetchData()
    }, [])



    return (
        <>
            <Navbar openNav={openNav} setOpenNav={toggleNav} />
            <div className='main-note'>
                <ShowNotes />
            </div>
            <TodoList />
            <Outlet />
        </>
    )
}

export default Main
