import React from 'react'
import style from './noteRow.module.css'
import NoteRow from './NoteRow'
const NotesRow = () => {
    return (
        <div className={style.notesRow}>
            <NoteRow />
            <NoteRow />
            <NoteRow />
            <NoteRow />
            <NoteRow />
            <NoteRow />
            <NoteRow />
            <NoteRow />
        </div>
    )
}

export default NotesRow
