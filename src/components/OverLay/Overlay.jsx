import React from 'react'
import './overlay.css'
import { useNavigate } from 'react-router-dom'
const Overlay = ({ children }) => {
    const navigate = useNavigate()
    return (
        <div onClick={(e) => {
            if (e.target.className === 'overlay') {
                navigate('..', { relative: true })
            }
            console.log('object')
        }} className='overlay'>
            {children}
        </div>
    )
}

export default Overlay
