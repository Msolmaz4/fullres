import React from 'react'
import './search.css'

const Search = () => {
  return (
    <div className='search-body'>
        <form action="" className='search-bar'>
            <input type="search" name='search' required autoComplete='off' />
            <button className='search-button' type='submit'>
                <span>Search</span>
            </button>
        </form>
    </div>
  )
}

export default Search