import axios from 'axios'

export const login = (signinObj) => {
    let response = axios.post(" https://bookstore.incubation.bridgelabz.com/bookstore_user/login", signinObj)
    console.log("login successfully")
    return response
}

export const register = (registerObj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration", registerObj)
    console.log("created successfully")
    return response
}