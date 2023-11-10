import React from 'react'
import style from './overlay.module.css'
const Overlay = ({ children }) => {
    return (
        <div className={style.overlay}>
            {children}
        </div>
    )
}

export default Overlay
