

const router = require('express').Router()
const allControl = require('../controller/allControl')
const getaControl = require('../controller/aControl')


router.post('/',allControl)
router.post('/product/:id',getaControl)


module.exports = router