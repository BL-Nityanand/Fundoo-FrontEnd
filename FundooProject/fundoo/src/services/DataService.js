import axios from "axios"

const headerConfig = {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}

export const getNotes =() =>{
    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', headerConfig)
    return response
}


// export const getNotes1 =() =>{
//     let signUp_response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', headerConfig)
//     return signUp_response
// }

export const addNote =(obj) =>{
    console.log(headerConfig)
    let signUp_response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',obj, headerConfig)
    return signUp_response
}

export const changeColorNotes=(obj)=>{
    console.log(obj)
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes',obj,headerConfig)
    return response
}

export const updateArchivedAPI=(obj)=>{
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',obj,headerConfig)
    return response
}

export const updateNotes=(obj)=>{
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes',obj,headerConfig)
    return response
}