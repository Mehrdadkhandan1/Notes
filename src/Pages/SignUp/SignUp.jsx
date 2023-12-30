import React, { useEffect } from 'react'
import style from './signUp.module.css'
import { BiLogIn, BiSolidUser } from 'react-icons/bi'
import { Link, Outlet, } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
const SignUp = () => {
    const [check] = useAuth(JSON.parse(localStorage.getItem('token')))
    useEffect(() => {
        console.log(check)
    }, [])
    return (
        <div className={style.signInPage}>
            <div className={style.logoAndRoutes}>
                <div className={style.logo}>
                    <h2>
                        TO<span>NO</span>
                    </h2>
                    <h3>Order <span>In</span> Live</h3>
                </div>
                <div className={style.changeRoute}>
                    <Link className={style.signup} to='register'>
                        <BiSolidUser />
                        Sign Up
                    </Link>
                    <Link className={style.login} to="login">
                        <BiLogIn />
                        Login
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default SignUp
