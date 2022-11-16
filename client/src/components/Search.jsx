import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Auth/Auth'


import './search.css'


const Search = () => {

  const {key,setKey,searc} = useContext(AuthContext)
 
  
 
 

  return (
    <div className='search-body'>
        <form action="" className='search-bar'  onSubmit={searc} >
            <input type="search" name='search' required autoComplete='off' 
            value={key} onChange={(e)=>setKey(e.target.value)} />
            <button className='search-button' type='submit' >
                <span>Search</span>
            </button>
        </form>
    </div>
  )
}

export default Search