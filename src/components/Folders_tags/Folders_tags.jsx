import React from 'react'

// آیکون فولدر



// استایل 
import style from './folderTags.module.css'
import { Link } from 'react-router-dom'
const Folders_tags = ({ title, icon, data }) => {
    return (
        <div className={style.foldersTags}>
            {/* فولدر + ایکون ادد */}
            <div className={style.titleAndAdd}>
                <p> {title} </p>
                <Link to={title === 'folders' ? 'addfolder' : 'addtag'}>+</Link>
            </div>
            {/* لیست فولدر ها */}
            <div className={`${style.listItems}`}>
                <ul>

                    {data && data.map(({ _id, title }) => {
                        // کلاس اکتیو داره برای تغیر استایل 
                        return <li key={_id}>
                            {/* آیکون فولدر */}
                            {icon}
                            <Link to={`/${_id}`}>
                                {title }
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}


export default Folders_tags
