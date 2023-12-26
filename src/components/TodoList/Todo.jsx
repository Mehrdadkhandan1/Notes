import React, { useContext, useState } from 'react'

import style from './todoList.module.css'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ContextNote, LoadingContext } from '../../context/context'


const Todo = ({ data }) => {
    const { changeStatus } = useContext(LoadingContext)
    const { state, dispatch } = useContext(ContextNote)
    const [hasOpen, setHasOpen] = useState(false)
    const { _id, title,  noteId, isCompleted } = data
    // done todo 
    const doneTodo = () => {

        const check = !isCompleted
        // show loading 
        changeStatus()
        // send requset 
        axios.put(`/api/updateTodo/${_id}`,{
            ...data,
            isCompleted: check
        }).then(resp => {
            console.log(resp)
            const newData = {
                ...data,
                isCompleted: check
            }
            if (resp.status === 200) {
                // close Loading
                changeStatus()
                dispatch({ type: "UPDATE_TODO", data: newData  })
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    const editTodo = (id)=>{
        console.log(id)
    }

    const deleteTodo = () => {
        // show loading 
        changeStatus()
        axios.delete(`/api/deleteTodo/${_id}`).then(resp => {


            if (resp.status === 200) {
                dispatch({ type: "DELETE_TODO", data: _id })
                // stop Loading
                changeStatus()
            }

        })
    }


    return (
        <div onClick={(e) => {
            e.stopPropagation()
            setHasOpen(!hasOpen)
        }} className={style.todo}>



            <div className={style.todoBox}>
                <div className={style.doneSection} onClick={(e) => {
                    e.stopPropagation()
                    doneTodo()
                }}  >
                    {isCompleted &&
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.59509 14L0 7.36383L1.39877 5.70478L5.59509 10.6819L14.6012 0L16 1.65904L5.59509 14Z" fill="#BEBEBE" />
                        </svg>
                    }
                </div>
                <p>
                    {title}
                </p>
                {
                }
                {/* نمایش دکمه لینک */}
                {noteId ? <Link to={`/shownote/${noteId}`} className={style.linkBtn}>
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.67067 12.7596C8.76016 12.8487 8.83116 12.9547 8.87961 13.0713C8.92805 13.188 8.95299 13.313 8.95299 13.4393C8.95299 13.5657 8.92805 13.6907 8.87961 13.8074C8.83116 13.924 8.76016 14.03 8.67067 14.1191L8.19554 14.5941C7.29521 15.4943 6.0741 16 4.80084 16C3.52758 16 2.30646 15.4943 1.40613 14.5941C0.505801 13.694 0 12.4731 0 11.2001C0 9.92712 0.505801 8.70625 1.40613 7.8061L3.33545 5.87796C4.20051 5.01094 5.36442 4.50742 6.58876 4.47055C7.8131 4.43367 9.0052 4.86624 9.92089 5.67963C10.0154 5.76365 10.0925 5.86546 10.1477 5.97925C10.2029 6.09305 10.2351 6.21659 10.2425 6.34283C10.2499 6.46908 10.2324 6.59555 10.191 6.71502C10.1495 6.8345 10.0849 6.94464 10.0009 7.03916C9.91685 7.13368 9.81501 7.21073 9.7012 7.2659C9.58738 7.32107 9.46381 7.35329 9.33754 7.36072C9.21128 7.36814 9.08478 7.35063 8.96528 7.30918C8.84578 7.26773 8.73562 7.20315 8.64108 7.11913C8.09197 6.63156 7.37729 6.37218 6.64322 6.39403C5.90915 6.41588 5.21117 6.71732 4.69205 7.23669L2.76433 9.16243C2.22422 9.70243 1.92079 10.4348 1.92079 11.1985C1.92079 11.9622 2.22422 12.6946 2.76433 13.2346C3.30445 13.7746 4.037 14.078 4.80084 14.078C5.56467 14.078 6.29723 13.7746 6.83734 13.2346L7.31247 12.7596C7.40162 12.6704 7.50748 12.5996 7.624 12.5513C7.74053 12.503 7.86543 12.4781 7.99157 12.4781C8.11771 12.4781 8.24262 12.503 8.35914 12.5513C8.47567 12.5996 8.58153 12.6704 8.67067 12.7596ZM14.5962 1.40351C13.6951 0.504744 12.4743 0 11.2015 0C9.9287 0 8.70787 0.504744 7.8068 1.40351L7.33167 1.87855C7.15135 2.05883 7.05005 2.30335 7.05005 2.55831C7.05005 2.81327 7.15135 3.05779 7.33167 3.23808C7.51199 3.41836 7.75656 3.51964 8.01157 3.51964C8.26658 3.51964 8.51115 3.41836 8.69147 3.23808L9.1666 2.76304C9.70672 2.22304 10.4393 1.91966 11.2031 1.91966C11.9669 1.91966 12.6995 2.22304 13.2396 2.76304C13.7797 3.30305 14.0832 4.03545 14.0832 4.79914C14.0832 5.56282 13.7797 6.29523 13.2396 6.83523L11.3111 8.76417C10.7915 9.28332 10.0931 9.58432 9.35889 9.60558C8.62464 9.62684 7.91001 9.36675 7.36126 8.87853C7.26673 8.79451 7.15656 8.72993 7.03706 8.68848C6.91756 8.64703 6.79107 8.62952 6.6648 8.63694C6.53853 8.64437 6.41496 8.67659 6.30114 8.73176C6.18733 8.78693 6.0855 8.86398 6.00146 8.9585C5.91743 9.05302 5.85284 9.16316 5.81138 9.28264C5.76992 9.40211 5.75241 9.52858 5.75983 9.65483C5.76726 9.78107 5.79949 9.90462 5.85467 10.0184C5.90985 10.1322 5.98691 10.234 6.08145 10.318C6.9965 11.1312 8.18781 11.5641 9.41157 11.528C10.6353 11.4918 11.799 10.9895 12.6645 10.1237L14.5938 8.19556C15.4938 7.2949 15.9995 6.07397 16 4.80083C16.0005 3.5277 15.4956 2.30641 14.5962 1.40511V1.40351Z" fill="#BEBEBE" />
                    </svg>
                </Link> : ''}
            </div>
            {/*دلیت و ادیت  */}
            <div className={`${style.actionBtn} ${hasOpen ? style.hsaOpen : ''}`}>
                {/* دلیت */}
                <button onClick={(e) => {
                    e.stopPropagation()
                    deleteTodo()
                }} className={style.deleteTodo}> <RiDeleteBin7Line /> Remove </button>
                {/* ادیت */}

                <button onClick={(e) => {
                    e.stopPropagation()
                    editTodo(_id)
                }} className={style.editTodo} >
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2728 2.98294L13.0171 4.72637M12.3945 1.44704L7.67807 6.16344C7.43438 6.40679 7.26818 6.71684 7.20042 7.05451L6.76477 9.23524L8.9455 8.79876C9.28315 8.73123 9.5928 8.5657 9.83657 8.32193L14.553 3.60553C14.6947 3.4638 14.8071 3.29555 14.8838 3.11037C14.9605 2.92519 15 2.72672 15 2.52628C15 2.32585 14.9605 2.12738 14.8838 1.9422C14.8071 1.75702 14.6947 1.58877 14.553 1.44704C14.4112 1.30531 14.243 1.19288 14.0578 1.11618C13.8726 1.03948 13.6742 1 13.4737 1C13.2733 1 13.0748 1.03948 12.8896 1.11618C12.7045 1.19288 12.5362 1.30531 12.3945 1.44704Z" stroke="#BEBEBE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.3531 10.8823V13.3529C13.3531 13.7898 13.1795 14.2087 12.8706 14.5176C12.5618 14.8265 12.1428 15 11.706 15H2.64708C2.21024 15 1.7913 14.8265 1.48242 14.5176C1.17353 14.2087 1 13.7898 1 13.3529V4.29402C1 3.85719 1.17353 3.43825 1.48242 3.12936C1.7913 2.82047 2.21024 2.64694 2.64708 2.64694H5.11769" stroke="#BEBEBE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    Edit
                </button>
            </div>

        </div >
    )
}

export default Todo
