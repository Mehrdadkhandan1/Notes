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
                        const idItem = []
                        e.map(id => idItem.push(id.value))
                        changeValue(type, idItem)
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
