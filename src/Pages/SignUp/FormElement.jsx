import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import { BiLogIn } from 'react-icons/bi'
import { BiSolidUser } from 'react-icons/bi'
import style from './loginAndRegister.module.css'
import SubmitBtn from '../../components/SubmitBtn'
import RegisterGoogle from '../../components/registerGoogle'
import { FaCheck } from 'react-icons/fa'
import { MdOutlineAddAPhoto } from 'react-icons/md'
import profile from './../../picture/userProfile.png'
import { Link } from 'react-router-dom'

const FormElemet = ({ profileUser , inputs, type, valueInputs, changeValue, submited, error }) => {
    const [checkBox, setCheckBox] = useState(false)



    const checkError = () => {
        let checkValue = false

        for (const key in valueInputs) {
            if (key === 'profileusername') {
                checkValue = false
            } else {


                if (valueInputs[key] === '') {
                    checkValue = true
                    break
                }
                else {
                    checkValue = false
                }
            }
        }

        let checkErrors = false
        for (const key in error) {
            if (key === 'profileUser') {
                checkErrors = false
            }
            else {
                if (error[key] !== '') {
                    checkErrors = true
                    break
                }
                else {
                    checkErrors = false
                }
            }
        }


        return checkErrors || checkValue ? true : false
    }
    return (

        <div className={style.parentForm}>
            <form onSubmit={submited} >
                {type === 'signup' &&
                    <div className={style.photoProfile}>
                        <img src={profileUser !== '' ? profileUser : profile} alt="add Photo" />

                        <label htmlFor='profileUser' className={style.iconAddPhoto}>
                            <MdOutlineAddAPhoto />

                        </label>
                        <input type="file" onChange={changeValue} name="profileUser" id="profileUser" accept="image/png, image/gif, image/jpeg" />
                    </div>}
                {/* inputs */}
                <div className={style.inputs}>
                    {inputs.map((input, index) => {
                        return (
                            <Input error={error[input.name]} key={index} change={changeValue} value={valueInputs[input.name]} name={input.name} type={input.name} label={input.label} />
                        )
                    })}
                </div>

                {/* remember me */}
                <div className={style.forgetAndRememeber}>
                    <div className={style.rememberMe}>
                        <input value={checkBox} onChange={() => {
                            setCheckBox((prev) => (!prev))
                        }} type="checkbox" id='remember' name='remember' />
                        <label htmlFor="remember">{checkBox &&
                            <FaCheck />
                        }</label>
                        <span> Rememeber Me </span>
                    </div>
                </div>









                {/* btn submit */}
                <div className={style.btnSubmit}>
                    <SubmitBtn disabled={checkError()}>
                        {type === 'signup' ?
                            <>
                                <BiSolidUser />
                                Sign up
                            </>
                            :
                            <>
                                <BiLogIn />
                                Login
                            </>
                        }
                    </SubmitBtn>
                    {
                        type !== 'signup' && (
                            <Link to='/signup/forgetPassword'>
                                you forget Password  ?

                            </Link>)
                    }
                </div>
            </form>
        </div>
    )
}

export default FormElemet
