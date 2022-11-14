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

   const delet = async(id)=>{
    console.log('cartdelte',id)
    await axios.delete(`http://localhost:3900/products/product/${id}`)
    .then((res)=>console.log(res.data.data))


   }
  


  return (
    <div>
        <Search/>
        {
 data?.map((el)=>(
  <div>

<Cart data={el}
 delet={delet}
 id={el._id}
/>
  </div>
 
 )) 
        }
      
        <Adbutton/>
    </div>
  )
}

export default Carts