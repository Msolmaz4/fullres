const User = require("../modell/UserModell")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const loginControll = async(req,res)=>{

    const {email,password} = req.body
    console.log(email,password)

    try {
        const emailControl = await User.findOne({email:email})
        const passControl =bcrypt.compareSync(password,emailControl.password)
        if(!passControl) return res.status(400).send('password hata')
        const userToken =jwt.sign(
            {userid:emailControl._id},process.env.AUTH_SEC)

          res.status(200).json({
            message:'succes',
            data:emailControl,
            token:userToken
          })
          
        
    } catch (error) {
        console.log(error)
    }

}
module.exports =loginControll