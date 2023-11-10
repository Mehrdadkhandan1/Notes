import React, { useEffect, useState } from 'react'
import './dropDownInput.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
import { dataOption } from './data'
const options = [
    { value: `chocolate`, label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]












const DropDownInput = ({labelInput}) => {
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
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={option}
            />
        </div>
    )
}

export default DropDownInput
