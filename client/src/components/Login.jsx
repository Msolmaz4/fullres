import React ,{useContext, useState} from 'react'
import { AuthContext } from '../Auth/Auth'
import './home.css'



const Login = () => {

 const {login} = useContext(AuthContext)


  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')

  const handle2 = (e)=>{
    e.preventDefault()
    
    login(email,password)
  }

  return (
    <div className='ana'>
        <div className="login-card">
            <h2>Login</h2>
            <h3>Enter Your Username</h3>
            <form className='login-form' onSubmit={handle2} >
            <input type="text" placeholder='Username' value={email} onChange={(e)=>setEmail(e.target.value)}  />
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
              
                <button onSubmit={handle2} >Login</button>
            </form>
        </div>

    </div>
  )
}

export default Login