const router = require('express').Router()
const registerControll =require('../controller/registerControll.js')



router.post('/register',registerControll)




module.exports = router