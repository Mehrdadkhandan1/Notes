import React from 'react'
import style from './addNote.module.css'
import { IoClose } from 'react-icons/io5'
import Input from '../Input/Input'
import DropDownInput from '../dropDownInput/dropDownInput'
import SubmitBtn from '../SubmitBtn'
import TextEditor from '../TextEditor/TextEditor'
import Overlay from '../OverLay/OverLay'
import { Link } from 'react-router-dom'
const AddNote = () => {
    return (
        <Overlay>
            <div className={style.addNote}>
                <div className={style.headerAddNote}>
                    <h3>
                        Add Note :
                    </h3>
                    <Link to='/' className={style.closeWindow}> <IoClose /> </Link>
                </div>
                <div className={style.formData}>
                    <form className={style.formAddNote}>
                        <Input label='Title (requier) :' htmlFor='title' />
                        <DropDownInput isMulti labelInput='Add Folder :' />
                        <DropDownInput isMulti labelInput='Add Tags :' />
                        <div className={style.btnAdd}>
                            <SubmitBtn> Add note </SubmitBtn>
                        </div>
                    </form>
                </div>
            </div>
        </Overlay>
    )
}

export default AddNote
