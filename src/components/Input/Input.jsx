import React from 'react'
import style from './Input.module.css'
const Input = ({ label, value, htmlFor }) => {
    return (
        <div className={style.inputParent}>
            <label htmlFor={htmlFor}>
                {label}
            </label>
            <div className={style.input}>
                <input placeholder='Enter Here ...' type="text" id={htmlFor} />
            </div>
        </div>
    )
}

export default Input
