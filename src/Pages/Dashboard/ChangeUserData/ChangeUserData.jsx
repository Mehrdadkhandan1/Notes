import React from 'react'
import Input from '../../../components/Input/Input'
import UploadProfile from '../../../components/uploadProfil/UploadProfile'
import style from './../dashboard.module.css'
import FormData from '../FormData'
const inputsForm = [
    { name: 'fullname', type: 'text', label: 'Full name' },
    { name: 'email', type: 'email', label: 'Email' }]

const dataKey = {
    fullname: '',
    email: '',
}

const submitForm = (e,data)=>{
    console.log(e)
    console.log(data)
}

const ChangeUserData = () => {
    return (
        <div className={style.informition}>
            <div className={style.profile}>
                <UploadProfile />
            </div>
            <FormData submitForm={submitForm} dataKey={dataKey} inputsForm={inputsForm} />
        </div>
    )
}

export default ChangeUserData
