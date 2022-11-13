import React from 'react'
import Adbutton from './Adbutton'
import Search from './Search'
import Cart from './Cart'
import { useEffect } from 'react'
import axios from 'axios'


const Carts = () => {



  useEffect(()=>{
      
    axios.post('http://localhost:3900/products')
    .then((res)=>console.log(res.data.data))

  },[])



  return (
    <div>
        <Search/>
        <Cart/>
        <Adbutton/>
    </div>
  )
}

export default Carts