import React from 'react'
import style from './Input.module.css'
const Input = ({ label, value, name, change, type, error }) => {
    return (
        <div className={style.inputParent}>
            <label htmlFor={name}>
                {label}
            </label>
            <div className={style.input}>
                <input value={value} onChange={(e) => { change(e) }} placeholder='Enter Here ...' type={type} id={name} name={name} />
            </div>
            {error &&
                <span className={style.errorMessage}>
                    {error}
                </span>
            }
        </div>
    )
}

export default Input
