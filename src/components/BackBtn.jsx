import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import styled from 'styled-components'

const BackBtn = () => {
    return (
        <BackBtnDiv >
            <BiArrowBack /> <span>Back</span>
        </BackBtnDiv>
    )
}

export default BackBtn

const BackBtnDiv = styled.div`
    display: flex;
    align-items: center;
    color: #bebebe;
    font-size: 1rem;
    gap: 0.25rem;
`