import React, { useEffect, useState } from 'react'
// ایمپورت کردن پروفایل در صورتی که پروفایل نداشته باشه
import profilePhoto from './../../picture/profile.jpg'



// استایل
import style from './profile.module.css'
import { sliceText } from '../../tools/functions'
import { decode } from '../../tools/decodeToken'
const userName = 'mehrdasasdsadsadasdasdd'

const Profile = ({ setOpenNav }) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(JSON.parse(token))
        const user = decode(token)
        console.log(user)
        setUser(user)
    }, [])
    return (
        <>
            {Object.keys(user).length &&
                <div className={style.profile}>
                    {/* عکس پروفایل */}
                    <div className={style.photoProfile}>
                        <img src={user.profile} alt="profile" />
                    </div>
                    {/* یوزر نیم  */}
                    <div className={style.userName}>
                        <p>Hello</p>
                        <p> {sliceText(user.fullname, 12)} !</p>
                    </div>
                    <span onClick={setOpenNav} className={style.closeMenu}> x </span>
                </div>}
        </>
    )
}

export default Profile
