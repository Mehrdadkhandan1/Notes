import React, { useContext, useEffect, useState } from 'react'
import style from './noteRow.module.css'
import { sliceText, translateDate } from '../../tools/functions'
const text = 'lorem ipsum dolor sit amet, consectetur adip temp tincidunt et dolore magna aliqu  sapien. Cum sociis natoque penatibus et justo  '
import { RiDeleteBinLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ContextNote, LoadingContext } from '../../context/context'
// _id, title, content, tags, createdAt 
const NoteRow = ({ note }) => {
    const { _id, title, content, tags, createdAt } = note
    const { changeStatus } = useContext(LoadingContext)
    const { state, dispatch } = useContext(ContextNote)

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
                        <div className={style.noteText}>
                            {content ? <p className={style.showTextNote} dangerouslySetInnerHTML={{ __html: sliceText(content) }} /> : 'no content'}


                        </div>
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
