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

const FormElemet = ({ inputs, type }) => {
    const [checkBox, setCheckBox] = useState(false)

    return (

        <div className={style.parentForm}>
            <form >
                {type === 'signup' &&
                    <div className={style.photoProfile}>
                        <img src={profile} alt="add Photo" />
                        <label htmlFor='profileUser' className={style.iconAddPhoto}>
                            <MdOutlineAddAPhoto />
                        </label>
                        <input type="file" name="profileUser" id="profileUser" accept="image/png, image/gif, image/jpeg" />
                    </div>}
                {/* inputs */}
                <div className={style.inputs}>
                    {inputs.map(input => {
                        return (
                            <Input name={input.name} type={input.name} label={input.label} />
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
                    <SubmitBtn>
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
                    <RegisterGoogle />
                </div>
            </form>
        </div>
    )
}

export default FormElemet
