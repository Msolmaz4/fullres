import React from 'react'
import Adbutton from './Adbutton'
import Search from './Search'
import Cart from './Cart'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const Carts = () => {

  const [data,setData] = useState()



  useEffect(()=>{
      
    axios.post('http://localhost:3900/products')
    .then((res)=>setData(res.data.data))

  },[])



  return (
    <div>
        <Search/>
        {
 data?.map((el)=>(
  <div>

<Cart data={el}/>
  </div>
 
 )) 
        }
      
        <Adbutton/>
    </div>
  )
}

export default Carts