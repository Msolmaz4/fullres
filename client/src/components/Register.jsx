import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div className='register1'>
<div className='register-box'>
        <h2>Register</h2>
        <form >
            <div className='user-box'>
                <input type='text' name='' required />
                <label > UserName</label>
            </div>
            <div className='user-box'>
                <input type='email' name='' required />
                <label > Email</label>
            </div>
            <div className='user-box'>
                <input type='password' name='' required />
                <label > Password</label>
            </div>
            <div className="button-form">
                <a id='submit' href='.//'>Submit</a>
                <div id='register'>
                    Dont have an account?
                    <a href=".////">LOGIN</a>
                </div>

            </div>
        </form>



    </div>
    </div>
    
  )
}

export default Register