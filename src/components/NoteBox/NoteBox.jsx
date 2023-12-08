import React, { useState } from 'react'
import style from './noteBoxs.module.css'
const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam exercitationem nisi, voluptates commodiametid nulla doloruminventore accusamus magnam fugiat officiis laudantium, laboriosam repellendus eligendi itaque enim fuga.`

import { RiDeleteBinLine } from 'react-icons/ri'
import { sliceText, translateDate } from '../../tools/functions'
import { Link } from 'react-router-dom'
const NoteBox = ({ note }) => {
    const [deleteIcon, setDeleteIcon] = useState(false)
    const { _id, title, content, tags, createdAt } = note
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
                <RiDeleteBinLine />
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
