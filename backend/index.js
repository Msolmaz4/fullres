const express = require('express')
const app = express()
const PORT = 3900

app.get('/',(req,res)=>{
    res.send('baslangib')
})

app.listen(PORT,()=>{
    console.log('baslangic')3
})