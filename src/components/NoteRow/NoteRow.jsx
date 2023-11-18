import React from 'react'
import style from './noteRow.module.css'
import { sliceText } from '../../tools/functions'
const text = 'lorem ipsum dolor sit amet, consectetur adip temp tincidunt et dolore magna aliqu  sapien. Cum sociis natoque penatibus et justo  '
import { RiDeleteBinLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const NoteRow = () => {
    return (
        <div className={style.noteRow}>
            {/* باکس نوت */}
            <div className={style.note}>
                <div className={style.titleDate}>
                    <h4>
                        <Link to='/shownote'>
                            title title title
                        </Link>
                    </h4>
                    <span>
                        aug , 16 , 2020
                    </span>
                </div>
                <p className={style.noteText}>
                    {sliceText(text)}
                </p>
            </div>
            {/* باکس دلیت */}
            <div className={style.deleteNote}>
                <RiDeleteBinLine />

            </div>
        </div>
    )
}

export default NoteRow
