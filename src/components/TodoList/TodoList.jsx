import React, { useContext } from 'react'
import style from './todoList.module.css'
import Todo from './Todo'
import { Link } from 'react-router-dom'
import notFoundImage from './../../picture/notFound.svg'
import { ContextNote } from '../../context/context'
const iconAddTodo = <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7349 3.53021H3.38553C2.75285 3.53021 2.14608 3.78154 1.69871 4.22892C1.25133 4.67629 1 5.28306 1 5.91574V22.6144C1 23.2471 1.25133 23.8539 1.69871 24.3013C2.14608 24.7486 2.75285 25 3.38553 25H20.0842C20.7169 25 21.3237 24.7486 21.7711 24.3013C22.2184 23.8539 22.4698 23.2471 22.4698 22.6144V14.2651" stroke="#BEBEBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.6806 1.74109C21.1552 1.26658 21.7987 1 22.4698 1C23.1409 1 23.7844 1.26658 24.2589 1.74109C24.7335 2.2156 25 2.85918 25 3.53024C25 4.2013 24.7335 4.84487 24.2589 5.31938L12.9277 16.6506L8.15662 17.8434L9.34938 13.0724L20.6806 1.74109Z" stroke="#BEBEBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const TodoList = () => {
    const { state, dispatch } = useContext(ContextNote)
    const { todos } = state
    console.log(todos)
    return (
        <div className={style.todoList} >
            {/* هدر تودو لیست و آیکون ادد تودو */}
            <div className={style.headerTodo}>
                <div className={style.iconTodo}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.204 21.4286C2.99156 21.4286 2.78782 21.3383 2.6376 21.1775C2.48739 21.0168 2.403 20.7988 2.403 20.5714V3.42857C2.403 3.20124 2.48739 2.98323 2.6376 2.82248C2.78782 2.66173 2.99156 2.57143 3.204 2.57143H18.0225C18.3411 2.57143 18.6467 2.43597 18.8721 2.19485C19.0974 1.95373 19.224 1.62671 19.224 1.28571C19.224 0.944722 19.0974 0.617695 18.8721 0.376577C18.6467 0.135459 18.3411 5.08119e-09 18.0225 0H3.204C2.35424 0 1.53929 0.361223 0.938429 1.00421C0.337563 1.64719 0 2.51926 0 3.42857V20.5714C0 21.4807 0.337563 22.3528 0.938429 22.9958C1.53929 23.6388 2.35424 24 3.204 24H19.224C20.0737 24 20.8887 23.6388 21.4895 22.9958C22.0904 22.3528 22.428 21.4807 22.428 20.5714V15C22.428 14.659 22.3014 14.332 22.0761 14.0909C21.8507 13.8497 21.5451 13.7143 21.2265 13.7143C20.9078 13.7143 20.6022 13.8497 20.3769 14.0909C20.1516 14.332 20.025 14.659 20.025 15V20.5714C20.025 20.7988 19.9406 21.0168 19.7904 21.1775C19.6402 21.3383 19.4364 21.4286 19.224 21.4286H3.204ZM23.6775 6.30857C23.8898 6.06484 24.0053 5.74248 23.9998 5.40939C23.9943 5.0763 23.8682 4.7585 23.6481 4.52293C23.428 4.28737 23.131 4.15243 22.8197 4.14656C22.5084 4.14068 22.2072 4.26432 21.9794 4.49143L13.0755 14.0177L10.075 10.6989C9.96549 10.5764 9.83449 10.4784 9.68948 10.4104C9.54448 10.3423 9.38834 10.3056 9.23003 10.3023C9.07173 10.2991 8.91438 10.3293 8.76704 10.3914C8.6197 10.4534 8.48527 10.546 8.37148 10.6638C8.25768 10.7816 8.16678 10.9223 8.10398 11.0779C8.04118 11.2334 8.00772 11.4007 8.00554 11.5701C8.00336 11.7395 8.0325 11.9077 8.09127 12.0651C8.15004 12.2224 8.23729 12.3657 8.34801 12.4869L12.1976 16.7451C12.3084 16.8681 12.4409 16.9662 12.5875 17.0337C12.7341 17.1012 12.8917 17.1368 13.0513 17.1384C13.2109 17.14 13.3692 17.1076 13.5169 17.043C13.6646 16.9784 13.7989 16.883 13.9118 16.7623L23.6775 6.30857Z" />
                    </svg>
                    <h4>Todo List</h4>
                </div>

                <Link to='addtodo' className={style.editBtn}>
                    {/* آیکون ادد تودو */}
                    {iconAddTodo}
                </Link>
            </div>
            <div className={style.todos}>
                {todos.map(todo => {
                    return <Todo data={todo} key={todo._id} />
                })}
            </div>
            {!todos.length &&

                <div className={style.notFound}>
                    <img src={notFoundImage} alt="notFound" />
                    <p>You have no todo, you can add with {iconAddTodo}.</p>
                </div>}

        </div>
    )
}

export default TodoList