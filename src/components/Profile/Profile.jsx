import React from 'react'
// ایمپورت کردن پروفایل در صورتی که پروفایل نداشته باشه
import profilePhoto from './../../picture/profile.jpg'
import { FaLongArrowAltLeft } from "react-icons/fa";

 const sliceText = (text) => {
    const maxLength = 10
    const truncatedText = text.length > maxLength ?
        text.slice(0, maxLength) + "..." : text;
    return truncatedText
}

// استایل
import style from './profile.module.css'
const userName = 'mehrdasasdsadsadasdasdd'

const Profile = ({ setOpenNav }) => {
    return (
        <div className={style.profile}>
            {/* عکس پروفایل */}
            <div className={style.photoProfile}>
                <img src={profilePhoto} alt="profile" />
            </div>
            {/* یوزر نیم  */}
            <div className={style.userName}>
                <p>Hello</p>
                <p> {sliceText(userName)} !</p>
            </div>
            <span onClick={setOpenNav} className={style.closeMenu}> x </span>
        </div>

    )
}

export default Profile
