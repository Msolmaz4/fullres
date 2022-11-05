const mongosse = require('mongoose')


const connect = ()=>{
    mongosse.connect('mongodb://localhost:27017/fullress')
    .then(()=>console.log('mpngodb'))
    .catch(err=>console.log(err))
}

connect()