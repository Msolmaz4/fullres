const mongoose =require('mongoose')
const {Schema} = mongoose


const productSchema = new Schema({
 
    desc:{
        type:String,
        minLenght:[4]
    },
   
    img:{
        type:String,
        default:''
    }

}) 

const Products = mongoose.model('Product',productSchema)
module.exports =Products