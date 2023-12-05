
import React, { useContext, useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import Input from '../Input/Input'
import DropDownInput from '../dropDownInput/dropDownInput'
import SubmitBtn from '../SubmitBtn'
import TextEditor from '../TextEditor/TextEditor'
import Overlay from '../OverLay/OverLay'
import { Link, useNavigate } from 'react-router-dom'



import style from './addTodo.module.css'
import axios from 'axios'
import { ContextNote, LoadingContext } from '../../context/context'

const AddTodo = () => {
    const [dataTodo, setDataTodo] = useState({
        title: '',
        note: null
    })
    // all notes in dropdown
    const [notes, setNotes] = useState([])
    // navigation
    const navigate = useNavigate()

    // context
    const { state, dispatch } = useContext(ContextNote)
    const { changeStatus } = useContext(LoadingContext)

    useEffect(() => {
        // get notes
        axios.get('/api/getallNotes').then(resp => {
            const notesArr = []
            resp.data.map(note => {
                notesArr.push({
                    label: note.title,
                    value: note._id
                })
            })
            // set state
            setNotes(notesArr)
        })
    }, [])

    // add todo 
    const submitedForm = (e) => {
        e.preventDefault()
        console.log(dataTodo)
        changeStatus()
        axios.post('/api/addTodo', dataTodo).then(resp => {
            // show Loading
            if (resp.status === 200) {
                dispatch({ type: 'ADD_TODO', data: resp.data })
                // hide loading
                navigate('/')
                changeStatus()

            }
        })
    }

    // change value title
    const changeTitle = (e) => {
        setDataTodo(prev => {
            return {
                ...prev,
                title: e.target.value
            }
        })
    }
    // select note from dropdown
    const selectNote = (type, value) => {
        setDataTodo(prev => {
            return {
                ...prev,
                note: value
            }
        })
    }


    return (
        <Overlay >
            <div className={style.addTodo}>
                <div className={style.header}>
                    <h3>
                        Add todo :
                    </h3>
                    <Link to='..' relative="path" className={style.closeWindow}> <IoClose /> </Link>

                </div>
                <div className={style.formData}>
                    <form onSubmit={submitedForm} className={style.form}>
                        <Input type='text' change={changeTitle} value={dataTodo.title} label='Title (requier) :' htmlFor='title' />
                        <DropDownInput type='Notes' changeValue={selectNote} labelInput='Select Note :' value={notes} />
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
