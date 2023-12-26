import React, { useContext, useState } from 'react'
import style from './noteBoxs.module.css'
const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam exercitationem nisi, voluptates commodiametid nulla doloruminventore accusamus magnam fugiat officiis laudantium, laboriosam repellendus eligendi itaque enim fuga.`

import { RiDeleteBinLine } from 'react-icons/ri'
import { sliceText, translateDate } from '../../tools/functions'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ContextNote, LoadingContext } from '../../context/context'

const NoteBox = ({ note }) => {
    const { changeStatus } = useContext(LoadingContext)
    const { state, dispatch } = useContext(ContextNote)
    const [deleteIcon, setDeleteIcon] = useState(false)
    const { _id, title, content, tags, createdAt } = note
    // delete note
    const deleteNote = (note) => {

        changeStatus()
        axios.delete(`/api/deleteNote/${note}`).then(resp => {
            // show loading 
            if (resp.status === 200) {
                dispatch({ type: 'DELETE_NOTE', data: resp.data.data._id })
                // stop loading
                changeStatus()

            }
        })
    }


    return (
        // mouseOVer اضافه کن
        <div onMouseOver={() => {
            setDeleteIcon(true)
        }} onMouseOut={() => {
            setDeleteIcon(false)
        }} className={`${style.note} ${deleteIcon ? style.showIcon : ''}`}>
            {/* عنوان یادداشت */}
            <div className={style.noteTitle}>
                <h4>
                    <Link to={`showNote/${_id}`}>
                        {title}
                    </Link>
                </h4>
                <RiDeleteBinLine onClick={() => {
                    deleteNote(_id)
                }} />
            </div>
            {/* تاریخ تولید یادداشت */}
            <span className={style.noteDate}>
                {translateDate(createdAt)}
            </span>
            {/* متن یادداشت */}
            <div className={style.noteText}>
                {content ? <p className={style.showTextNote} dangerouslySetInnerHTML={{ __html: sliceText(content) }} /> : 'No content'}
            </div>

        </div>
    )
}

export default NoteBox
