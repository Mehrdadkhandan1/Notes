import React, { useEffect, useState } from 'react'
import './dropDownInput.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
import { dataOption } from './data'



const DropDownInput = ({ labelInput,isMulti }) => {
    const [option, setOption] = useState([])
    useEffect(() => {
        const opt = []
        dataOption.map(option => {
            opt.push({ value: option.id, label: option.nameFolder })
        })
        setOption(opt)
    }, [])



    return (
        <div className='dropDownInput'>
            <label htmlFor="">
                {labelInput}
            </label>
            <Select
                onChange={(e) => {
                    console.log(e)
                }}
                className="react-select-container"
                classNamePrefix="react-select"
                closeMenuOnSelect={true}
                components={animatedComponents}
                isMulti={isMulti ? true : false}
                options={option}
            />
        </div>
    )
}

export default DropDownInput
