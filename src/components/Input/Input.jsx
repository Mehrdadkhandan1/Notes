import React from 'react'
import style from './Input.module.css'
const Input = ({ label, value, name, type }) => {
    return (
        <div className={style.inputParent}>
            <label htmlFor={name}>
                {label}
            </label>
            <div className={style.input}>
                <input placeholder='Enter Here ...' type={type} id={name} name={name} />
            </div>
        </div>
    )
}

export default Input
