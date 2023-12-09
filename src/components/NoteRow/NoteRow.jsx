import React, { useEffect, useState } from 'react'
import style from './noteRow.module.css'
import { sliceText, translateDate } from '../../tools/functions'
const text = 'lorem ipsum dolor sit amet, consectetur adip temp tincidunt et dolore magna aliqu  sapien. Cum sociis natoque penatibus et justo  '
import { RiDeleteBinLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import axios from 'axios'
// _id, title, content, tags, createdAt 
const NoteRow = ({ note }) => {
    const { _id, title, content, tags, createdAt } = note
    const deleteNote = (note) => {
        axios.post(`/api/deleteNote/${note}`).then(resp=>{
            console.log(resp)
        })
    }
    return (
        <>
            {Object.keys(note).length &&
                <div className={style.noteRow}>
                    {/* باکس نوت */}
                    <div className={style.note}>
                        <div className={style.titleDate}>
                            <h4>
                                <Link to={`shownote/${_id}`}>
                                    {title}
                                </Link>
                            </h4>
                            <span>
                                {translateDate(createdAt)}
                            </span>
                        </div>
                        <p className={style.noteText}>
                            {content ? sliceText(content) : 'no content'}
                        </p>
                    </div>
                    {/* باکس دلیت */}
                    <div onClick={() => {
                        deleteNote(_id)
                    }} className={style.deleteNote}>
                        <RiDeleteBinLine />
                    </div>
                </div>
            }
        </>
    )

}

export default NoteRow
