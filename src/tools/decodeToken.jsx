import { jwtDecode } from "jwt-decode"

export const decode = (token) => {
    return token ? jwtDecode(token).user  : ''
}