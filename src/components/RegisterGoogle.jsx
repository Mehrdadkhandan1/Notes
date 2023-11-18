import React from 'react'
import styled from 'styled-components'
import { FcGoogle } from "react-icons/fc";

const RegisterGoogle = () => {
    return (
        <BtnRegister>
            <button>
                <FcGoogle />
                with Google
            </button>
        </BtnRegister>

    )
}

export default RegisterGoogle

const BtnRegister = styled.div`
 margin-top: 0.25rem;
  button{
    font-weight: 700;
    background-color:#bebebe;
    border-radius: 0.25rem;
    font-size: 1rem;
    gap: 0.5rem;
    font-family: aleo;
    color:#1B1D1B ;
    display: flex;  
    justify-content: center;
    align-items: center;
    outline: 0;
    border: 0;
    padding:  0.5rem 1rem;}

`