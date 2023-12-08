import React from 'react'
import style from './noteRow.module.css'
import NoteRow from './NoteRow'
const NotesRow = ({ data }) => {
    console.log(data)
    return (
        <div className={style.notesRow}>
            {data && data.map(note => {
                return (
                    <NoteRow key={note._id} note={note} />
                )
            })}
        </div>
    )
}

export default NotesRow
