import React from 'react'

const UploadProfile = () => {
    const picture = useRef()

    const changeValue = (e) => {

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
    const sendPicture = (token) => {
        // create form data
        let form = new FormData()
        // set token 
        form.append('token', token)
        // set picture
        form.append('file', picture.current)

        axios.post('/api/uploadImage', form).then(resp => {
            console.log(resp)
        })
    }

    return (
        <div>
            <div className={style.photoProfile}>
                <img src={profileUser !== '' ? profileUser : profile} alt="add Photo" />

                <label htmlFor='profileUser' className={style.iconAddPhoto}>
                    <MdOutlineAddAPhoto />

                </label>
                <input type="file" onChange={changeValue} name="profileUser" id="profileUser" accept="image/png, image/gif, image/jpeg" />
            </div>
        </div>
    )
}

export default UploadProfile
