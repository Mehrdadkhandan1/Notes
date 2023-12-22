import React, { useEffect, useState } from 'react'

const useLocalStorage = (key) => {
    const [value, setValue] = useState(() => {
        const getLocalStorageValue = localStorage.getItem(key);
        return getLocalStorageValue ? JSON.parse(getLocalStorageValue) : '';
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value])
    return [value, setValue]
}
export  { useLocalStorage }
