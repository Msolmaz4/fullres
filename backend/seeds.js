const mongosse = require('mongoose')
const Products =require('./modell/ProductModel')


const connect = ()=>{
    mongosse.connect('mongodb://localhost:27017/fullress')
    .then(()=>console.log('mpngodb'))
    .catch(err=>console.log(err))
}

connect()
Products.insertMany([
    {
        title:'deneme',
        desc: 'Ball is life for your family' ,
        img: 'https://i.etsystatic.com/14221782/r/il/623996/2906244845/il_fullxfull.2906244845_lhor.jpg'
        
      },
      {
        title:'deneme12',
        desc: 'aaaaaaaaaaaaaaa',
        img: 'https://i.etsystatic.com/7409307/r/il/96f4d3/664611099/il_fullxfull.664611099_n4fv.jpg',
        
      }
])