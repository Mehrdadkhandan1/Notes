import React from 'react'
import style from './noteBoxs.module.css'
import NoteBox from './NoteBox';


const NotesBox = ({ data }) => {
    return (
        <div className={style.notes}>
            {/* یادداشت ها */}
            {data.length!==0 && data.map(note => {
                return <NoteBox key={note._id} note={note} />
            })}
        </div>
    )
}

export default NotesBox
