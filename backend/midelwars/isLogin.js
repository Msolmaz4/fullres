const jwt = require('jsonwebtoken')


const isLogin =  (req,res,next)=>{

    try {
        const {token} =req.headers
        jwt.verify(token,process.env.AUTH_SEC,(err,decoded)=>{
            if(err) return res.status(403).send('check out payladi') 
            req.token = token
            next()

          })

        
    } catch (error) {
        console.log('isLogin',error)        
    }

}


module.exports =isLogin