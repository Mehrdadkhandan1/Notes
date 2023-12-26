import React from 'react'
import style from './Search.module.css'
import { BiSearchAlt2 } from 'react-icons/bi'
const Search = () => {
    return (
        <div className={style.search}>
            
            <label htmlFor="search-input">
                <BiSearchAlt2 />
            </label>
            <input placeholder='Search Notes...' type="search" name="search" id="search-input" />
        </div>
    )
}

export default Search
