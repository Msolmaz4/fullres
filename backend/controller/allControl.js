const Products = require('../modell/ProductModel.js')
const mongoose = require('mongoose')


const allControl = async (req,res)=>{


    try {

        const all = await Products.find()
        console.log(all)

        res.status(200).json({
            message:'succed',
            data:all
        
        })
        
    } catch (error) {
        console.log(error)
        
    }

}

module.exports =allControl