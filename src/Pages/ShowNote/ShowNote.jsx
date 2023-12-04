import React, { useEffect, useState } from 'react'
import style from './showNote.module.css'
import { BiEdit } from 'react-icons/bi'
import BackBtn from '../../components/BackBtn'
import TodoList from '../../components/TodoList/TodoList'
import TextEditor from '../../components/TextEditor/TextEditor'
import { Link, Outlet, useParams } from 'react-router-dom'
import axios from 'axios'
const ShowNote = () => {
    const { id } = useParams()
    const [note, setNote] = useState()
    const [text, setText] = useState()
    useEffect(() => {
        axios.get(`/api/getNote/${id}`).then((resp => {
            console.log(resp)
            setNote(resp.data)
        }))
    }, [])

    const handelText = (newText) => {
        setText(newText)
    }

    return (
        <>
            {note &&
                <div className={style.showNote}>
                    <section className={style.note}>
                        {/* header */}
                        <header className={style.header}>
                            <Link to='/'>
                                <BackBtn />
                            </Link>
                            <div className={style.editBtn}>
                                <BiEdit />
                            </div>
                        </header>
                        {/* نمایش نوت */}
                        <div className={style.noteData}>
                            <h2>{note.title}</h2>
                            <div className={style.editor}>
                                <TextEditor handelText={handelText} />
                            </div>
                                <div className={style.showTextNote} dangerouslySetInnerHTML={{ __html: text }} />

                        </div>
                    </section>
                    <TodoList todos={note.todos} />
                    <Outlet />
                </div>
            }
        </>
    )
}

export default ShowNote
