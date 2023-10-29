import React from 'react'
// استایل
import style from './showNotes.module.css'

import Search from '../../components/Search/Search'
// ایکون ها
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { PiRowsLight } from 'react-icons/pi'
import { BiSortUp, BiSortDown } from 'react-icons/bi'
import { MdOutlinePostAdd } from 'react-icons/md'
import NotesBox from '../../components/NoteBox/NotesBox'
// 

const title = 'All Notes'

const ShowNotes = () => {
  return (
    <main className={style.showNotes}>
      {/* هدر  */}
      <header className={style.headerNotes}>
        {/* سرچ باکس */}
        <Search />

        {/* دکمه ها  */}
        <div className={style.actionBtn}>
          {/* نمایش به صورت باکسی یا ردیفی */}
          <div className={style.actionIcon}>
            {/* باکسی */}
            <HiOutlineSquares2X2 />
            {/* ردیفی */}
            {/* <PiRowsLight /> */}
          </div>

          {/* مرتب سازی بر اساس زمان قدیم به جدید یا جدید به قدیم */}
          <div className={style.actionIcon}>
            <BiSortDown />
            {/* <BiSortUp /> */}
          </div>


          {/* اضافه کردن نوت */}
          <div className={style.actionIcon}>
            {/* آیکون اضافه کردن نوت */}
            <MdOutlinePostAdd />

          </div>
        </div>
      </header>

        {/* اسم فولدر */}
        <h3>{title}</h3>
        <NotesBox />

    </main>
  )
}

export default ShowNotes
