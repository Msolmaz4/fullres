import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'

const Adbutton = () => {
  return (
    <div className='add_button'>
      <Link to='/add'>
      <button className='add-button'>ADD</button>
      </Link>
       
    </div>
  )
}

export default Adbutton