import React, { useState } from 'react'
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
import { Link } from 'react-router-dom'
// 

const title = 'All Notes'

const ShowNotes = () => {
  const [showRow, setShowRow] = useState(false)
  return (
    <main className={style.showNotes}>
      {/* هدر  */}
      <header className={style.headerNotes}>
        {/* سرچ باکس */}
        <Search />

        {/* دکمه ها  */}
        <div className={style.actionBtn}>
          {/* نمایش به صورت باکسی یا ردیفی */}
          <div onClick={()=>{
            setShowRow(prev=>!prev)
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
      <h3>{title}</h3>
      {showRow ? <NotesRow /> : <NotesBox />}

      {/*  */}
    </main>
  )
}

export default ShowNotes
