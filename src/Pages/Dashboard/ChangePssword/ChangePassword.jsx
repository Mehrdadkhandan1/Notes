import React, { useContext } from 'react'
import style from './../dashboard.module.css'
import FormData from '../FormData'
import { AlertContext } from '../../../components/Alert/Alert'
import axios from 'axios'
import { decode } from '../../../tools/decodeToken'
const inputsForm = [
    { name: 'newPassword', type: 'password', label: 'New Password' },
    { name: 'confirmPassword', type: 'password', label: 'Confirm New Password' }

]

const dataKey = {
    newPassword: '',
    confirmPassword: '',
}



const ChangePassword = () => {
    const { showAlert } = useContext(AlertContext)
    const submitForm = (e, data) => {
        e.preventDefault()
        if (data.newPassword !== data.confirmPassword) {
            showAlert('error', 'Passwords do not match')
        } else {
            const email = decode(JSON.parse(localStorage.getItem('token'))).email
            const oldPassword = decode(JSON.parse(localStorage.getItem('token'))).password
            console.log(oldPassword)
            axios.post('/api/change-password', {
                email: email,
                oldPasswordL: '',
                newPassword: data.newPassword
            }).then(resp => {
                console.log(resp)
            })
        }
    }


    return (
        <div className={style}>
            <FormData submitForm={submitForm} dataKey={dataKey} inputsForm={inputsForm} />
        </div>
    )
}

export default ChangePassword
