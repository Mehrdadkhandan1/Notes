import React from 'react'
import style from './noteBoxs.module.css'
import NoteBox from './NoteBox';


const NotesBox = ({ data }) => {
    console.log(data)
    return (
        <div className={style.notes}>
            {/* یادداشت ها */}
            {data && data.map(note => {
                return <NoteBox key={note._id} note={note} />
            })}
        </div>
    )
}

export default NotesBox
