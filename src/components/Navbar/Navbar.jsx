import React from 'react'
import style from './Navbar.module.css'
import Profile from '../Profile/Profile'
import Folders_tags from '../Folders_tags/Folders_tags'
import {FaTags} from 'react-icons/fa6'
const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <Profile />
            <Folders_tags title='Folders' icon={<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2.75C16 2.28587 15.8033 1.84075 15.4533 1.51257C15.1032 1.18438 14.6284 1 14.1333 1H6.80367C6.64583 1.00048 6.49141 0.956969 6.36 0.875003L5.43333 0.294066C5.12648 0.101695 4.76548 -0.000673923 4.39633 3.3389e-06H1.86667C1.3716 3.3389e-06 0.896802 0.184378 0.546734 0.512566C0.196666 0.840755 0 1.28587 0 1.75V3.25C0 3.31631 0.0280951 3.3799 0.0781049 3.42678C0.128115 3.47366 0.195942 3.5 0.266667 3.5H15.7333C15.8041 3.5 15.8719 3.47366 15.9219 3.42678C15.9719 3.3799 16 3.31631 16 3.25V2.75ZM0 10.25C0 10.7141 0.196666 11.1592 0.546734 11.4874C0.896802 11.8156 1.3716 12 1.86667 12H14.1333C14.6284 12 15.1032 11.8156 15.4533 11.4874C15.8033 11.1592 16 10.7141 16 10.25V4.75C16 4.6837 15.9719 4.62011 15.9219 4.57323C15.8719 4.52634 15.8041 4.5 15.7333 4.5H0.266667C0.195942 4.5 0.128115 4.52634 0.0781049 4.57323C0.0280951 4.62011 0 4.6837 0 4.75V10.25Z" fill-opacity="0.9" /></svg>} />
            <Folders_tags title='Tags' icon ={<FaTags />} />
        </nav>
    )
}

export default Navbar
