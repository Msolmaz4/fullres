const express = require('express')
const app = express()
const PORT = 3900
require('./db/db')
const userRouter = require('./router/userRouter.js')

app.use(express.urlencoded({ extended :false}))
app.use(express.json())

app.use('/users',userRouter)





app.listen(PORT,()=>{
    console.log('baslangic')
})