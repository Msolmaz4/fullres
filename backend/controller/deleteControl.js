 const  Products = require('../modell/ProductModel')

const deleteControl = async (req,res) =>{
    try {
        const {id} = req.params
        console.log(id)
         await Products.findByIdAndDelete(id)
        .then(()=>res.status(200).json({message:'gtii'}))
        .catch(err =>res.status(404).send('bulun gelsin'))
    } catch (error) {
        console.log(error)
        
    }
}

module.exports =deleteControl