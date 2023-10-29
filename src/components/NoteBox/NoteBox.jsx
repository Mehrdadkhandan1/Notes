import React from 'react'
import style from './noteBoxs.module.css'
const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam exercitationem nisi, voluptates commodiametid nulla doloruminventore accusamus magnam fugiat officiis laudantium, laboriosam repellendus eligendi itaque enim fuga.`
const maxLength = 110
const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + " ..." : text;
import { RiDeleteBinLine } from 'react-icons/ri'
const NoteBox = () => {
    return (
// mouseOVer اضافه کن
        <div  className={style.note}>
            {/* عنوان یادداشت */}
            <div className={style.noteTitle}>
                Title
                <RiDeleteBinLine />
            </div>
            {/* تاریخ تولید یادداشت */}
            <span className={style.noteDate}>
                aug , 16 , 2020
            </span>
            {/* متن یادداشت */}
            <p className={style.noteText}>
                {truncatedText}
            </p>

        </div>
    )
}

export default NoteBox
