import React, { useState } from 'react'
import style from './dashboard.module.css'
import Overlay from '../../components/OverLay/OverLay'
import UploadProfile from '../../components/uploadProfil/UploadProfile'
import Input from '../../components/Input/Input'
import { validate } from '../../tools/validateForms'
import SubmitBtn from '../../components/SubmitBtn'
import { Link, Outlet } from 'react-router-dom'
const inputsForm = [
  { name: 'fullname', type: 'text', label: 'Full name' },
  { name: 'email', type: 'email', label: 'Email' }]

const dataKey = {
  fullname: '',
  email: '',
}


const Dashboard = () => {




  return (
    <Overlay>
      <div className={style.dashboard} >
        <nav>
          <ul>
            <li><Link to='informition'>Dashboard</Link></li>
            <li><Link  to='password'>Password</Link></li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </Overlay>
  )
}

export default Dashboard
