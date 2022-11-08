

const router = require('express').Router()
const allControl = require('../controller/allControl')
const getaControl = require('../controller/aControl')
const addControll = require('../controller/addControll')



router.post('/',allControl)
router.post('/product/:id',getaControl)
router.post('/product',addControll)



module.exports = router