import React from "react";
import { useContext } from "react";

import { useState } from "react";
import {AuthContext} from '../Auth/Auth'

import "./register.css";

const Register = () => {

    
    const {register} = useContext(AuthContext)
 
    const [email,setEmail] =useState('')
    const [userName,setUserName] =useState('')
    const [password,setPassword] =useState('')
     
    const handle1 = (e)=>{
        e.preventDefault()
        register(userName,email,password)
         
        

    }


  return (
    <div className="register1">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handle1}>
          <div className="user-box">
            <input type="text" name="" value={userName} onChange={(e)=>setUserName(e.target.value)} required />
            <label> UserName</label>
          </div>
          <div className="user-box">
            <input type="email" name="" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <label> Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            <label> Password</label>
          </div>
          <div className="button-form">
            <button id="submit"  onClick={handle1}>
              Register
            </button>
            <div id="register">
              Dont have an account?
              <a href=".////">LOGIN</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
