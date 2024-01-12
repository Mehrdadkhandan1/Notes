import React, { useEffect, useState } from 'react'
import style from './Search.module.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import axios from 'axios'
const Search = () => {
    const [valueSearch, setValueSearch] = useState('')
    const [data, setData] = useState([])


    useEffect(() => {

        const contoroller = new AbortController()
        const fetchD = async () => {
            axios.get(`/api/searchNote/${valueSearch}`, { signal: contoroller.signal }).then(resp => {
                setData(resp.data.data)
            }).catch(err => {
                console.log(err)
            })
        }
        fetchD()

        return () => {
            contoroller.abort()
        }

    }, [valueSearch])

    // set value 
    const searchContent = (e) => {
        setValueSearch(e.target.value)
    }
    return (
        <div className={style.search}>
            <label htmlFor="search-input">
                <BiSearchAlt2 />
            </label>
            <input value={valueSearch} onChange={searchContent} placeholder='Search Notes...' type="search" name="search" id="search-input" />
            <div className={style.resultSeatch}>
                <div className={style.resultItem}>
                    
                </div>
            </div>
        </div>
    )
}

export default Search
