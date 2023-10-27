import React from 'react'

// آیکون فولدر



// استایل 
import style from './folderTags.module.css'
const Folders_tags = ({ title, icon }) => {
    const nameFolders = ['learn', 'notes', 'notes OK']
    return (
        <div className={style.foldersTags}>
            {/* فولدر + ایکون ادد */}
            <div className={style.titleAndAdd}>
                <p> {title} </p>
                <span>+</span>
            </div>
            {/* لیست فولدر ها */}
            <div className={`${style.listItems}`}>
                <ul>

                    {nameFolders.map(folder => {
                        // کلاس اکتیو داره برای تغیر استایل 
                        return <li>
                            {/* آیکون فولدر */}
                            {icon}
                            <span>{folder}</span>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}


export default Folders_tags
