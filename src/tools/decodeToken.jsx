import { jwtDecode } from "jwt-decode"

export const compareToken = (token) => {
    const token = jwtDecode(token)
    const tokenInLocalStorage = localStorage.get('token')
    
}