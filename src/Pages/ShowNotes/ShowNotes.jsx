import React, { useContext, useEffect, useState } from 'react'
// استایل
import style from './showNotes.module.css'

import Search from '../../components/Search/Search'
// ایکون ها
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { PiRowsLight } from 'react-icons/pi'
import { BiSortUp, BiSortDown } from 'react-icons/bi'
import { MdOutlinePostAdd } from 'react-icons/md'
import NotesBox from '../../components/NoteBox/NotesBox'
import NotesRow from '../../components/NoteRow/NotesRow'
import { Link, useParams } from 'react-router-dom'
import { RiMenu2Line } from "react-icons/ri";

// وکتور 
import addNoteVector from './../../picture/addNote.svg'
import { ContextNote } from '../../context/context'
import axios from 'axios'



const ShowNotes = ({ setOpenNav }) => {
  const { state, dispatch } = useContext(ContextNote)
  const [showRow, setShowRow] = useState(false)
  const data = state.selectedFolder
  return (
    <main className={style.showNotes}>
      {/* هدر  */}
      <header className={style.headerNotes}>
        <div className={style.menuNav}>
          {/* toggle navbar */}
          <RiMenu2Line onClick={() => {
            setOpenNav()
          }} />

        </div>
        {/* سرچ باکس */}
        <Search />

        {/* دکمه ها  */}
        <div className={style.actionBtn}>
          {/* نمایش به صورت باکسی یا ردیفی */}
          <div onClick={() => {
            setShowRow(prev => !prev)
          }} className={style.actionIcon}>
            {/* باکسی */}
            {showRow ? <HiOutlineSquares2X2 /> : <PiRowsLight />}

          </div>

          {/* مرتب سازی بر اساس زمان قدیم به جدید یا جدید به قدیم */}
          <div className={style.actionIcon}>
            <BiSortDown />
            {/* <BiSortUp /> */}
          </div>


          {/* اضافه کردن نوت */}
          <div className={style.actionIcon}>
            {/* آیکون اضافه کردن نوت */}
            <Link to='addnote'>
              <MdOutlinePostAdd />
            </Link>
          </div>
        </div>
      </header>

      {/* اسم فولدر */}
      <h3>{data.title}</h3>

      {showRow ? <NotesRow data={data.notes} /> : <NotesBox data={data.notes} />}


      {!Object.keys(data).length && <div className={style.vectorAddNote}>
        <img src={addNoteVector} alt="Add note" />
        <p>You have no note, you can add with <MdOutlinePostAdd /> </p>
      </div>}
      {/*  */}
    </main>
  )
}

export default ShowNotes
