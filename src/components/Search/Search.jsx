import React, { useEffect, useState } from 'react'
import style from './Search.module.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import axios from 'axios'
import { sliceText } from '../../tools/functions'
import { Link } from 'react-router-dom'
const Search = () => {
    const [valueSearch, setValueSearch] = useState('')
    const [data, setData] = useState([])


    useEffect(() => {

        const contoroller = new AbortController()
        const fetchD = async () => {
            axios.get(`/api/searchNote/${valueSearch}`, { signal: contoroller.signal }).then(resp => {
                console.log(resp.data.data)
                setData(resp.data.data)
            }).catch(err => {
                setData([])

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

            {
                valueSearch &&
                <>
                    <div className={style.resultSeatch}>
                        <div className={style.resultItem}>
                            {data.length ? data.map(res => {
                                return (
                                    <div className={style.itemsResult}>
                                        <h5 className={style.titleSearchResult}>
                                            <Link to={`/showNote/${res._id}`}> {res.title} </Link>
                                        </h5>

                                        <div className={style.contentResult}>
                                            {
                                                res.content ?
                                                    <p dangerouslySetInnerHTML={{ __html: sliceText(res.content, 30) }} />
                                                    :
                                                    <p>
                                                        no Content
                                                    </p>
                                            }
                                        </div>
                                    </div>
                                )
                            }) : <p className={style.noResult}>
                                No results
                            </p>}
                        </div>
                    </div>

                </>
            }
        </div>
    )
}

export default Search
