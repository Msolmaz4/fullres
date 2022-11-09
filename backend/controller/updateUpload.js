const Products = require("../modell/ProductModel")
const { get } = require('mongoose')
const { findByIdAndUpdate } = require('../modell/ProductModel')

// findByIdAndUpdate iki parametre aliyor degistirecegimiy id aldik 
//runVali  benim koydugum kuralar gecerli osun diye new yeniyi dondursdsun
//{runValidators:true, new:true} bunu yapmadan da calisiyor

//bu sekilde upload yapaibiliry
//const ur = await Products.findById(id)
/* const {id} = req.params
        console.log(id)
        const {desc,img} =req.body
     const ur = await Products.findById(id)
        Object.assign(ur,req.body)
        ur.save()
        console.log(ur)
        res.status(200).send(
           { message:'uplod',
             data:ur
        })
*/

const updateUpload = async (req,res)=>{

   
    try {
        const {id} = req.params
        console.log(id)
        const {desc,img} =req.body
        
        const produ = await Products.findByIdAndUpdate(id,{
            desc:desc,
            img:img
        },{runValidators:true, new:true})
        console.log(produ)
        res.status(200).json({
            data:produ,
            message:'iyisin'
        })
    
      
    


   
        
    } catch (error) {
        console.log(error)
    }
}

module.exports =updateUpload