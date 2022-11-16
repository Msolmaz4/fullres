import React from 'react'
import Adbutton from './Adbutton'
import Search from './Search'
import Cart from './Cart'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Auth/Auth'





const Carts = () => {

  const [data,setData] = useState()
  const {key}= useContext(AuthContext)
  console.log('cart',key)

  
 
  
  



  useEffect(()=>{
      
    axios.post('http://localhost:3900/products',{key})
    .then((res)=>setData(res.data.data))

  },[key])

   const delet = async(id)=>{
    console.log('cartdelte',id)
    await axios.delete(`http://localhost:3900/products/product/${id}`)
    .then((res)=>console.log(res.data.data))


   }
  const  upload = async(id)=>{
    console.log('uploadd',id)

  }
  

  return (
    <div>
        <Search
   
      />
        {
 data?.map((el)=>(
  <div>

<Cart data={el}
 delet={delet}
 id={el._id}
 upload={upload}
/>
  </div>
 
 )) 
        }
      
        <Adbutton/>
    </div>
  )
}

export default Carts