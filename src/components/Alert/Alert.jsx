import React, { createContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



export const AlertContext = createContext()
export const AlertContextProvider = ({ children }) => {

    const showAlert = (type, message) => {
        console.log(type)
        
        toast[type](message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }
    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            <div>
                <ToastContainer />
            </div>
        </AlertContext.Provider>
    )
}


