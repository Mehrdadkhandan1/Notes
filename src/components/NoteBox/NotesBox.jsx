import React from 'react'
import style from './noteBoxs.module.css'
import NoteBox from './NoteBox';


const NotesBox = () => {
    return (
        <div className={style.notes}>
            {/* یادداشت ها */}
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
        </div>
    )
}

export default NotesBox
