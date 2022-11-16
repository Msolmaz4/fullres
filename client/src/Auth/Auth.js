
import {createContext, useState} from 'react'
import { useNavigate } from "react-router-dom";

import axios from 'axios'
import { useEffect } from 'react'


export const  AuthContext = createContext()
export const UserProvider = ({children})=>{
    
     const [key,setKey]= useState()
    const [ isAuthenticated,setisAuthenticated] = useState(true)
 
   const navigate = useNavigate();
   const [users,setUsers] = useState()
   console.log(users)

   useEffect(()=>{
    const token = localStorage.getItem('token')
    token && checOut(token)
   },[])
    
   

   const checOut = async(token)=>{
    console.log('checOut',token)
    await axios.get('http://localhost:3900/users/login',{token})
    .then((res)=>console.log('checloooooooooo',res))
    .catch((err)=>console.log('Authchec',err))

    
  
   }


    const register = async (username,email,password)=>{

      
        console.log(username,email,password)
        await axios.post('http://localhost:3900/users/register',{
        username,email,password
        })
        .then((res)=>console.log(res.data))
        .catch(err=>console.log(err))
        navigate('/login')
     }

    const login = async (email,password)=>{
        
      console.log(email,password)
      await   axios.post('http://localhost:3900/users/login',{
            email,password
        })
        .then((res)=>
           { 
            console.log('response',res)
            setUsers(res.data)
            localStorage.setItem('token',res.data.token)
            setisAuthenticated(true)
            navigate('/carts')
           } )
        .catch(err=>console.log(err))

       
}  


const searc =(e)=>{
    e.preventDefault()
    
}


        return(
            <AuthContext.Provider value={{register,login,isAuthenticated ,searc,setKey,key}}>
                {children}
            </AuthContext.Provider>

        )
}
