
import {createContext} from 'react'
import axios from 'axios'


export const  AuthContext = createContext()
export const UserProvider = ({children})=>{



    const register = (userName,email,password)=>{
       // console.log(userName,email,password)

     

        
     
  
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
            <AuthContext.Provider value={{register,login}}>
                {children}
            </AuthContext.Provider>

        )
}
