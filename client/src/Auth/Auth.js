
import {createContext, useState} from 'react'
import axios from 'axios'


export const  AuthContext = createContext()
export const UserProvider = ({children})=>{

    const [ isAuthenticated,setisAuthenticated] = useState(true)



    const register = async (username,email,password)=>{
        console.log(username,email,password)
        await   axios.post('http://localhost:3900/users/register',{
        username,email,password
        })
        .then((res)=>console.log(res.data))
        .catch(err=>console.log(err))

        
     
  
      }

    const login = async (email,password)=>{
        
      console.log(email,password)
      await   axios.post('http://localhost:3900/users/login',{
            email,password
        })
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
       
     





    }  


        return(
            <AuthContext.Provider value={{register,login,isAuthenticated}}>
                {children}
            </AuthContext.Provider>

        )
}
