import React, { useRef } from 'react'

const UploadProfile = () => {
    const [profileUser, setProfile] = useState('')

    const picture = useRef()

    const changeValue = () => {
        if (e.target.name === 'profileUser') {
            // save file for upload picture in server
            picture.current = e.target.files[0]
            // get file
            const file = e.target.files[0]
            if (file) {
                const render = new FileReader()
                // render file
                render.onloadend = () => {
                    // get url file
                    const imageUrl = render.result
                    // set state 
                    setProfile(imageUrl)


                }
                render.readAsDataURL(file)
            }

        }

    }
    return (
        <div className={style.photoProfile}>
            <img src={profileUser !== '' ? profileUser : profile} alt="add Photo" />

            <label htmlFor='profileUser' className={style.iconAddPhoto}>
                <MdOutlineAddAPhoto />
            </label>
            <input type="file" onChange={changeValue} name="profileUser" id="profileUser" accept="image/png, image/gif, image/jpeg" />
        </div>
    )
}

export default UploadProfile
