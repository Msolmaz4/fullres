const mongoose = require('mongoose')


const { Schema } = mongoose


const userSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minLenght:[4]
    }
    ,
    email:{
        type:String,
        required:true
    }
    ,
    date: { type: Date, default: Date.now },
    
   
  });

  const User =mongoose.model('User',userSchema)
  export default User