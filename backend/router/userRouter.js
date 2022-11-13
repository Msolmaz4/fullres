const router = require('express').Router()
const registerControll =require('../controller/registerControll.js')
const loginControll= require('../controller/loginControll')
const isLogin = require('../midelwars/isLogin.js')



router.post('/register',registerControll)
router.post('/login',isLogin,loginControll)




module.exports = router