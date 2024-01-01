import React from 'react'
import style from './../dashboard.module.css'
import FormData from '../FormData'
const inputsForm = [
    { name: 'password', type: 'password', label: 'Password' },
    { name: 'newPassword', type: 'password', label: 'New Password' }]

const dataKey = {
    password: '',
    newPassword: '',
}

const submitForm = (e) => {
    e.preventDefault()
    console.log('submit form')
}

const ChangePassword = () => {
    return (
        <div className={style}>
            <FormData submitForm={submitForm} dataKey={dataKey} inputsForm={inputsForm} />
        </div>
    )
}

export default ChangePassword
