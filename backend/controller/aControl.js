const Products = require('../modell/ProductModel')


const getaControl = async (req,res)=>{
    try {

     const { id} = req.params
     const denem =  await Products.findById(id)
     console.log(denem)
     res.status(200).send({
        message:'succed',
        data:denem
     })
     console.log(data)
    } catch (err) {
        console.log(err)
    }
}

module.exports =getaControl