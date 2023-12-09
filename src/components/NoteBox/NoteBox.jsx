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
    const deleteNote = (note) => {
        axios.delete(`/api/deleteNote/${note}`).then(resp => {
            dispatch({ type: 'DELETE_NOTE', data: resp.data._id })
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
            <p className={style.noteText}>
                {content ? sliceText(content) : 'No content'}
            </p>

        </div>
    )
}

export default NoteBox
