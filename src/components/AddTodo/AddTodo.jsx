
import React from 'react'
import { IoClose } from 'react-icons/io5'
import Input from '../Input/Input'
import DropDownInput from '../dropDownInput/dropDownInput'
import SubmitBtn from '../SubmitBtn'
import TextEditor from '../TextEditor/TextEditor'
import Overlay from '../OverLay/OverLay'
import { Link } from 'react-router-dom'



import style from './addTodo.module.css'
const AddTodo = () => {

    return (
        <Overlay >
            <div className={style.addNote}>
                <div className={style.headerAddNote}>
                    <h3>
                        Add todo :
                    </h3>
                    <Link to='..' relative="path" className={style.closeWindow}> <IoClose /> </Link>

                </div>
                <div className={style.formData}>
                    <form className={style.formAddNote}>
                        <Input label='Title (requier) :' htmlFor='title' />
                        <DropDownInput labelInput='Add Note :' />
                        <div className={style.btnAdd}>
                            <SubmitBtn> Add todo </SubmitBtn>
                        </div>
                    </form>
                </div>
            </div>
        </Overlay>
    )
}

export default AddTodo
