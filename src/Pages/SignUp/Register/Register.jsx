import React, { useContext, useRef, useState } from 'react'
import style from '../loginAndRegister.module.css'
import FormElemet from '../FormElement'
import { validate } from '../../../tools/validateForms'
import { render } from 'react-dom'
import axios from 'axios'
import { LoadingContext } from '../../../context/context'
import { AlertContext } from '../../../components/Alert/Alert'
import { useNavigate } from 'react-router-dom'
// inputs data
const inputs = [{ name: 'fullname', type: 'text', label: 'Full name' },
{ name: 'password', type: 'password', label: 'Password' },
{ name: 'email', type: 'email', label: 'Email' }]
const dataKey = {
    fullname: '',
    password: '',
    email: '',
}



const Register = () => {
    const [formData, setFormData] = useState(dataKey)
    const [error, setError] = useState(dataKey)
    // context loading

    const { changeStatus } = useContext(LoadingContext)
    // context alert 
    const { showAlert } = useContext(AlertContext)
    // change route
    const navigate = useNavigate()

    // change value inputs
    const changeValue = (e) => {
        

        // check value
        // validate value = object { value , error }
        const validateData = validate(e.target.value, e.target.name)
        // set errors
        setError((prev) => {
            return {
                ...prev,
                [e.target.name]: validateData.error
            }
        })

        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: validateData.value
            }
        })
    }




    const registerUser = (e) => {
        e.preventDefault()
        // show loading
        changeStatus()
        // requst server

        axios.post('/api/register', {
            fullname: formData.fullname,
            password: formData.password,
            email: formData.email
        }).then(resp => {
            // check status code
            if (resp.status === 201) {
                // stop loading
                changeStatus()
                sendPicture(resp.data.data)
                showAlert('success', resp.data.message)
                console.log(resp)
                navigate('/signup/login')
            }
        }).catch(err => {
            // stop loading
            console.log(err)
            showAlert('error', err)
            changeStatus()
        })
    }

    const sendPicture = (token) => {
        // create form data
        let form = new FormData()
        // set token 
        form.append('token', token)
        // set picture
        form.append('file', picture.current)

        axios.post('/api/uploadImage', form).then(resp => {
            console.log(resp)
        })
    }


    return (
        <div className={style.register}>
            <header>
                <h3> Sign up </h3>
            </header>
            <FormElemet  error={error} valueInputs={formData} changeValue={changeValue} submited={registerUser} inputs={inputs} type='signup' />
        </div>
    )
}

export default Register
