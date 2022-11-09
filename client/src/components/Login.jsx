import React from 'react'
import './home.css'

const Login = () => {
  return (
    <div className='ana'>
        <div className="login-card">
            <h2>Login</h2>
            <h3>Enter Your Username</h3>
            <form className='login-form'>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
              
                <button>Login</button>
            </form>
        </div>

    </div>
  )
}

export default Login