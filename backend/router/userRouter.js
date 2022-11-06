const router = require('express').Router()
const registerControll =require('../controller/registerControll.js')
const loginControll= require('../controller/loginControll')



router.post('/register',registerControll)
router.post('/login',loginControll)




module.exports = router