import React from 'react'
// ایمپورت کردن پروفایل در صورتی که پروفایل نداشته باشه


import profilePhoto from './../../picture/profile.jpg'


// استایل
import style from './profile.module.css'
const userName = 'mehrdad'

const Profile = () => {
    return (
        <div className={style.profile}>
            {/* عکس پروفایل */}
            <div className={style.photoProfile}>
                <img src={profilePhoto} alt="profile" />
            </div>
            {/* یوزر نیم  */}
            <div className={style.userName}>
                <p>Hello</p>
                <p> {userName} !</p>
            </div>
        </div>

    )
}

export default Profile
