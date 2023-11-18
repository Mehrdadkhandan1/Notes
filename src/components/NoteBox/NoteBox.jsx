import React, { useState } from 'react'
import style from './noteBoxs.module.css'
const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam exercitationem nisi, voluptates commodiametid nulla doloruminventore accusamus magnam fugiat officiis laudantium, laboriosam repellendus eligendi itaque enim fuga.`

import { RiDeleteBinLine } from 'react-icons/ri'
import { sliceText } from '../../tools/functions'
import { Link } from 'react-router-dom'
const NoteBox = () => {
    const [deleteIcon, setDeleteIcon] = useState(false)
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
                    <Link to='showNote'>
                        Title
                    </Link>
                </h4>
                <RiDeleteBinLine />
            </div>
            {/* تاریخ تولید یادداشت */}
            <span className={style.noteDate}>
                aug , 16 , 2020
            </span>
            {/* متن یادداشت */}
            <p className={style.noteText}>
                {sliceText(text)}
            </p>

        </div>
    )
}

export default NoteBox
