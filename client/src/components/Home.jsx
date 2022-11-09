import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
        <div className="login-card">
            <h2>Login</h2>
            <h3>Enter Your Username</h3>
            <form className='login-form'>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <a href="#">
                    Forget your password?
                </a>
                <button>Login</button>
            </form>
        </div>

    </div>
  )
}

export default Home