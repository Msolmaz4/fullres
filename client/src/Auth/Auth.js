
import {createContext} from 'react'

import axios from 'axios'
export const  AuthContext = createContext()
export const UserProvider = ({children})=>{


    const register = (e,user)=>{
        console.log(register, user)
        e.preventDefault()
        axios.post('http://localhost:8006/users/register',user)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))}


        return(
            <AuthContext.Provider value={{register}}>
                {children}
            </AuthContext.Provider>

        )
}
