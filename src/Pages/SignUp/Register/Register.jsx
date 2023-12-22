import React, { useContext, useState } from 'react'
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
    const [profileUser, setProfile] = useState('')
    const [error, setError] = useState(dataKey)
    // context loading

    const { changeStatus } = useContext(LoadingContext)
    // context alert 
    const { showAlert } = useContext(AlertContext)

    const navigate = useNavigate()

    const changeValue = (e) => {
        // check input type 
        if (e.target.name === 'profileUser') {
            // get file
            const file = e.target.files[0]
            if (file) {
                const render = new FileReader()
                // render file
                render.onloadend = () => {
                    // get url file
                    const imageUrl = render.result
                    // set state 
                    setProfile(imageUrl)


                }
                render.readAsDataURL(file)
            }

        }



        else {
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

    }

    const registerUser = (e) => {
        e.preventDefault()
        // requst server
        changeStatus()
        axios.post('/api/register', {
            fullname: formData.fullname,
            password: formData.password,
            email: formData.email
        }).then(resp => {
            // show loading
            // check status code
            if (resp.status === 201) {
                // stop loading
                changeStatus()

                showAlert('success', resp.data.message)
                console.log(resp)
                navigate('/signup/login')
            }
        }).catch(err => {
            // stop loading
            changeStatus()
            showAlert('error', err.response.data.message)
        })
    }
    return (
        <div className={style.register}>
            <header>
                <h3> Sign up </h3>
            </header>
            <FormElemet profileUser={profileUser} error={error} valueInputs={formData} changeValue={changeValue} submited={registerUser} inputs={inputs} type='signup' />
        </div>
    )
}

export default Register
