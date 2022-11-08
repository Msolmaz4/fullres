const Products = require('../modell/ProductModel.js')


const allControl = (req,res)=>{


    try {

        const all = Products.find({})

        res.status(200).json({
            message:'succed',
            data:all
        
        })
        
    } catch (error) {
        console.log(error)
        
    }

}

module.exports =allControl