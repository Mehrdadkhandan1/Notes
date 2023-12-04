import React, { useEffect, useState } from 'react'
import './dropDownInput.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();



const DropDownInput = ({ labelInput, isMulti, value, changeValue, type }) => {
    console.log(value)
    return (
        <div className='dropDownInput'>
            <label htmlFor="">
                {labelInput}
            </label>
            <Select
                onChange={(e) => {
                    if (isMulti) {
                        console.log('s')
                        const foldersId = []
                        e.map(id => foldersId.push(id.value))
                        changeValue(type, foldersId)
                    }
                    else {
                        changeValue(type, e.value)
                    }
                }}
                className="react-select-container"
                classNamePrefix="react-select"
                closeMenuOnSelect={true}
                components={animatedComponents}
                isMulti={isMulti ? true : false}
                options={value}
            />
        </div>
    )
}

export default DropDownInput
