import React, { useState } from 'react'
import style from '../loginAndRegister.module.css'

import FormElemet from '../FormElement'
const inputs = [
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' }
]
const Login = () => {

    return (
        <div className={style.register}>
            <header>
                <h3> Log in </h3>
            </header>
           <FormElemet type="login" inputs={inputs}  />
        </div>
    )
}

export default Login
