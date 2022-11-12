const express = require('express')
const app = express()
const PORT = 3900
require('./db/db')
const userRouter = require('./router/userRouter.js')
const dotenv =require('dotenv')
dotenv.config( { path:'.env'})
const productRouter = require('./router/productRouter.js')
//burada dikkat et hata veroyor yoksa backend on yuz
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended :false}))
app.use(express.json())

app.use('/users',userRouter)
app.use('/products',productRouter)





app.listen(PORT,()=>{
    console.log('baslangic')
})