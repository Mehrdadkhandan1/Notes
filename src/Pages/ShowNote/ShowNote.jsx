import React from 'react'
import style from './showNote.module.css'
import { BiEdit } from 'react-icons/bi'
import BackBtn from '../../components/BackBtn'
import TodoList from '../../components/TodoList/TodoList'
import TextEditor from '../../components/TextEditor/TextEditor'
import { Outlet } from 'react-router-dom'
const ShowNote = () => {
    return (
        <div className={style.showNote}>
            <section className={style.note}>
                {/* header */}
                <header className={style.header}>
                    <BackBtn />
                    <div className={style.editBtn}>
                        <BiEdit />
                    </div>
                </header>
                {/* نمایش نوت */}
                <div className={style.noteData}>
                    <h2>Title note</h2>
                    {/* <div className={style.editor}>
                        <TextEditor />
                    </div> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto est quod doloribus quo doloremque reprehenderit iusto odio!
                        Optio, repellendus modi cum hic, inventore,
                        illum quos non ducimus tempora neque maxime
                        !</p>

                </div>

            </section>
            <TodoList />
            <Outlet />
        </div>
    )
}

export default ShowNote
