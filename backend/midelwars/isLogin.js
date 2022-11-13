const jwt = require('jsonwebtoken')


const isLogin = async (req,res,next)=>{

    try {
        const {token} =req.headers
        jwt.verify(token,process.env.AUTH_SEC_KEY,(err,decoded)=>{
            if(err) return res.status(403).send('check out payladi') 
            req.token = token
            next()

          })

        
    } catch (error) {
        
    }

}


module.exports =isLogin