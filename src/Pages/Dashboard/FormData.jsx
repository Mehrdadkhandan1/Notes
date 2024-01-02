import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import style from './dashboard.module.css'
import SubmitBtn from '../../components/SubmitBtn'
import { validate } from '../../tools/validateForms'
const FormData = ({ dataKey, inputsForm,submitForm }) => {
    const [formData, setFormData] = useState(dataKey)
    const [error, setError] = useState(dataKey)


    const checkError = () => {
        let checkValue = false

        for (const key in formData) {
            if (formData[key] === '') {
                checkValue = true
                break
            }
            else {
                checkValue = false
            }
        }

        let checkErrors = false
        for (const key in error) {

            if (error[key] !== '') {
                checkErrors = true
                break
            }
            else {
                checkErrors = false
            }
        }


        return checkErrors || checkValue ? true : false
    }
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


    return (
        <form onSubmit={(e)=>{
            submitForm(e,formData)
        }}>
            <div className={style.formDashboard}>
                {inputsForm.map((input, index) => {
                    
                    return (
                        <Input error={error[input.name]} key={index} change={changeValue} value={formData[input.name]} name={input.name} type={input.type} label={input.label} />
                    )

                })}
                <div className={style.submitBtn}>
                    <SubmitBtn disabled={checkError()} >
                        Submit
                    </SubmitBtn>
                </div>
            </div>
        </form>
    )
}

export default FormData
