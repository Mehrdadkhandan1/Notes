import React from 'react'
import style from './addNote.module.css'
import { IoClose } from 'react-icons/io5'
import Input from '../Input/Input'
import DropDownInput from '../dropDownInput/dropDownInput'
import TextEditor from '../TextEditor/TextEditor.jsx'
import SubmitBtn from '../SubmitBtn'
const AddNote = () => {
    return (
        <div className={style.addNote}>
            <div className={style.headerAddNote}>
                <h3>
                    Add Note :
                </h3>
                <span className={style.closeWindow}> <IoClose /> </span>
            </div>
            <div className={style.formData}>
                <form className={style.formAddNote}>
                    <Input label='Title (requier) :' htmlFor='title' />
                    <DropDownInput labelInput='Add Folder :' />
                    <DropDownInput labelInput='Add Tags :' />
                    <SubmitBtn> Add note </SubmitBtn>
                </form>
            </div>
        </div>
    )
}

export default AddNote
