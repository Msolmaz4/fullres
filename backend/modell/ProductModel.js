const mongoose = require('mongoose')
const { Schema } = mongoose


const productSchema = new Schema({
    title: {
        type: String

    },
    desc: {
        type: String,
        minLenght: [4]
    },

    img: {
        type: String,
        default: ''
    },
    url: {
        type: String
    }

})

const Products = mongoose.model('Product', productSchema)
module.exports = Products