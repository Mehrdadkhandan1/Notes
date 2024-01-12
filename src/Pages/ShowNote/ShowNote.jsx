import React, { useContext, useEffect, useState } from 'react'
import style from './showNote.module.css'
import { BiEdit } from 'react-icons/bi'
import BackBtn from '../../components/BackBtn'
import TodoList from '../../components/TodoList/TodoList'
import TextEditor from '../../components/TextEditor/TextEditor'
import { Link, Outlet, useParams } from 'react-router-dom'
import { RiPagesLine } from "react-icons/ri";
// vector no content
import vector from './../../picture/noContent.svg'
import { FaCheck } from "react-icons/fa6";
import axios from 'axios'
// context 
import { ContextNote, LoadingContext } from '../../context/context'

import SubmitBtn from '../../components/SubmitBtn'
import { AlertContext } from '../../components/Alert/Alert'
const ShowNote = () => {
    // get id notes
    const { id } = useParams()
    // open or close input
    const [inputTitle, openInputTitle] = useState(false)
    // input change title
    const [valueTitle, changeTitle] = useState('')
    // notes 
    const [note, setNote] = useState('')
    // todos
    const [todos, setTodos] = useState([])
    // textEditor 
    const [text, changeText] = useState('')
    // text editor 
    const [edit, setEdit] = useState(false)
    // state 
    const { state, dispatch } = useContext(ContextNote)
    // loading 
    const { changeStatus } = useContext(LoadingContext)
    //alert 
    const {  showAlert } = useContext(AlertContext)

    useEffect(() => {
        // get note 
        axios.get(`/api/getNote/${id}`).then((resp => {
            if (resp.status === 200) {
                // todos in note
                // dispatch({ type: "SET_TODOS", data: resp.data.data.todos })
                console.log(resp.data.data.content)
                if (resp.data.data.content === undefined) {
                    setNote({
                        ...resp.data.data,
                        content: ''
                    })
                } else {
                    setNote(resp.data.data)
                    changeText(resp.data.data.content)
                }

            }
            // filter todos in state
            const todos = []

            state.todos.map((todoState) => {

                resp.data.data.todos.map(todo => {
                    todo === todoState._id && todos.push(todoState)
                })
                setTodos(todos)
            })
        })).catch(err => {
            console.log(err)
        })
    }, [state])

    // submit change 
    const changeNote = (e) => {
        e.preventDefault()
        // show Loading
        changeStatus()
        axios.put(`/api/updateNote/${id}`, {
            ...note,
            content: text
        }).then(resp => {

            if (resp.status === 200) {
                //close loading 
                changeStatus()
                setNote(resp.data.data)
                setEdit(prev => !prev)

            }
        })
    }

    const openInput = () => {
        openInputTitle(prev => !prev)
        changeTitle(note.title)
    }


    const changetitle = (e) => {
        changeTitle(e.target.value)
    }
    const updateTitle = () => {
        // show loading
        changeStatus()
        axios.put(`/api/updateNote/${id}`, {
            ...note,
            title: valueTitle
        }).then(resp => {
            if (resp.status === 200) {
                changeStatus()
                showAlert('success', 'Title updated successfully')
                setNote(resp.data.data)
            }
        })
    }

    return (
        <>
            {console.log(note)}
            {note &&
                <div className={style.showNote}>
                    <section className={style.note}>
                        {/* header */}
                        <header className={style.header}>
                            <Link to='/'>
                                <BackBtn />
                            </Link>
                            <div onClick={() => {
                                setEdit(prev => !prev)
                            }} className={style.editBtn}>
                                {edit ?
                                    <RiPagesLine />
                                    :
                                    <BiEdit />}
                            </div>
                        </header>
                        {/* نمایش نوت */}
                        <div className={style.noteData}>


                            <div className={style.title}>
                                {
                                    inputTitle ?
                                        <input onChange={changetitle} className={style.changeTitle} type="text" value={valueTitle} />
                                        :
                                        <h2  >{note.title} </h2>
                                }
                                <span onClick={openInput} >
                                    {inputTitle ?
                                        <FaCheck onClick={updateTitle} />
                                        :
                                        <BiEdit />
                                    }
                                </span>
                            </div>

                            {edit ?
                                <div className={style.editor}>
                                    <form onSubmit={changeNote}>
                                        <TextEditor content={text} handelText={changeText} />
                                        <SubmitBtn disabled={note.content === text ? true : false} >
                                            Submit
                                        </SubmitBtn>

                                    </form>
                                </div>
                                :

                                <>
                                    {!text ?
                                        <div className={style.vectorNoContent}>
                                            <img src={vector} alt="no content" />
                                            <p>To write text on <BiEdit /> click</p>
                                        </div>
                                        :
                                        <div className={style.showTextNote} dangerouslySetInnerHTML={{ __html: text }} />
                                    }
                                </>
                            }
                        </div>
                    </section>
                    <TodoList todos={todos} />
                    <Outlet />
                </div>
            }
        </>
    )
}

export default ShowNote
