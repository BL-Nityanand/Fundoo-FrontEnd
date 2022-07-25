import axios from 'axios'

export const login = (login) =>{
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',login)
    return response
}


export const signUp = (signUp) =>{
    console.log(signUp)
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',signUp)
    return response
}