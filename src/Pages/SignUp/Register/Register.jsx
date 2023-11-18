import React, { useState } from 'react'
import style from '../loginAndRegister.module.css'
import FormElemet from '../FormElement'
// inputs data
const inputs = [{ name: 'userName', type: 'text', label: 'User name' },
{ name: 'password', type: 'password', label: 'Password' },
{ name: 'email', type: 'email', label: 'Email' }]
const Register = () => {
    return (
        <div className={style.register}>
            <header>
                <h3> Sign up </h3>
            </header>
            <FormElemet inputs={inputs} type='signup' />
        </div>
    )
}

export default Register
