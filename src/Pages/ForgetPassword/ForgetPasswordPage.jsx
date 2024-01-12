import React, { useState } from 'react'
import style from './forgetPassword.module.css'
import Input from '../../components/Input/Input'
import SubmitBtn from '../../components/SubmitBtn'
import { validate } from '../../tools/validateForms'
import axios from 'axios'
const ForgetPasswordPage = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const changeValue = (e) => {
        const validateEmail = validate(e.target.value, e.target.name)
        console.log(validateEmail.error)

        setError(validateEmail.error)
        setEmail(e.target.value)
    }


    const sendEmail = (e) => {
        e.preventDefault()
        axios.post('/api/send-reset-password', {
            email: email
        }).then(resp=>{
            console.log(resp)
        })
    }
    console.log(error)
    return (
        <div className={style.fogetPass}>
            <h3> forget Password </h3>
            <div className={style.formData}>
                <form onSubmit={sendEmail}>
                    <Input name='email' value={email} change={changeValue} label='Enter your email : ' type='email' />
                    <SubmitBtn disabled={(error || email === '') ? true : false}> Send Email </SubmitBtn>
                </form>
            </div>
        </div>
    )
}

export default ForgetPasswordPage
