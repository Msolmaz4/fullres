import React from 'react'
import { useState } from 'react'
import './add.css'

const Add = () => {
  const[erde,setErde]=useState()

    console.log(erde)
  return (
    <div className='add'>
        <div className="add1">
            <textarea name="" id="text" cols="30" rows="10" value={erde} onChange={(e)=>setErde(e.target.value)}></textarea>
            </div>
            <div>
            <button className='add12'>Img</button>
            </div>
            <div>
            <button className='add123'>Send</button>
            </div>
           
       
        
    </div>
  )
}

export default Add